import { Jimp } from 'jimp';
import fs from 'fs';
import path from 'path';

async function generateNotificationIcons() {
    const imagePath = path.join(process.cwd(), 'public/logo.png');
    
    if (!fs.existsSync(imagePath)) {
        console.error('public/logo.png not found');
        return;
    }
    
    const image = await Jimp.read(imagePath);

    // Notification icons should be white on transparent
    // We can achieve this by making the image grayscale and then setting all non-transparent pixels to white
    image.greyscale();
    
    // Iterate over pixels and make them white if they are not transparent
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
        const alpha = this.bitmap.data[idx + 3];
        if (alpha > 0) {
            this.bitmap.data[idx] = 255;     // R
            this.bitmap.data[idx + 1] = 255; // G
            this.bitmap.data[idx + 2] = 255; // B
        }
    });

    const sizes = [
        { name: 'mdpi', size: 24 },
        { name: 'hdpi', size: 36 },
        { name: 'xhdpi', size: 48 },
        { name: 'xxhdpi', size: 72 },
        { name: 'xxxhdpi', size: 96 }
    ];

    const basePath = 'android/app/src/main/res';

    for (const s of sizes) {
        const dir = path.join(basePath, `drawable-${s.name}`);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        const resized = image.clone().resize({ w: s.size, h: s.size });
        
        // Save ic_stat_casulo.png
        const buffer = await resized.getBuffer('image/png');
        fs.writeFileSync(path.join(dir, 'ic_stat_casulo.png'), buffer);
        
        console.log(`Generated notification icon for ${s.name} (${s.size}x${s.size})`);
    }
    
    // Also save to default drawable
    const defaultDir = path.join(basePath, 'drawable');
    if (!fs.existsSync(defaultDir)) fs.mkdirSync(defaultDir, { recursive: true });
    const defaultResized = image.clone().resize({ w: 48, h: 48 });
    const defaultBuffer = await defaultResized.getBuffer('image/png');
    fs.writeFileSync(path.join(defaultDir, 'ic_stat_casulo.png'), defaultBuffer);
    console.log('Generated default notification icon');
}

generateNotificationIcons().catch(console.error);
