import sharp from "sharp";
import { readdirSync, writeFileSync, unlinkSync, renameSync } from "fs";
import { join } from "path";
import { execSync } from "child_process";

const dir = "public/photos";
const files = readdirSync(dir).filter(f => /\.jpg$/i.test(f));

// Step 1: Get original EXIF orientation from the initial commit (before optimization)
const INITIAL_COMMIT = "3ac42a7";

console.log("Checking original EXIF orientations from git history...\n");

const needsRotation = [];

for (const f of files) {
  try {
    // Extract original file from git to a temp buffer
    const gitPath = `public/photos/${f}`;
    const buf = execSync(`git show ${INITIAL_COMMIT}:${gitPath}`, { maxBuffer: 50 * 1024 * 1024 });
    const meta = await sharp(buf, { failOn: "none" }).metadata();

    if (meta.orientation && meta.orientation !== 1) {
      console.log(`${f}: original orientation=${meta.orientation} -> needs rotation`);
      needsRotation.push({ file: f, orientation: meta.orientation });
    }
  } catch (e) {
    // File might not exist in initial commit
  }
}

console.log(`\n${needsRotation.length} of ${files.length} photos need rotation fix\n`);

// Step 2: Apply rotation to current files
for (const { file, orientation } of needsRotation) {
  const fp = join(dir, file);
  try {
    // Determine rotation angle based on EXIF orientation
    // 6 = 90° CW, 8 = 90° CCW, 3 = 180°
    let angle;
    if (orientation === 6) angle = 90;
    else if (orientation === 8) angle = 270;
    else if (orientation === 3) angle = 180;
    else continue;

    await sharp(fp, { failOn: "none" })
      .rotate(angle)
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(fp + ".tmp");

    unlinkSync(fp);
    renameSync(fp + ".tmp", fp);

    const meta = await sharp(fp, { failOn: "none" }).metadata();
    console.log(`  ${file}: rotated ${angle}° -> ${meta.width}x${meta.height}`);
  } catch (e) {
    console.log(`  ${file}: FAILED - ${e.message}`);
    try { unlinkSync(fp + ".tmp"); } catch (_) {}
  }
}

console.log("\nDone!");
