// clean-on-save.mjs
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// 📍 Get absolute path of project root
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

// 📁 Define folders
const SOURCE = path.join(ROOT, 'src');               // your detailed code
const OUTPUT = path.join(ROOT, 'supervisor');        // auto-generated version

// 🔁 Recursively copy files from src → supervisor, stripping study comments
async function cleanFolder(srcDir, destDir) {
  const entries = await fs.readdir(srcDir, { withFileTypes: true });

  // Make sure destination folder exists
  await fs.mkdir(destDir, { recursive: true });

  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      await cleanFolder(srcPath, destPath);
    } else if (entry.name.endsWith('.js') || entry.name.endsWith('.jsx')) {
      const content = await fs.readFile(srcPath, 'utf-8');

      // 🧼 Remove /* ... */ comments (Study version)
      const cleaned = content.replace(/\/\*[\s\S]*?\*\//g, '');

      await fs.writeFile(destPath, cleaned);
      console.log(`🧽 Cleaned: ${entry.name}`);
    } else {
      // For other files (images, CSS, etc.)
      await fs.copyFile(srcPath, destPath);
    }
  }
}

// ✅ Run the script
await cleanFolder(SOURCE, OUTPUT);
console.log('✅ Supervisor version updated.');
