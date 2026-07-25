import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const STRINGS = "strings";
const START = "<!-- coverage:start -->";
const END = "<!-- coverage:end -->";

const isContentKey = (k) => !k.startsWith("_");

const FLAGS = {
  en: "🇺🇸",
  de: "🇩🇪",
  ru: "🇷🇺",
  ka: "🇬🇪",
  vi: "🇻🇳",
  pt_BR: "🇧🇷",
  zh_CN: "🇨🇳",
};

function translatorCell(data) {
  const raw =
    typeof data._meta_translator === "string" ? data._meta_translator : "";
  const names = raw
    .split("|")
    .map((s) => s.trim())
    .filter(Boolean);
  if (names.length === 0) return "-";
  const url =
    typeof data._meta_translatorUrl === "string" ? data._meta_translatorUrl : "";
  return names.length === 1 && url ? `[${names[0]}](${url})` : names.join(", ");
}

function loadJson(path) {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch (err) {
    throw new Error(`Failed to parse ${path}: ${err.message}`);
  }
}

const en = loadJson(join(STRINGS, "en.json"));
const baseline = Object.keys(en).filter(isContentKey);
const total = baseline.length;

const rows = readdirSync(STRINGS)
  .filter((f) => f.endsWith(".json") && f !== "manifest.json")
  .sort()
  .map((f) => {
    const code = f.replace(/\.json$/, "");
    const data = loadJson(join(STRINGS, f));
    const done = baseline.filter((k) => {
      const v = data[k];
      return typeof v === "string" && v.trim() !== "";
    }).length;
    const pct = total === 0 ? 0 : Math.round((done / total) * 100);
    const displayName =
      typeof data._meta_displayName === "string" ? data._meta_displayName : code;
    const flag = FLAGS[code] ?? "";
    return {
      code,
      name: flag ? `${flag} ${displayName}` : displayName,
      done,
      pct,
      translator: translatorCell(data),
    };
  });

rows.sort((a, b) =>
  a.code === "en"
    ? -1
    : b.code === "en"
      ? 1
      : b.pct - a.pct || a.code.localeCompare(b.code),
);

const dataRows = rows.map(
  (r) => `| ${r.name} | ${r.pct}% (${r.done}/${total}) | ${r.translator} |`,
);

const DEFAULT_HEADER = "| Language | Coverage | Translator |";
const DELIM = "| --- | --- | --- |";

// A markdown table delimiter row: only |, :, -, and spaces, with at least one dash.
const isDelim = (ln) => {
  const t = ln.trim();
  return t.length > 0 && /^[|:\-\s]+$/.test(t) && t.includes("-");
};

// Every README*.md carries its own (possibly localized) header between the
// markers. We preserve that header + delimiter and regenerate only the
// language-neutral data rows, so adding a new localized README needs no change
// here - just give it the markers and a header row.
const readmes = readdirSync(".")
  .filter((f) => /^README.*\.md$/.test(f))
  .sort();

let targets = 0;
for (const file of readmes) {
  const readme = readFileSync(file, "utf8");
  const s = readme.indexOf(START);
  const e = readme.indexOf(END);
  if (s === -1 || e === -1 || e < s) continue; // not a coverage target

  targets++;
  const lines = readme.slice(s + START.length, e).split("\n");
  const di = lines.findIndex(isDelim);
  const header =
    di > 0 && lines[di - 1].includes("|") ? lines[di - 1].trim() : DEFAULT_HEADER;
  const delim = di !== -1 ? lines[di].trim() : DELIM;

  const block = "\n" + [header, delim, ...dataRows].join("\n") + "\n";
  const updated = readme.slice(0, s + START.length) + block + readme.slice(e);
  if (updated === readme) {
    console.log(`${file}: already current.`);
  } else {
    writeFileSync(file, updated);
    console.log(`${file}: updated.`);
  }
}

if (targets === 0) {
  console.error(
    `No README with coverage markers found. Add a block:\n${START}\n${DEFAULT_HEADER}\n${DELIM}\n${END}`,
  );
  process.exit(1);
}

for (const r of rows) console.log(`  ${r.code.padEnd(6)} ${r.pct}% (${r.done}/${total})`);
