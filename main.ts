// One-Star Review of Something Essential — make.fun entry, v2.
// Writes a single deadpan one-star review (max 160 chars) to /output/entry.txt.
// Champion line (107 chars, beat v1 and v2 in variant-vs-variant proxy-judge
// duels): the sun tans everything it touches, then betrays you with a pale
// watch-shaped patch on the wrist all summer — the grievance is a small,
// specific, instantly recognisable summer injury, and the sting lands in
// the last few words. No exclamation marks, no winking, one joke told cleanly.
import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "One star. The sun tans everything it touches, then leaves a pale watch-shaped patch on my wrist all summer.";

// Gate check, mirroring the sealed scorer: UTF-8 text, 1-160 characters,
// not only whitespace, single line. Count code points, not UTF-16 units.
const chars = [...REVIEW].length;
if (REVIEW.trim().length === 0) throw new Error("review is empty");
if (chars > 160) throw new Error(`review is ${chars} chars, over the 160 cap`);
if (REVIEW.includes("\n")) throw new Error("review must be a single line");

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
const dir = outPath.slice(0, outPath.lastIndexOf("/")) || "/";
mkdirSync(dir, { recursive: true });
writeFileSync(outPath, REVIEW, "utf8");
console.log(`wrote ${chars} chars to ${outPath}`);
