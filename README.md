# App Icons

For production, generate proper PNG icons from the icon.svg file.

You can use tools like:
- Inkscape: `inkscape -w 192 -h 192 icon.svg -o icon-192.png`
- ImageMagick: `convert -background none -size 192x192 icon.svg icon-192.png`
- Online tools: realfavicongenerator.net

Required sizes: 32, 72, 96, 128, 144, 152, 192, 384, 512

The SVG file (icon.svg) can be used directly as a fallback.
