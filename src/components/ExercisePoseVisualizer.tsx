import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Wind, 
  Eye, 
  ShieldCheck, 
  Info, 
  Play, 
  Pause, 
  RotateCcw
} from 'lucide-react';
import { RichPrenatalExercise } from '../data/prenatalExercisesData';

interface ExercisePoseVisualizerProps {
  exercise: RichPrenatalExercise;
  className?: string;
  isBreathingActive?: boolean;
}

export const ExercisePoseVisualizer: React.FC<ExercisePoseVisualizerProps> = ({
  exercise,
  className = '',
  isBreathingActive = true
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [showAlignmentGuides, setShowAlignmentGuides] = useState<boolean>(true);
  const [breathingPhase, setBreathingPhase] = useState<'inhale' | 'exhale'>('inhale');
  const [phaseSeconds, setPhaseSeconds] = useState<number>(4);

  // Ciclo de respiração contínuo (Inalação 4s / Exalação 6s)
  useEffect(() => {
    if (!isPlaying || !isBreathingActive) return;

    let currentPhase = 'inhale';
    let timeLeft = 4;

    const interval = setInterval(() => {
      timeLeft -= 1;
      if (timeLeft <= 0) {
        if (currentPhase === 'inhale') {
          currentPhase = 'exhale';
          timeLeft = 6;
        } else {
          currentPhase = 'inhale';
          timeLeft = 4;
        }
        setBreathingPhase(currentPhase as 'inhale' | 'exhale');
      }
      setPhaseSeconds(timeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, isBreathingActive]);

  // Renderizador das ilustrações vetoriais específicas para cada postura
  const renderPoseGraphics = () => {
    const isExhale = breathingPhase === 'exhale';
    const breathScale = isExhale ? 0.96 : 1.04;
    const bellyScale = isExhale ? 0.98 : 1.05;

    switch (exercise.id) {
      // 1. POSTURA DA CRIANÇA ABERTA (OPEN CHILD POSE)
      case 'open-child-pose':
        return (
          <g transform="translate(180, 160)">
            {/* Tapete de Yoga */}
            <rect x="-140" y="100" width="380" height="16" rx="8" fill="#fda4af" opacity="0.4" />
            <line x1="-120" y1="108" x2="220" y2="108" stroke="#f43f5e" strokeWidth="2" strokeDasharray="6 6" opacity="0.6" />

            {/* Pernas dobradas (joelhos abertos no chão) */}
            {/* Perna de trás */}
            <path d="M-80,95 Q-110,60 -70,30 Q-40,65 -50,95 Z" fill="#334155" />
            <ellipse cx="-85" cy="98" rx="16" ry="8" fill="#1e293b" />

            {/* Perna da frente */}
            <path d="M-60,95 Q-90,60 -40,30 Q-10,65 -30,95 Z" fill="#475569" />
            <ellipse cx="-65" cy="100" rx="18" ry="9" fill="#334155" />

            {/* Bacia / Glúteo sobre os calcanhares */}
            <ellipse cx="-50" cy="30" rx="26" ry="24" fill="#475569" />

            {/* Tronco inclinado em direção ao solo com respiração */}
            <motion.g
              animate={{ 
                rotate: isPlaying ? (isExhale ? 2 : 0) : 0,
                y: isPlaying ? (isExhale ? 4 : 0) : 0 
              }}
              transition={{ duration: isExhale ? 6 : 4, ease: "easeInOut" }}
            >
              {/* Coluna vertebral longa */}
              <path d="M-35,28 C0,20 40,25 90,45" stroke="#e2e8f0" strokeWidth="22" strokeLinecap="round" fill="none" />
              
              {/* Barriguinha gestante acomodada suavemente no espaço entre os joelhos */}
              <motion.ellipse 
                cx="30" 
                cy="58" 
                rx="30" 
                ry="26" 
                fill="#fda4af" 
                opacity="0.85"
                animate={{ scale: isPlaying ? bellyScale : 1 }}
                transition={{ duration: isExhale ? 6 : 4 }}
              />
              <path d="M10,40 Q35,78 60,48" stroke="#f43f5e" strokeWidth="2.5" fill="none" opacity="0.6" />

              {/* Peito e Ombros relaxados */}
              <ellipse cx="85" cy="46" rx="20" ry="16" fill="#f43f5e" opacity="0.9" />

              {/* Cabeça / Testa repousando suavemente */}
              <circle cx="125" cy="56" r="17" fill="#fed7aa" />
              {/* Cabelo coque sereno */}
              <circle cx="132" cy="46" r="10" fill="#78350f" />
              <path d="M112,50 Q130,42 138,55" fill="#78350f" />

              {/* Braços estendidos à frente no tapete com palmas no chão */}
              <path d="M85,46 Q130,68 180,85" stroke="#fed7aa" strokeWidth="11" strokeLinecap="round" fill="none" />
              <ellipse cx="184" cy="87" rx="10" ry="5" fill="#fed7aa" />
            </motion.g>

            {/* Guias visuais anatômicos de alívio sacral */}
            {showAlignmentGuides && (
              <g>
                {/* Linha de descompressão da coluna */}
                <path d="M-40,15 Q30,5 110,25" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="4 4" fill="none" />
                <circle cx="-40" cy="15" r="4" fill="#38bdf8" />
                <circle cx="110" cy="25" r="4" fill="#38bdf8" />

                {/* Destaque do espaço para a barriga */}
                <circle cx="30" cy="58" r="36" stroke="#fb7185" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
                
                {/* Texto de alinhamento */}
                <rect x="-10" y="-35" width="160" height="26" rx="13" fill="#0f172a" opacity="0.9" />
                <text x="70" y="-18" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">
                  ✓ Descompressão da Coluna
                </text>

                <rect x="5" y="115" width="180" height="24" rx="12" fill="#0f172a" opacity="0.9" />
                <text x="95" y="131" textAnchor="middle" fill="#fda4af" fontSize="10" fontWeight="bold">
                  ✓ Joelhos Afastados (Espaço Pro Bebê)
                </text>
              </g>
            )}
          </g>
        );

      // 2. POSTURA DA COBRA & ONDULAÇÃO PÉLVICA (COBRA / CAT-WAVE)
      case 'cobra-cat-wave':
        return (
          <g transform="translate(180, 150)">
            <rect x="-140" y="110" width="360" height="16" rx="8" fill="#c084fc" opacity="0.3" />

            {/* Pernas e Joelhos em 4 Apoios */}
            <path d="M-70,110 L-70,40 L-40,40 L-40,110" stroke="#475569" strokeWidth="20" strokeLinecap="round" fill="none" />
            <ellipse cx="-55" cy="40" rx="22" ry="18" fill="#475569" />

            {/* Tronco ondulando */}
            <motion.g
              animate={{
                y: isPlaying ? (isExhale ? -8 : 6) : 0
              }}
              transition={{ duration: isExhale ? 6 : 4, ease: "easeInOut" }}
            >
              {/* Coluna em arco suave seguro para gestantes */}
              <path 
                d={isExhale ? "M-40,38 Q30,15 100,25" : "M-40,38 Q30,48 100,20"} 
                stroke="#e2e8f0" 
                strokeWidth="24" 
                strokeLinecap="round" 
                fill="none" 
              />

              {/* Barriga materna segura */}
              <ellipse cx="30" cy="58" rx="28" ry="24" fill="#fda4af" opacity="0.9" />

              {/* Peito aberto */}
              <ellipse cx="95" cy="25" rx="20" ry="18" fill="#f43f5e" />

              {/* Braços firmes alinhados aos ombros */}
              <line x1="95" y1="35" x2="95" y2="110" stroke="#fed7aa" strokeWidth="16" strokeLinecap="round" />
              <ellipse cx="95" cy="112" rx="14" ry="6" fill="#fed7aa" />

              {/* Cabeça e olhar sereno */}
              <circle cx="120" cy="10" r="18" fill="#fed7aa" />
              <circle cx="126" cy="0" r="10" fill="#78350f" />
            </motion.g>

            {showAlignmentGuides && (
              <g>
                <path d="M-30,0 Q35,-15 110,-5" stroke="#a855f7" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                <rect x="0" y="-35" width="170" height="24" rx="12" fill="#0f172a" opacity="0.9" />
                <text x="85" y="-19" textAnchor="middle" fill="#c084fc" fontSize="10" fontWeight="bold">
                  {isExhale ? '🌬️ Ondulação: Arrepie Suave' : '🌸 Inalação: Abertura Torácica'}
                </text>
              </g>
            )}
          </g>
        );

      // 3. DEUSA EM CÓCORAS (MALASANA PROFUNDA)
      case 'deep-malasana-squat':
        return (
          <g transform="translate(240, 160)">
            <rect x="-140" y="110" width="280" height="16" rx="8" fill="#f43f5e" opacity="0.3" />

            {/* Pés firmes no chão afastados */}
            <ellipse cx="-75" cy="110" rx="18" ry="8" fill="#334155" />
            <ellipse cx="75" cy="110" rx="18" ry="8" fill="#334155" />

            {/* Pernas e Joelhos abertos para as laterais */}
            <path d="M-75,108 Q-95,65 -45,45 Q-15,65 -20,85" stroke="#475569" strokeWidth="22" strokeLinecap="round" fill="none" />
            <path d="M75,108 Q95,65 45,45 Q15,65 20,85" stroke="#475569" strokeWidth="22" strokeLinecap="round" fill="none" />

            {/* Pélvis baixa com abertura máxima */}
            <ellipse cx="0" cy="70" rx="36" ry="24" fill="#334155" />

            {/* Barriga acolhida no centro */}
            <motion.ellipse 
              cx="0" 
              cy="35" 
              rx="32" 
              ry="28" 
              fill="#fda4af" 
              opacity="0.9"
              animate={{ scale: isPlaying ? bellyScale : 1 }}
              transition={{ duration: isExhale ? 6 : 4 }}
            />

            {/* Tronco ereto */}
            <path d="M0,60 L0,5" stroke="#f43f5e" strokeWidth="24" strokeLinecap="round" />

            {/* Cotovelos empurrando joelhos e Mãos em Prece (Anjali Mudra) */}
            <path d="M-20,10 Q-50,30 -60,50 Q-30,45 -5,25" stroke="#fed7aa" strokeWidth="12" strokeLinecap="round" fill="none" />
            <path d="M20,10 Q50,30 60,50 Q30,45 5,25" stroke="#fed7aa" strokeWidth="12" strokeLinecap="round" fill="none" />
            <ellipse cx="0" cy="25" rx="9" ry="12" fill="#fed7aa" />

            {/* Cabeça ereta e elegante */}
            <circle cx="0" cy="-20" r="18" fill="#fed7aa" />
            <circle cx="0" cy="-32" r="10" fill="#78350f" />

            {showAlignmentGuides && (
              <g>
                <circle cx="0" cy="70" r="45" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                <rect x="-85" y="-60" width="170" height="24" rx="12" fill="#0f172a" opacity="0.9" />
                <text x="0" y="-44" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">
                  ✓ Abertura dos Ísquios para o Parto
                </text>
              </g>
            )}
          </g>
        );

      // 4. ATERRAMENTO NA CADEIRA (SEATED TADASANA) & OUTROS SENTADOS NA CADEIRA
      case 'seated-tadasana':
      case 'seated-piriformis-chair':
      case 'goddess-chair-opening':
      case 'seated-hamstring-stretch':
        return (
          <g transform="translate(230, 140)">
            {/* Cadeira de madeira de suporte */}
            <path d="M-60,-20 L-60,110 M-20,50 L-20,110 M-60,50 L10,50" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />

            {/* Perna e Coxa sentada */}
            <path d="M-40,48 L15,48 L15,110" stroke="#334155" strokeWidth="22" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <ellipse cx="15" cy="112" rx="16" ry="7" fill="#1e293b" />

            {/* Tronco ereto alongado */}
            <motion.g
              animate={{ y: isPlaying ? (isExhale ? 2 : -2) : 0 }}
              transition={{ duration: isExhale ? 6 : 4, ease: "easeInOut" }}
            >
              <line x1="-35" y1="48" x2="-35" y2="-10" stroke="#e2e8f0" strokeWidth="24" strokeLinecap="round" />
              <ellipse cx="-15" cy="18" rx="28" ry="24" fill="#fda4af" opacity="0.9" />
              <ellipse cx="-35" cy="-10" rx="18" ry="16" fill="#f43f5e" />

              {/* Braços repousando nas coxas */}
              <path d="M-35,-8 Q-10,15 5,42" stroke="#fed7aa" strokeWidth="12" strokeLinecap="round" fill="none" />
              <ellipse cx="6" cy="44" rx="8" ry="6" fill="#fed7aa" />

              {/* Cabeça alinhada */}
              <circle cx="-35" cy="-35" r="18" fill="#fed7aa" />
              <circle cx="-42" cy="-45" r="10" fill="#78350f" />
            </motion.g>

            {showAlignmentGuides && (
              <g>
                <line x1="-35" y1="-55" x2="-35" y2="50" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
                <rect x="-110" y="-75" width="160" height="24" rx="12" fill="#0f172a" opacity="0.9" />
                <text x="-30" y="-59" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">
                  ✓ Eixo Axial 100% Alinhado
                </text>
              </g>
            )}
          </g>
        );

      // 5. MOBILIDADE NA BOLA DE PARTO (BIRTH BALL)
      case 'birth-ball-pelvic-circles':
        return (
          <g transform="translate(230, 140)">
            {/* Bola de Parto Suíça */}
            <circle cx="-20" cy="65" r="46" fill="#0d9488" opacity="0.85" />
            <ellipse cx="-20" cy="65" rx="38" ry="44" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeDasharray="6 4" />

            {/* Pernas apoiadas no solo com firmeza */}
            <path d="M-20,50 L40,55 L40,110" stroke="#334155" strokeWidth="20" strokeLinecap="round" fill="none" />
            <ellipse cx="40" cy="112" rx="16" ry="7" fill="#1e293b" />

            {/* Movimento circular da pélvis */}
            <motion.g
              animate={{ 
                x: isPlaying ? [0, 4, 0, -4, 0] : 0,
                y: isPlaying ? [0, -3, 0, 3, 0] : 0
              }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            >
              <line x1="-20" y1="45" x2="-20" y2="-10" stroke="#f43f5e" strokeWidth="22" strokeLinecap="round" />
              <ellipse cx="0" cy="15" rx="26" ry="22" fill="#fda4af" opacity="0.9" />
              
              {/* Mãos sobre o ventre */}
              <path d="M-20,-8 Q5,5 0,22" stroke="#fed7aa" strokeWidth="11" strokeLinecap="round" fill="none" />
              <ellipse cx="0" cy="22" rx="8" ry="6" fill="#fed7aa" />

              <circle cx="-20" cy="-35" r="18" fill="#fed7aa" />
              <circle cx="-26" cy="-45" r="10" fill="#78350f" />
            </motion.g>

            {showAlignmentGuides && (
              <g>
                <ellipse cx="-20" cy="40" rx="30" ry="12" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeDasharray="4 4" />
                <rect x="-85" y="-70" width="150" height="24" rx="12" fill="#0f172a" opacity="0.9" />
                <text x="-10" y="-54" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">
                  ⟳ Rotação Pélvica Suave
                </text>
              </g>
            )}
          </g>
        );

      // 6. SAVASANA LATERAL COM BOLSTER (SAVASANA SIDE BOLSTER)
      case 'savasana-side-bolster':
        return (
          <g transform="translate(180, 160)">
            {/* Tapete e Travesseiro */}
            <rect x="-140" y="80" width="360" height="14" rx="7" fill="#047857" opacity="0.3" />
            <rect x="110" y="55" width="45" height="25" rx="8" fill="#e2e8f0" />

            {/* Almofada / Bolster entre as pernas para alívio da veia cava */}
            <rect x="-50" y="45" width="75" height="26" rx="13" fill="#a7f3d0" stroke="#059669" strokeWidth="2" />

            {/* Pernas dobradas abraçando o bolster */}
            <path d="M-90,65 Q-50,40 10,48" stroke="#334155" strokeWidth="18" strokeLinecap="round" fill="none" />
            <path d="M-80,75 Q-40,70 15,75" stroke="#475569" strokeWidth="18" strokeLinecap="round" fill="none" />

            {/* Tronco deitado de lado (lado esquerdo) */}
            <motion.g
              animate={{ y: isPlaying ? (isExhale ? 2 : -2) : 0 }}
              transition={{ duration: isExhale ? 6 : 4, ease: "easeInOut" }}
            >
              <line x1="-50" y1="60" x2="80" y2="60" stroke="#f43f5e" strokeWidth="24" strokeLinecap="round" />
              
              {/* Barriguinha apoiada com conforto */}
              <ellipse cx="15" cy="45" rx="26" ry="20" fill="#fda4af" opacity="0.95" />

              {/* Cabeça no travesseiro */}
              <circle cx="110" cy="55" r="16" fill="#fed7aa" />
              <circle cx="120" cy="48" r="10" fill="#78350f" />

              {/* Braço relaxado */}
              <path d="M75,60 Q50,45 25,48" stroke="#fed7aa" strokeWidth="10" strokeLinecap="round" fill="none" />
            </motion.g>

            {showAlignmentGuides && (
              <g>
                <rect x="-40" y="-20" width="220" height="24" rx="12" fill="#0f172a" opacity="0.9" />
                <text x="70" y="-4" textAnchor="middle" fill="#6ee7b7" fontSize="10" fontWeight="bold">
                  ✓ Decúbito Lateral Esquerdo (Veia Cava Livre)
                </text>
              </g>
            )}
          </g>
        );

      // 7. MÃE COM BEBÊ (PUERPÉRIO / BABY SLING / SWAY DANCE)
      case 'baby-sling-squat':
      case 'baby-sway-dance':
      case 'baby-supported-tree-pose':
      case 'mother-baby-heart-connection':
        return (
          <g transform="translate(240, 150)">
            <rect x="-80" y="110" width="160" height="14" rx="7" fill="#fb7185" opacity="0.3" />

            {/* Pernas da mãe em pé */}
            <line x1="-20" y1="50" x2="-25" y2="110" stroke="#334155" strokeWidth="18" strokeLinecap="round" />
            <line x1="20" y1="50" x2="25" y2="110" stroke="#334155" strokeWidth="18" strokeLinecap="round" />
            <ellipse cx="-25" cy="112" rx="14" ry="6" fill="#1e293b" />
            <ellipse cx="25" cy="112" rx="14" ry="6" fill="#1e293b" />

            {/* Tronco da mãe */}
            <motion.g
              animate={{ 
                x: exercise.id === 'baby-sway-dance' && isPlaying ? [-6, 6, -6] : 0,
                y: exercise.id === 'baby-sling-squat' && isPlaying ? [0, 12, 0] : 0 
              }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <line x1="0" y1="50" x2="0" y2="-10" stroke="#f43f5e" strokeWidth="24" strokeLinecap="round" />

              {/* Sling ergonômico abraçando o bebê contra o peito */}
              <ellipse cx="4" cy="15" rx="20" ry="22" fill="#fb7185" />
              <path d="M-15,-10 L-5,35 L20,-10 Z" fill="#fda4af" opacity="0.7" />

              {/* Cabecinha do bebê aninhada */}
              <circle cx="6" cy="6" r="11" fill="#fed7aa" />
              <circle cx="10" cy="3" r="6" fill="#ca8a04" />

              {/* Braços da mãe envolvendo o bebê com amor */}
              <path d="M-15,-5 Q-20,20 4,25" stroke="#fed7aa" strokeWidth="10" strokeLinecap="round" fill="none" />
              <path d="M15,-5 Q20,20 4,25" stroke="#fed7aa" strokeWidth="10" strokeLinecap="round" fill="none" />

              {/* Cabeça da mãe olhando amorosamente para o bebê */}
              <circle cx="0" cy="-35" r="18" fill="#fed7aa" />
              <circle cx="-5" cy="-45" r="10" fill="#78350f" />
            </motion.g>

            {showAlignmentGuides && (
              <g>
                <rect x="-85" y="-75" width="170" height="24" rx="12" fill="#0f172a" opacity="0.9" />
                <text x="0" y="-59" textAnchor="middle" fill="#fda4af" fontSize="10" fontWeight="bold">
                  ❤️ Vínculo & Sling Ergonômico Seguro
                </text>
              </g>
            )}
          </g>
        );

      // PADRÃO / OUTROS EXERCÍCIOS: MEDITAÇÃO NO ZAFU OU POSTURA DA MONTANHA
      default:
        return (
          <g transform="translate(240, 150)">
            {/* Zafu / Almofada */}
            <ellipse cx="0" cy="70" rx="45" ry="18" fill="#7e22ce" opacity="0.8" />

            {/* Pernas cruzadas em Sukhasana */}
            <path d="M-60,75 Q-20,60 0,68 Q20,60 60,75" stroke="#334155" strokeWidth="20" strokeLinecap="round" fill="none" />

            {/* Tronco */}
            <motion.g
              animate={{ y: isPlaying ? (isExhale ? 2 : -2) : 0 }}
              transition={{ duration: isExhale ? 6 : 4, ease: "easeInOut" }}
            >
              <line x1="0" y1="65" x2="0" y2="5" stroke="#f43f5e" strokeWidth="24" strokeLinecap="round" />
              <ellipse cx="0" cy="35" rx="26" ry="24" fill="#fda4af" opacity="0.9" />

              {/* Mãos nos joelhos com Mudra */}
              <path d="M-15,8 Q-35,35 -50,60" stroke="#fed7aa" strokeWidth="10" strokeLinecap="round" fill="none" />
              <path d="M15,8 Q35,35 50,60" stroke="#fed7aa" strokeWidth="10" strokeLinecap="round" fill="none" />
              <circle cx="-52" cy="62" r="5" fill="#fed7aa" />
              <circle cx="52" cy="62" r="5" fill="#fed7aa" />

              <circle cx="0" cy="-20" r="18" fill="#fed7aa" />
              <circle cx="0" cy="-32" r="10" fill="#78350f" />
            </motion.g>

            {/* Aura de respiração */}
            <motion.circle
              cx="0"
              cy="25"
              r={isExhale ? 45 : 65}
              fill="none"
              stroke="#c084fc"
              strokeWidth="2"
              strokeDasharray="4 4"
              opacity={0.6}
              transition={{ duration: isExhale ? 6 : 4 }}
            />

            {showAlignmentGuides && (
              <g>
                <rect x="-80" y="-60" width="160" height="24" rx="12" fill="#0f172a" opacity="0.9" />
                <text x="0" y="-44" textAnchor="middle" fill="#c084fc" fontSize="10" fontWeight="bold">
                  ✓ Respiração Diafragmática Calma
                </text>
              </g>
            )}
          </g>
        );
    }
  };

  return (
    <div className={`relative bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 rounded-2xl overflow-hidden flex flex-col items-center justify-center select-none ${className}`}>
      
      {/* CENÁRIO SVG ILUSTRADO & ANIMADO */}
      <div className="w-full h-full relative flex items-center justify-center">
        <svg 
          viewBox="0 0 480 320" 
          className="w-full h-full max-h-96 object-contain"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Fundo suave com grid de alinhamento sutil */}
          <defs>
            <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#020617" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="auraGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fb7185" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          <rect width="480" height="320" fill="url(#bgGrad)" />

          {/* Iluminação de fundo do estúdio */}
          <ellipse cx="240" cy="270" rx="200" ry="40" fill="url(#auraGlow)" />

          {/* Renderização da postura */}
          {renderPoseGraphics()}
        </svg>
      </div>

      {/* GUIA DE RESPIRAÇÃO FLUTUANTE NO TOPO ESQUERDO */}
      <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
        <div className="bg-slate-900/90 border border-white/15 px-3 py-1.5 rounded-full backdrop-blur-md shadow-lg flex items-center gap-2 text-xs font-black">
          <span className={`w-2.5 h-2.5 rounded-full ${breathingPhase === 'inhale' ? 'bg-amber-400 animate-pulse' : 'bg-rose-400'}`} />
          <span className="text-white text-[11px] uppercase tracking-wider">
            {breathingPhase === 'inhale' ? `🌸 Inale (${phaseSeconds}s)` : `🌬️ Exale (${phaseSeconds}s)`}
          </span>
        </div>
      </div>

      {/* TOGGLE DE GUIAS ANATÔMICOS NO TOPO DIREITO */}
      <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
        <button
          onClick={() => setShowAlignmentGuides(!showAlignmentGuides)}
          className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider border backdrop-blur-md transition-all flex items-center gap-1.5 cursor-pointer ${
            showAlignmentGuides
              ? 'bg-rose-500/20 border-rose-500/40 text-rose-300'
              : 'bg-slate-900/80 border-white/10 text-slate-400 hover:text-white'
          }`}
        >
          <Eye size={12} /> {showAlignmentGuides ? 'Guias Ativos' : 'Ocultar Guias'}
        </button>
      </div>

      {/* BARRA INFERIOR COM CONTROLES */}
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-3 pt-6 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-rose-500 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer"
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
          </button>
          
          <span className="text-[11px] font-black text-slate-200 uppercase tracking-wider">
            {exercise.name}
          </span>
        </div>
      </div>

    </div>
  );
};
