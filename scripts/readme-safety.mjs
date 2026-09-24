// Refuses a README that tells a player to delete a folder.
//
// On Windows the mod's folder (htmodloader\mods\tibik) holds tibik.dll AND the
// player's own data, including identity.json - the account sign-in key. The
// recovery phrase is opt-in, so "delete this folder" can end an account for
// good. A path set out in a code block must therefore name a file, never a
// folder, and never identity.json itself (nor the identity.json.corrupt-* and
// identity.json.tmp.* copies the mod can leave beside it). Every README must
// also still mention identity.json, so the warning cannot silently fall out of
// one translation.
//
// Its ceiling: it reads fenced code blocks and indented single-token paths.
// Prose, inline code and tables pass it. It stops the shape that shipped; it is
// not a proof that an instruction is safe.
//
//   node scripts/readme-safety.mjs              check every README*.md
//   node scripts/readme-safety.mjs --selftest   watch it reject first

import { readFileSync, readdirSync } from "node:fs";

const PROTECTED = ["identity.json"];

// Lines that set out a path: everything inside a ``` fence, plus an indented
// single token carrying a separator (a code block without fences).
function candidates(text) {
  const out = [];
  let fenced = false;
  text.split("\n").forEach((raw, i) => {
    const line = raw.replace(/\r$/, "");
    if (/^\s*```/.test(line)) {
      fenced = !fenced;
      return;
    }
    const token = line.trim();
    if (!token) return;
    const indentedPath = /^ {4,}\S+$/.test(line) && /[\\/]/.test(token);
    if (fenced || indentedPath) out.push({ line: i + 1, text: token });
  });
  return out;
}

// The token without surrounding quotes or trailing sentence punctuation, so
// `"htmodloader\mods\tibik".` is judged as the folder it names.
function bare(token) {
  let s = token;
  while (s && `"'`.includes(s[0])) s = s.slice(1);
  while (s && `"'.,;:!?`.includes(s.at(-1))) s = s.slice(0, -1);
  return s;
}

export function problems(text) {
  const found = [];
  for (const c of candidates(text)) {
    const raw = bare(c.text);
    if (/^[a-z][a-z0-9+.-]*:\/\//i.test(raw)) continue; // a URL, not a path
    if (/\s/.test(raw) && !/[\\/]/.test(raw)) continue; // a sentence
    const leaf = raw.replaceAll("\\", "/").split("/").filter(Boolean).pop() ?? "";
    if (PROTECTED.some((p) => leaf === p || leaf.startsWith(p + "."))) {
      found.push(`${c.line}: "${c.text}" names ${leaf}, which is the account sign-in key`);
    } else if (/[*?]/.test(leaf)) {
      found.push(`${c.line}: "${c.text}" is a wildcard, which sweeps up the sign-in key with everything else`);
    } else if (leaf === "." || leaf === ".." || !leaf.includes(".")) {
      found.push(`${c.line}: "${c.text}" names a folder - name the file to delete instead`);
    }
  }
  for (const p of PROTECTED) {
    if (!text.includes(p)) {
      found.push(`never mentions ${p}, so nothing warns that the mod's folder holds the sign-in key`);
    }
  }
  return found;
}

function selftest() {
  const warn = "\nThat folder also holds `identity.json`, your sign-in.\n";
  const fence = (path) => "Delete this:\n\n```\n" + path + "\n```\n";
  const indented = (path) => "Delete this:\n\n    " + path + "\n" + warn;
  const folder = String.raw`htmodloader\mods\tibik`;
  const dll = String.raw`htmodloader\mods\tibik\tibik.dll`;
  const rejected = [
    // What shipped, verbatim: a folder, and no word about the key.
    ["the uninstall step that shipped",
      "By hand, remove Tibik and nothing else by deleting this one folder:\n\n```\n" + folder + "\n```\n"],
    // Each of these trips exactly one rule, so no rule rides on another.
    ["a folder step with the warning present", fence(folder) + warn],
    ["a safe step with the warning gone", fence(dll)],
    ["the sign-in key named as a step", fence(String.raw`htmodloader\mods\tibik\identity.json`) + warn],
    ["a quarantined copy of the key",
      fence(String.raw`htmodloader\mods\tibik\identity.json.corrupt-1789745748`) + warn],
    ["the key named in quotes", fence('"identity.json"') + warn],
    ["a wildcard over the folder", fence(String.raw`htmodloader\mods\tibik\*.*`) + warn],
    ["a shell command naming the folder", fence(String.raw`rmdir /s htmodloader\mods\tibik`) + warn],
    ["an indented folder step without a fence", indented(folder)],
    ["a folder step with a trailing full stop", fence(folder + ".") + warn],
    // Indented, because only there does a trailing \r hide the path; trim()
    // already strips it from a fenced line.
    ["an indented folder step in a CRLF file", indented(folder).replaceAll("\n", "\r\n")],
  ];
  const accepted = [
    ["the file step", fence(dll) + warn],
    ["a URL in a fence", fence("https://github.com/HugeFrog24/libtibik/releases/latest") + warn],
    ["the install layout", fence("Sky.exe\nwinhttp.dll\nhtml-config.json\n" + dll) + warn],
  ];
  let failures = 0;
  for (const [name, text] of rejected) {
    if (problems(text).length === 0) {
      console.error(`selftest FAIL: ${name} was not caught`);
      failures++;
    }
  }
  for (const [name, text] of accepted) {
    const found = problems(text);
    if (found.length) {
      console.error(`selftest FAIL: ${name} was refused: ${found[0]}`);
      failures++;
    }
  }
  console.log(`selftest: ${rejected.length} rejected, ${accepted.length} accepted, ${failures} failure(s)`);
  return failures === 0;
}

if (process.argv.includes("--selftest")) {
  process.exit(selftest() ? 0 : 1);
}

const files = readdirSync(".").filter((f) => /^README.*\.md$/.test(f)).sort();
if (files.length === 0) {
  console.error("No README*.md here - run this from the repository root.");
  process.exit(1);
}
let count = 0;
for (const f of files) {
  for (const p of problems(readFileSync(f, "utf8"))) {
    console.error(`${f}:${p}`);
    count++;
  }
}
if (count) {
  console.error(`\n${count} problem(s). Name the file to delete (tibik.dll), never the folder it shares with the player's data.`);
  process.exit(1);
}
console.log(`${files.length} README(s): every path names a file, none names the sign-in key, all mention it`);
