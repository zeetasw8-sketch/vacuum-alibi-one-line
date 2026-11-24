import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const linePath = join(here, "line.txt"), outPath = join(outDir, "line.txt");

const raw = readFileSync(linePath, "utf8");
const line = raw.trim();
if (line.length === 0 || line.length > 200) {
  throw new Error("line must be 1-200 characters");
}
if (/\n/.test(line)) {
  throw new Error("line must be a single line");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, line + "\n");
console.log(line);
