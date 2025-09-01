import { watch as chokidarWatch } from "chokidar";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

/* Resolve project root based on where THIS file lives */
const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");      // parent folder of /scripts
const SRC  = path.join(ROOT, "Code");
const OUT  = path.join(ROOT, "Supervisor");

/* Safety: ensure Code/ exists, create Supervisor/ if needed */
const srcExists = await fs.stat(SRC).then(() => true).catch(() => false);
if (!srcExists) {
  console.error("✗ Cannot find folder:", SRC);
  console.error("  Expecting structure: <project>/{Code,Supervisor,scripts}");
  process.exit(1);
}
await fs.mkdir(OUT, { recursive: true });

const TEXT_EXT = new Set([".js",".jsx",".ts",".tsx",".css",".html",".json",".md",".txt",".svg"]);

function strip(s,e){
  if([".js",".jsx",".ts",".tsx"].includes(e)) return s.replace(/\/\*[\s\S]*?\*\//g,"");
  if(e===".css") return s.replace(/\/\*\s*STUDY:[\s\S]*?\*\//gi,"");
  if(e===".html") return s.replace(/<!--\s*STUDY:[\s\S]*?-->/gi,"");
  return s;
}

async function ensureDir(d){ await fs.mkdir(d,{recursive:true}); }
async function copyOne(abs){
  const rel = path.relative(SRC, abs);
  const out = path.join(OUT, rel);
  await ensureDir(path.dirname(out));
  const ext = path.extname(abs).toLowerCase();
  if (TEXT_EXT.has(ext)) {
    const raw = await fs.readFile(abs, "utf8");
    await fs.writeFile(out, strip(raw, ext), "utf8");
  } else {
    await fs.copyFile(abs, out);
  }
  console.log("✓", rel);
}
async function walk(dir){
  for (const e of await fs.readdir(dir, { withFileTypes:true })) {
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) await walk(abs); else await copyOne(abs);
  }
}

console.log("Initial build from:", SRC);
await walk(SRC);

const watcher = chokidarWatch("**/*", { cwd: SRC, ignoreInitial:true });
watcher.on("add",    p => copyOne(path.join(SRC, p)));
watcher.on("change", p => copyOne(path.join(SRC, p)));
console.log("Watching for changes…  (OUT:", OUT, ")");
