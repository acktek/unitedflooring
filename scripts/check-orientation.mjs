import sharp from "sharp";
import { readdirSync } from "fs";
import { join } from "path";

const dir = "public/photos";
const files = readdirSync(dir).filter(f => /\.jpg$/i.test(f));

let rotated = 0;
for (const f of files) {
  const m = await sharp(join(dir, f), { failOn: "none" }).metadata();
  const orient = m.orientation || "none";
  const dims = m.width + "x" + m.height;
  if (m.orientation && m.orientation !== 1) {
    console.log(`${f}: orientation=${orient} (${dims})`);
    rotated++;
  }
}
console.log(`\n${rotated} of ${files.length} photos have non-standard orientation`);

console.log("\nSample (first 5):");
for (const f of files.slice(0, 5)) {
  const m = await sharp(join(dir, f), { failOn: "none" }).metadata();
  console.log(`  ${f}: orientation=${m.orientation || "none"} (${m.width}x${m.height})`);
}
