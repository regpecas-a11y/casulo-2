import fs from 'fs';
import path from 'path';

const filesToDelete = [
    'icon.png',
    'android/app/src/main/res/mipmap-mdpi/ic_launcher.png',
    'android/app/src/main/res/mipmap-mdpi/ic_launcher_round.png',
    'android/app/src/main/res/mipmap-mdpi/ic_launcher_foreground.png',
    'android/app/src/main/res/mipmap-hdpi/ic_launcher.png',
    'android/app/src/main/res/mipmap-hdpi/ic_launcher_round.png',
    'android/app/src/main/res/mipmap-hdpi/ic_launcher_foreground.png',
    'android/app/src/main/res/mipmap-xhdpi/ic_launcher.png',
    'android/app/src/main/res/mipmap-xhdpi/ic_launcher_round.png',
    'android/app/src/main/res/mipmap-xhdpi/ic_launcher_foreground.png',
    'android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png',
    'android/app/src/main/res/mipmap-xxhdpi/ic_launcher_round.png',
    'android/app/src/main/res/mipmap-xxhdpi/ic_launcher_foreground.png',
    'android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png',
    'android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.png',
    'android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_foreground.png',
    'android/app/src/main/res/mipmap-anydpi-v26/ic_launcher.xml',
    'android/app/src/main/res/mipmap-anydpi-v26/ic_launcher_round.xml'
];

console.log('Cleaning up corrupted/incorrect files...');
for (const f of filesToDelete) {
    if (fs.existsSync(f)) {
        fs.unlinkSync(f);
        console.log(`Deleted: ${f}`);
    }
}

console.log('Replacing root icon.png with valid version from public/logo.png...');
if (fs.existsSync('public/logo.png')) {
    fs.copyFileSync('public/logo.png', 'icon.png');
    console.log('icon.png restored successfully.');
} else {
    console.error('CRITICAL: public/logo.png not found. Cannot restore icon.png.');
}
