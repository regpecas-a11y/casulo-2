import { Jimp } from 'jimp';
import fs from 'fs';
import path from 'path';

async function generateIcons() {
    const imagePath = fs.existsSync(path.join(process.cwd(), 'icon.png'))
        ? path.join(process.cwd(), 'icon.png')
        : fs.existsSync(path.join(process.cwd(), 'public/logo.png')) 
            ? path.join(process.cwd(), 'public/logo.png') 
            : path.join(process.cwd(), 'logo_app.png');
    
    if (!fs.existsSync(imagePath)) {
        console.error('Source image (icon.png, public/logo.png or logo_app.png) not found');
        return;
    }
    console.log(`Using source image: ${imagePath}`);
    const image = await Jimp.read(imagePath);

    const sizes = [
        { name: 'mdpi', size: 48 },
        { name: 'hdpi', size: 72 },
        { name: 'xhdpi', size: 96 },
        { name: 'xxhdpi', size: 144 },
        { name: 'xxxhdpi', size: 192 }
    ];

    const basePath = 'android/app/src/main/res';

    for (const s of sizes) {
        const dir = path.join(basePath, `mipmap-${s.name}`);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        const resized = image.clone().resize({ w: s.size, h: s.size });
        
        // Save ic_launcher.png (Legacy)
        const buffer = await resized.getBuffer('image/png');
        fs.writeFileSync(path.join(dir, 'ic_launcher.png'), buffer);
        
        // Save ic_launcher_round.png (Legacy Round)
        const round = image.clone().resize({ w: s.size, h: s.size });
        round.circle();
        const roundBuffer = await round.getBuffer('image/png');
        fs.writeFileSync(path.join(dir, 'ic_launcher_round.png'), roundBuffer);

        // Save ic_launcher_foreground.png (Adaptive Foreground)
        const foregroundSize = Math.round(s.size * (108/48)); 
        
        const foreground = new Jimp({ width: foregroundSize, height: foregroundSize, color: 0x00000000 });
        const logoResized = image.clone().resize({ w: Math.round(foregroundSize * 0.7), h: Math.round(foregroundSize * 0.7) });
        foreground.composite(logoResized, (foregroundSize - logoResized.width) / 2, (foregroundSize - logoResized.height) / 2);
        
        const foregroundBuffer = await foreground.getBuffer('image/png');
        fs.writeFileSync(path.join(dir, 'ic_launcher_foreground.png'), foregroundBuffer);
        
        console.log(`Generated icons for ${s.name}`);
    }
}

// Run the generation
generateIcons().catch(console.error);
