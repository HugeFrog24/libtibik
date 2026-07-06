import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const STRINGS = "strings";
const README = "README.md";
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

const table = [
  "| Language | Coverage | Translator |",
  "| --- | --- | --- |",
  ...rows.map(
    (r) => `| ${r.name} | ${r.pct}% (${r.done}/${total}) | ${r.translator} |`,
  ),
].join("\n");

const readme = readFileSync(README, "utf8");
const s = readme.indexOf(START);
const e = readme.indexOf(END);
if (s === -1 || e === -1 || e < s) {
  console.error(
    `Coverage markers not found in ${README}. Add an empty block:\n${START}\n${END}`,
  );
  process.exit(1);
}

const updated =
  readme.slice(0, s + START.length) + "\n" + table + "\n" + readme.slice(e);
if (updated === readme) {
  console.log("Coverage table already current.");
} else {
  writeFileSync(README, updated);
  console.log("README coverage table updated.");
}
for (const r of rows) console.log(`  ${r.code.padEnd(6)} ${r.pct}% (${r.done}/${total})`);
