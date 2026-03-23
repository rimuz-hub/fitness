This folder should contain PNG app icons used by the PWA and by PWABuilder.

Run the following to generate the PNGs from the included SVG:

1. Install node dependencies (if not already installed):

   npm install

2. Generate icons:

   npm run generate-icons

This will create `icon-192.png` and `icon-512.png` in this folder.

After generating icons, recreate the ZIP archive at project root (see scripts/pack-www.ps1).
