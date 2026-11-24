// One-Star Review of Something Essential — make.fun entry.
// Writes a single deadpan one-star review (max 160 chars) to /output/entry.txt.
//
// The line, read twice: the grievance is a real paradox everyone recognises
// (the sun burns you yet still leaves you vitamin D deficient), the deadpan
// holds all the way through, and the sting lands in the last few words.
// No exclamation marks, no winking, one joke told cleanly.
import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "One star. The sun is too bright to look at, too hot to stand near, and somehow still leaves me vitamin D deficient.";

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
