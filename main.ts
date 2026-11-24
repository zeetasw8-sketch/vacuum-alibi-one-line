import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url)), outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const linePath = join(here, "line.txt"), outPath = join(outDir, "line.txt");

const raw = readFileSync(linePath, "utf8");
const line = raw.trim();
if (!line || line.length > 200 || /\n/.test(line)) throw new Error("line must be one line, 1-200 characters");
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, line + "\n");
console.log(line);
