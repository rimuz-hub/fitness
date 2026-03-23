const fs = require('fs');
const path = require('path');

async function generate() {
  // lazy-require sharp so user can install it only when needed
  let sharp;
  try {
    sharp = require('sharp');
  } catch (e) {
    console.error('This script requires the "sharp" package. Install with: npm install sharp');
    process.exit(1);
  }

  const svgPath = path.join(__dirname, '..', 'www', 'icon.svg');
  const outDir = path.join(__dirname, '..', 'www', 'icons');
  const outPath192 = path.join(outDir, 'icon-192.png');
  const outPath512 = path.join(outDir, 'icon-512.png');

  if (!fs.existsSync(svgPath)) {
    console.error('SVG source not found at', svgPath);
    process.exit(1);
  }

  fs.mkdirSync(outDir, { recursive: true });

  const svgBuffer = fs.readFileSync(svgPath);

  try {
    await sharp(svgBuffer)
      .resize(192, 192, { fit: 'cover' })
      .png({ quality: 90 })
      .toFile(outPath192);

    await sharp(svgBuffer)
      .resize(512, 512, { fit: 'cover' })
      .png({ quality: 90 })
      .toFile(outPath512);

    console.log('Generated:', outPath192, outPath512);
  } catch (err) {
    console.error('Failed to generate PNG:', err);
    process.exit(1);
  }
}

generate();
