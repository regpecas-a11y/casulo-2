import fs from 'fs';
import path from 'path';

const mipmapDirs = [
    'mipmap-mdpi',
    'mipmap-hdpi',
    'mipmap-xhdpi',
    'mipmap-xxhdpi',
    'mipmap-xxxhdpi',
    'drawable-mdpi',
    'drawable-hdpi',
    'drawable-xhdpi',
    'drawable-xxhdpi',
    'drawable-xxxhdpi',
    'drawable'
];

const basePath = 'android/app/src/main/res';

function fixPngHeader(filePath: string) {
    if (!fs.existsSync(filePath)) return;
    
    const buffer = fs.readFileSync(filePath);
    // Check if it starts with EF BF BD (UTF-8 replacement char)
    if (buffer[0] === 0xEF && buffer[1] === 0xBF && buffer[2] === 0xBD) {
        console.log(`Fixing corrupted header for: ${filePath}`);
        // Replace the first 3 bytes with 0x89
        const fixedBuffer = Buffer.concat([Buffer.from([0x89]), buffer.slice(3)]);
        fs.writeFileSync(filePath, fixedBuffer);
    } else if (buffer[0] !== 0x89) {
        console.log(`Warning: ${filePath} does not start with 0x89 (starts with ${buffer[0].toString(16)})`);
    } else {
        console.log(`OK: ${filePath} has correct header.`);
    }
}

for (const dir of mipmapDirs) {
    const fullDir = path.join(basePath, dir);
    if (fs.existsSync(fullDir)) {
        const files = fs.readdirSync(fullDir);
        for (const file of files) {
            if (file.endsWith('.png')) {
                fixPngHeader(path.join(fullDir, file));
            }
        }
    }
}

// Also check public/logo.png and root icon.png
fixPngHeader('public/logo.png');
fixPngHeader('icon.png');
