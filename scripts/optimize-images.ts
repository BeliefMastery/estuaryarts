import fs from "fs";
import path from "path";
import sharp from "sharp";

const IMAGES_DIR = path.join(process.cwd(), "public", "images");
const SRC_MANIFEST_PATH = path.join(process.cwd(), "src", "lib", "image-manifest.json");
const WIDTHS = [1600, 1200, 800, 400];

export interface ImageManifestEntry {
  width: number;
  height: number;
  webp: Record<string, string>;
  jpeg: string;
}

export type ImageManifest = Record<string, ImageManifestEntry>;

function walkDir(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkDir(full));
    } else if (isSourceImage(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

function isSourceImage(name: string): boolean {
  if (!/\.(jpe?g|png)$/i.test(name)) return false;
  if (/-opt\.jpe?g$/i.test(name)) return false;
  if (/-\d+\.webp$/i.test(name)) return false;
  return true;
}

async function optimizeImage(filePath: string, manifest: ImageManifest) {
  const rel = path.relative(path.join(process.cwd(), "public"), filePath).replace(/\\/g, "/");
  const key = "/" + rel;
  const ext = path.extname(filePath).toLowerCase();
  const baseName = filePath.slice(0, -ext.length);
  const meta = await sharp(filePath).metadata();
  const originalWidth = meta.width || 1200;
  const originalHeight = meta.height || 900;

  const webp: Record<string, string> = {};
  for (const w of WIDTHS) {
    if (w > originalWidth) continue;
    const outPath = `${baseName}-${w}.webp`;
    await sharp(filePath)
      .resize(w, undefined, { withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(outPath);
    webp[String(w)] = "/" + path.relative(path.join(process.cwd(), "public"), outPath).replace(/\\/g, "/");
  }

  // Always ensure at least one WebP variant exists for smaller images
  if (Object.keys(webp).length === 0) {
    const outPath = `${baseName}-${originalWidth}.webp`;
    await sharp(filePath).webp({ quality: 82 }).toFile(outPath);
    webp[String(originalWidth)] =
      "/" + path.relative(path.join(process.cwd(), "public"), outPath).replace(/\\/g, "/");
  }

  const jpegOut = `${baseName}-opt.jpg`;
  const targetW = Math.min(originalWidth, 1400);
  await sharp(filePath)
    .resize(targetW, undefined, { withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(jpegOut);
  const jpeg = "/" + path.relative(path.join(process.cwd(), "public"), jpegOut).replace(/\\/g, "/");

  manifest[key] = {
    width: originalWidth,
    height: originalHeight,
    webp,
    jpeg,
  };

  const before = fs.statSync(filePath).size;
  const after = fs.statSync(jpegOut).size;
  console.log(`  ${key}: ${Math.round(before / 1024)}KB -> ${Math.round(after / 1024)}KB`);
}

async function main() {
  if (!fs.existsSync(IMAGES_DIR)) {
    fs.writeFileSync(SRC_MANIFEST_PATH, "{}");
    return;
  }

  const files = walkDir(IMAGES_DIR);
  const manifest: ImageManifest = {};
  console.log(`Optimizing ${files.length} images...`);

  for (const file of files) {
    await optimizeImage(file, manifest);
  }

  fs.mkdirSync(path.dirname(SRC_MANIFEST_PATH), { recursive: true });
  fs.writeFileSync(SRC_MANIFEST_PATH, JSON.stringify(manifest, null, 2));
  console.log(`Wrote ${SRC_MANIFEST_PATH} (${Object.keys(manifest).length} entries).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
