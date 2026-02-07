import sharp from "sharp";
import { readdir, stat, unlink, rename } from "fs/promises";
import { resolve } from "path";

const INPUT_DIR = "public/photos";
const MAX_WIDTH = 1600;
const QUALITY = 80;

async function optimize() {
  const files = await readdir(INPUT_DIR);
  const jpgs = files.filter((f) => /\.(jpg|jpeg)$/i.test(f));

  console.log(`Optimizing ${jpgs.length} JPGs...\n`);

  let totalBefore = 0;
  let totalAfter = 0;
  let skipped = 0;

  for (const file of jpgs) {
    const filePath = resolve(INPUT_DIR, file);
    const before = (await stat(filePath)).size;

    // Skip already-optimized files (under 500KB)
    if (before < 500 * 1024) {
      totalBefore += before;
      totalAfter += before;
      continue;
    }

    try {
      const buf = await sharp(filePath, { failOn: "none" })
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .jpeg({ quality: QUALITY, mozjpeg: true })
        .toBuffer();

      await sharp(buf).toFile(filePath + ".tmp");
      await unlink(filePath);
      await rename(filePath + ".tmp", filePath);

      const after = (await stat(filePath)).size;
      totalBefore += before;
      totalAfter += after;

      const pct = ((1 - after / before) * 100).toFixed(0);
      console.log(`  ${file}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB (${pct}% smaller)`);
    } catch (err) {
      skipped++;
      totalBefore += before;
      totalAfter += before;
      console.log(`  ${file}: SKIPPED (${err.message})`);
    }
  }

  console.log(`\nDone! ${jpgs.length - skipped} optimized, ${skipped} skipped.`);
  console.log(`Total: ${(totalBefore / 1024 / 1024).toFixed(1)}MB -> ${(totalAfter / 1024 / 1024).toFixed(1)}MB (${((1 - totalAfter / totalBefore) * 100).toFixed(0)}% reduction)`);
}

optimize().catch(console.error);
