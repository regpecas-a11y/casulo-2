import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const videosDir = path.join(process.cwd(), 'public', 'videos');
if (!fs.existsSync(videosDir)) {
  fs.mkdirSync(videosDir, { recursive: true });
}

// 20 Exercises
const EXERCISES = [
  { id: 'seated-tadasana', num: 11, name: 'Aterramento & Postura Consciente', sub: 'Alinhamento na Cadeira', color: '#1e1b4b' },
  { id: 'heart-womb-connection', num: 14, name: 'Toque do Coracao no Ventre', sub: 'Conexao com o Bebe', color: '#4c0519' },
  { id: 'seated-piriformis-chair', num: 15, name: 'Alongamento do Piriforme', sub: 'Alivio do Nervo Ciatico', color: '#14532d' },
  { id: 'cervical-shoulder-release', num: 13, name: 'Descompressao Cervical', sub: 'Alivio do Trapezio', color: '#312e81' },
  { id: 'standing-mountain-prayer', num: 8, name: 'Postura da Montanha', sub: 'Prece no Peito & Base', color: '#0f172a' },
  { id: 'easy-seated-sukhasana', num: 6, name: 'Postura Facil Sukhasana', sub: 'Coluna Longa & Respiracao', color: '#3b0764' },
  { id: 'tabletop-pelvic-toetaps', num: 4, name: 'Assoalho Pelvico & Mesa', sub: 'Estabilidade em 4 Apoios', color: '#1e293b' },
  { id: 'seated-hamstring-stretch', num: 12, name: 'Alongamento Isquiotibial', sub: 'Prevencao de Caimbras', color: '#022c22' },
  { id: 'deep-malasana-squat', num: 2, name: 'Deusa em Cocoras Malasana', sub: 'Abertura Pelvica Profunda', color: '#701a75' },
  { id: 'goddess-chair-opening', num: 10, name: 'Deusa na Cadeira', sub: 'Mobilidade Sacroiliaca', color: '#831843' },
  { id: 'birth-ball-pelvic-circles', num: 7, name: 'Circulos na Bola de Parto', sub: 'Encaixe Fetal & Mobilidade', color: '#134e4a' },
  { id: 'open-child-pose', num: 3, name: 'Postura da Crianca Aberta', sub: 'Descompressao Sacral', color: '#1e1b4b' },
  { id: 'cobra-cat-wave', num: 1, name: 'Postura da Cobra & Ondulacao', sub: 'Abertura Toracica & Mobilidade', color: '#4a044e' },
  { id: 'supported-glute-bridge-knee-pillow', num: 17, name: 'Ponte Pelvica Restauradora', sub: 'Suporte & Ativacao Glutea', color: '#1e3a5f' },
  { id: 'savasana-side-bolster', num: 9, name: 'Savasana Lateral com Bolster', sub: 'Relaxamento da Veia Cava', color: '#064e3b' },
  { id: 'zafu-mindful-breathing', num: 5, name: 'Meditacao no Zafu', sub: 'Respiracao Diafragmatica', color: '#2e1065' },
  { id: 'mother-baby-heart-connection', num: 16, name: 'Respiracao Amorosa', sub: 'Vinculacao Mae e Bebe', color: '#881337' },
  { id: 'baby-sling-squat', num: 10, name: 'Agachamento com Bebe no Sling', sub: 'Fortalecimento & Conexao', color: '#1c1917' },
  { id: 'baby-sway-dance', num: 7, name: 'Danca Pelvica com Bebe', sub: 'Ritmo Vestibular & Acalento', color: '#431407' },
  { id: 'baby-supported-tree-pose', num: 8, name: 'Postura da Arvore com Apoio', sub: 'Equilibrio & Postura Segura', color: '#042f2e' }
];

console.log('Gerando vídeos MP4 nativos para cada exercício...');

for (const ex of EXERCISES) {
  const safeName = ex.name.replace(/'/g, '');
  const safeSub = ex.sub.replace(/'/g, '');
  const targetId = path.join(videosDir, `${ex.id}.mp4`);
  const targetNum = path.join(videosDir, `video-${ex.num}.mp4`);
  const targetSimpleNum = path.join(videosDir, `${ex.num}.mp4`);

  // Gera o vídeo de 5 segundos em loop suave
  const cmd = `ffmpeg -f lavfi -i color=c="${ex.color}":s=720x480:d=5 -vf "drawtext=text='${safeName}':fontcolor=white:fontsize=24:x=(w-text_w)/2:y=(h-text_h)/2-35,drawtext=text='${safeSub}':fontcolor=0xf43f5e:fontsize=16:x=(w-text_w)/2:y=(h-text_h)/2+10,drawtext=text='Video Demonstrativo HD - Loop Continuo':fontcolor=0x94a3b8:fontsize=12:x=(w-text_w)/2:y=(h-text_h)/2+40" -c:v libx264 -pix_fmt yuv420p -y "${targetId}"`;

  try {
    execSync(cmd, { stdio: 'ignore' });
    // Copiar para os aliases numéricos
    if (!fs.existsSync(targetNum)) fs.copyFileSync(targetId, targetNum);
    if (!fs.existsSync(targetSimpleNum)) fs.copyFileSync(targetId, targetSimpleNum);
    console.log(`✓ Gerado: ${ex.id}.mp4`);
  } catch (err) {
    console.error(`Erro ao gerar ${ex.id}:`, err);
  }
}

console.log('Todos os vídeos MP4 foram gerados com sucesso em /public/videos/');
