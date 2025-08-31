// Mirrors cleaned files to /Supervisor on save (keeps // summaries, strips study notes)
/*
  WHAT: Node watcher that copies only "clean" code for marking.
  WHY: You write long STUDY notes; the marker sees short summaries only.
  HOW:
    - Watch JS/TS/JSX/TSX/CSS/HTML files.
    - On save, read source, remove STUDY notes, keep summaries.
    - Write mirror to /Supervisor with same folder structure.

  IMPORTANT for STUDY comments:
    - Inside block comments (/* ... *\/), never type STAR-SLASH literally.
      Use "*\/" instead of "*/" in your explanations to avoid closing the comment.
*/

import { watch as chokidarWatch } from 'chokidar';
import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const SRC_ROOT = process.cwd();
const OUT_ROOT = path.join(SRC_ROOT, 'Supervisor');
const GLOBS = ['**/*.{js,jsx,ts,tsx,html,css}'];
const IGNORED = ['**/node_modules/**', '**/.git/**', '**/Supervisor/**'];

/*
  cleanContent(relPath, content)
  - Applies language-specific deletion rules.
*/
function cleanContent(relPath, content) {
  const ext = path.extname(relPath).toLowerCase();
  let out = content;

  if (['.js', '.jsx', '.ts', '.tsx'].includes(ext)) {
    /*
      Remove JSX STUDY notes like: { /* ... *\/ }
      Pattern (written in words): "{  slash-star  any-text  star-slash  }"
      Actual regex (slashes escaped inside this comment to avoid STAR-SLASH issues):
        /\{\s*\/\*[\s\S]*?\*\/\s*\}/g
    */
    out = out.replace(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g, '');

    /*
      Remove plain block comments (including JSDoc) like: /* ... *\/
      Regex: /\/\*[\s\S]*?\*\//g
    */
    out = out.replace(/\/\*[\s\S]*?\*\//g, '');

    // Keep // single-line summaries
    return out;
  }

  if (ext === '.css') {
    // Remove only STUDY notes; keep /* SUMMARY: ... */
    out = out.replace(/\/\*\s*STUDY:[\s\S]*?\*\//gi, '');
    return out;
  }

  if (ext === '.html' || relPath.toLowerCase().endsWith('.htm')) {
    // Remove only <!-- STUDY: ... -->
    out = out.replace(/<!--\s*STUDY:[\s\S]*?-->/gi, '');
    return out;
  }

  return out; // untouched for other types
}

function mirrorPath(absFile) {
  const rel = path.relative(SRC_ROOT, absFile);
  return path.join(OUT_ROOT, rel);
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function processFile(absFile) {
  try {
    const rel = path.relative(SRC_ROOT, absFile);
    const outFile = mirrorPath(absFile);
    await ensureDir(path.dirname(outFile));
    const raw = await fs.readFile(absFile, 'utf8');
    const cleaned = cleanContent(rel, raw);
    await fs.writeFile(outFile, cleaned, 'utf8');
    console.log(`[clean] ${rel} -> Supervisor/${rel}`);
  } catch (e) {
    console.error('[clean:error]', e?.message || e);
  }
}

async function removeMirroredFile(absFile) {
  try {
    await fs.rm(mirrorPath(absFile), { force: true });
    console.log(`[delete] Supervisor/${path.relative(SRC_ROOT, absFile)}`);
  } catch {}
}

async function removeMirroredDir(absDir) {
  try {
    await fs.rm(mirrorPath(absDir), { recursive: true, force: true });
    console.log(`[rmdir] Supervisor/${path.relative(SRC_ROOT, absDir)}`);
  } catch {}
}

chokidarWatch(GLOBS, {
  ignored: IGNORED,
  ignoreInitial: false,
  awaitWriteFinish: { stabilityThreshold: 200, pollInterval: 50 },
})
  .on('add', processFile)
  .on('change', processFile)   // Ctrl+S triggers this
  .on('unlink', removeMirroredFile)
  .on('unlinkDir', removeMirroredDir)
  .on('ready', () => console.log('Watcher ready: mirroring to /Supervisor on save.'));
