
import Jimp from 'jimp';
import path from 'path';
import fs from 'fs';

const ICON_SIZES = [
  { name: 'mipmap-mdpi', size: 48 },
  { name: 'mipmap-hdpi', size: 72 },
  { name: 'mipmap-xhdpi', size: 96 },
  { name: 'mipmap-xxhdpi', size: 144 },
  { name: 'mipmap-xxxhdpi', size: 192 },
];

async function generateIcons() {
  const sourcePath = fs.existsSync('public/logo.png') ? 'public/logo.png' : 'casulo_logo.png';
  console.log(`Using source image: ${sourcePath}`);
  const sourceImage = await Jimp.read(sourcePath);
  const resDir = path.join(process.cwd(), 'android', 'app', 'src', 'main', 'res');

  for (const { name, size } of ICON_SIZES) {
    const dirPath = path.join(resDir, name);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    // Square icon
    const square = sourceImage.clone().resize(size, size);
    await square.writeAsync(path.join(dirPath, 'ic_launcher.png'));

    // Round icon (using a circle mask)
    const round = sourceImage.clone().resize(size, size);
    round.circle();
    await round.writeAsync(path.join(dirPath, 'ic_launcher_round.png'));
    
    console.log(`Generated icons for ${name} (${size}x${size})`);
  }
}

generateIcons().catch(console.error);
