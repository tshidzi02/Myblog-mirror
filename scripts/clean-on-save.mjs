import { watch as chokidarWatch } from "chokidar";   /* STUDY: file watcher */
import fs from "node:fs/promises";                   /* STUDY: async fs API */
import path from "node:path";                        /* STUDY: path utils */
import process from "node:process";                  /* STUDY: cwd() etc. */

/* STUDY: Important paths */
const ROOT = process.cwd();                          /* STUDY: PROJECT1 root */
const SRC  = path.join(ROOT, "Code");                /* STUDY: source folder */
const OUT  = path.join(ROOT, "Supervisor");          /* STUDY: mirror folder */

/* STUDY: Text file extensions (write as UTF-8). Everything else = binary copy */
const TEXT_EXT = new Set([
  ".js",".jsx",".ts",".tsx",".css",".html",".json",".md",".txt",".svg"
]);

/* STUDY: Make sure dir exists before writing */
async function ensureDir(dir){ await fs.mkdir(dir, { recursive:true }); }

/* STUDY: Strip study notes by file type */
function strip(code, ext){
  if ([".js",".jsx",".ts",".tsx"].includes(ext)) {
    /* remove any block comment */
    return code.replace(/\/\*[\s\S]*?\*\//g, "");
  }
  if (ext === ".css") {
    /* remove only STUDY blocks */
    return code.replace(/\/\*\s*STUDY:[\s\S]*?\*\//gi, "");
  }
  if (ext === ".html") {
    /* remove only STUDY comments */
    return code.replace(/<!--\s*STUDY:[\s\S]*?-->/gi, "");
  }
  return code;
}

/* STUDY: Copy one file from Code/ → Supervisor/ */
async function copyOne(absSrc){
  const rel   = path.relative(SRC, absSrc);          /* STUDY: e.g., src/App.jsx */
  const absOut= path.join(OUT, rel);                 /* STUDY: Supervisor/src/App.jsx */
  await ensureDir(path.dirname(absOut));
  const ext = path.extname(absSrc).toLowerCase();

  if (TEXT_EXT.has(ext)) {
    const raw = await fs.readFile(absSrc, "utf8");   /* STUDY: read as text */
    const cleaned = strip(raw, ext);                 /* STUDY: remove notes */
    await fs.writeFile(absOut, cleaned, "utf8");     /* STUDY: write text */
  } else {
    await fs.copyFile(absSrc, absOut);               /* STUDY: binary copy */
  }
  console.log("✓", rel);
}

/* STUDY: Walk the tree and process every file once */
async function walk(dir){
  const entries = await fs.readdir(dir, { withFileTypes:true });
  for (const e of entries){
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) await walk(abs);
    else await copyOne(abs);
  }
}

/* STUDY: Initial build + watcher */
await ensureDir(OUT);
console.log("Initial build from:", SRC);
await walk(SRC);

const watcher = chokidarWatch("**/*", { cwd: SRC, ignoreInitial:true });
watcher.on("add",    p => copyOne(path.join(SRC, p)));
watcher.on("change", p => copyOne(path.join(SRC, p)));
console.log("Watching for changes…");
