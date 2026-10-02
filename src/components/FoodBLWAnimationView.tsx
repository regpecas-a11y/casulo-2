import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause,
  Volume2,
  VolumeX,
  RotateCcw,
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Sparkles, 
  Hand,
  PhoneCall,
  ShieldAlert,
  Video
} from 'lucide-react';
import { playPositiveChime, playBiteSound } from '../sounds';
import { FoodItem } from '../types';

export interface FoodBLWDetails {
  bladeAngle: string;
  dimensions: string;
  textureTest: string;
  commonMistake: string;
  safeCutDescription: string;
  cookingTip: string;
  knifeSteps: string[];
}

export const getBLWDetailsForFood = (food: FoodItem): FoodBLWDetails => {
  const nameLower = food.name.toLowerCase();

  if (nameLower.includes('banana')) {
    return {
      bladeAngle: 'Faca paralela cortando longitudinalmente em 3 tiras compridas',
      dimensions: 'Bastões compridos de 7 a 9 cm (largura de 2 dedos do bebê)',
      textureTest: 'Macia ao toque, amassa com leve pressão dos dedos sem virar purê líquido',
      commonMistake: 'Cortar em rodelas circulares pequenas (podem bloquear as vias aéreas)',
      safeCutDescription: 'Divida a banana ao meio na horizontal, depois corte na vertical em 3 tiras compridas. Mantenha metade da casca higienizada na base como alça anti-deslizante.',
      cookingTip: 'Não precisa cozinhar. Escolha bananas maduras e macias.',
      knifeSteps: [
        'Lave bem a casca com água e sabão neutro.',
        'Descasque apenas a metade superior da banana.',
        'Posicione a faca na vertical e faça 2 cortes no sentido do comprimento.',
        'Ofereça o bastão com a casca na base servindo de alça para a mão do bebê.'
      ]
    };
  }

  if (nameLower.includes('maçã') || nameLower.includes('maca')) {
    return {
      bladeAngle: 'Faca em 45° removendo o miolo e fatiando em gomos grossos',
      dimensions: 'Fatias em formato de meia lua de 2 cm de espessura',
      textureTest: 'Deve estar macia como compota, desfazendo-se ao pressionar entre os dedos',
      commonMistake: 'Oferecer maçã crua em pedaços ou fatias rígidas (perigo crítico de engasgo)',
      safeCutDescription: 'NUNCA ofereça maçã crua em pedaços. Descasque, retire o miolo com sementes e asse ou cozinhe no vapor até derreter ao toque.',
      cookingTip: 'Asse na airfryer a 160°C por 12 min ou cozinhe no vapor com canela.',
      knifeSteps: [
        'Descasque a maçã e retire totalmente o miolo duro e sementes.',
        'Corte a maçã em 4 a 6 gomos largos (espessura de 2 dedos).',
        'Leve ao vapor ou airfryer até que fique totalmente macia.',
        'Espere esfriar e ofereça morna ao bebê.'
      ]
    };
  }

  if (nameLower.includes('cenoura')) {
    return {
      bladeAngle: 'Faca firme em corte longitudinal reto para formar palitos grossos',
      dimensions: 'Palitos retangulares de 8 cm de comprimento e 1.5 cm de largura',
      textureTest: 'Após o vapor, a cenoura deve se desfazer ao ser pressionada entre indicador e polegar',
      commonMistake: 'Oferecer crua ou cortada em rodelas duras (causa frequente de engasgo)',
      safeCutDescription: 'Descasque e corte a cenoura em bastões compridos. Cozinhe no vapor por 12 a 15 minutos até ficar perfeitamente macia por dentro.',
      cookingTip: 'Cozinhe no vapor mantendo os nutrientes, até que um garfo entre sem resistência.',
      knifeSteps: [
        'Descasque a cenoura com um descascador de legumes.',
        'Corte as pontas e divida a cenoura ao meio no comprimento.',
        'Faça cortes retos longitudinais obtendo bastões retangulares espessos.',
        'Cozinhe no vapor até passar no teste de pressão dos dedos.'
      ]
    };
  }

  if (nameLower.includes('brócolis') || nameLower.includes('brocolis')) {
    return {
      bladeAngle: 'Faca cortando no Talo Principal para manter uma alça longa e firme',
      dimensions: 'Floretes grandes com talos de 5 a 7 cm de comprimento',
      textureTest: 'O talo deve estar muito macio e os floretes firmes porém fáceis de mastigar',
      commonMistake: 'Cortar apenas os ramalhetes pequenininhos que o bebê não consegue segurar',
      safeCutDescription: 'Mantenha o talo longo acoplado à "arvorezinha". O bebê segura pelo talo e morde a parte macia da copa.',
      cookingTip: 'Cozinhe no vapor por 8-10 minutos. O brócolis deve manter a cor verde viva.',
      knifeSteps: [
        'Lave o brócolis em água corrente e vinagre.',
        'Posicione a faca na base do talo e corte mantendo cada florete unido ao seu talo comprido.',
        'Certifique-se de que a alça (talo) tem espessura segura.',
        'Cozinhe no vapor até ficar bem macio.'
      ]
    };
  }

  if (nameLower.includes('abacate')) {
    return {
      bladeAngle: 'Faca deslizando ao longo do caroço em fatias compridas tipo canoa',
      dimensions: 'Fatias compridas em formato de gomo (2 cm de espessura)',
      textureTest: 'Polpa cremosa que cede ao menor toque dos dedos',
      commonMistake: 'Servir cubinhos escorregadios que o bebê se frustra por não conseguir pegar',
      safeCutDescription: 'Corte fatias médias. Passe a fatia em gergelim moído, aveia em flocos ou farinha de amêndoas para criar aderência na mãozinha.',
      cookingTip: 'Fruta in natura bem madura. Se escorregar, empane na aveia.',
      knifeSteps: [
        'Corte o abacate ao meio ao redor do caroço e gire.',
        'Corte fatias longitudinais em formato de meia lua.',
        'Remova a casca suavemente.',
        'Passe a fatia sobre aveia em flocos finos para dar aderência.'
      ]
    };
  }

  if (nameLower.includes('uva')) {
    return {
      bladeAngle: 'Faca afiada em corte vertical limpo dividindo a uva em 4 tiras',
      dimensions: 'Quartos longitudinais compridos (nunca redondos)',
      textureTest: 'Sempre sem sementes e cortadas no sentido do comprimento',
      commonMistake: 'Oferecer a uva inteira ou cortada em rodelas (perigo gravíssimo de engasgo)',
      safeCutDescription: 'Corte a uva obrigatoriamente ao meio no sentido do comprimento, e depois cada metade ao meio novamente no mesmo sentido, forming 4 tiras compridas.',
      cookingTip: 'Não precisa cozinhar. Certifique-se de remover todas as sementes.',
      knifeSteps: [
        'Lave bem as uvas em água corrente.',
        'Coloque a uva na tábua no sentido vertical.',
        'Passe a faca dividindo a uva de ponta a ponta ao meio.',
        'Corte cada metade no mesmo sentido vertical, resultando em 4 tiras finas.'
      ]
    };
  }

  // DEFAULT FALLBACK GENÉRICO SEGURO PARA QUALQUER OUTRO ALIMENTO
  return {
    bladeAngle: 'Faca inclinada a 90° em corte retilíneo na longitudinal',
    dimensions: `Bastões da largura de 2 dedos do bebê (~2 cm por 7 cm de comprimento)`,
    textureTest: 'Amassa facilmente entre o polegar e indicador sem oferecer resistência dura',
    commonMistake: 'Servir em rodelas circulares ou pedaços pequenos rígidos',
    safeCutDescription: `Corte ${food.name} em tiras compridas e espessas. Cozinhe no vapor até que fique bem macio ao toque dos dedos antes de servir.`,
    cookingTip: food.airfryerRecipe || 'Cozinhe no vapor ou assado até alcançar textura macia.',
    knifeSteps: [
      `Lave e descasque ${food.name}.`,
      'Posicione a faca verticalmente e faça cortes longitudinais compridos.',
      'Ajuste a espessura para equivaler a 2 dedos de adulto (para a mãozinha do bebê).',
      'Verifique a temperatura e a maciez antes de oferecer no pratinho.'
    ]
  };
};

export const FoodBLWAnimationView: React.FC<{ food: FoodItem }> = ({ food }) => {
  const blwDetails = getBLWDetailsForFood(food);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animStep, setAnimStep] = useState<number>(0); // 0: Inicial, 1: Cortando, 2: Resultado Final
  const [showGagGuide, setShowGagGuide] = useState(false);
  const [activeEmergencyVideo, setActiveEmergencyVideo] = useState<'maneuver' | 'movement'>('maneuver');
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(true);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(true);
  const videoPlayerRef = useRef<HTMLVideoElement>(null);

  const nameLower = food.name.toLowerCase();

  const handleRunAnimation = () => {
    setIsAnimating(true);
    setAnimStep(1);
    playBiteSound();

    setTimeout(() => {
      setAnimStep(2);
      setIsAnimating(false);
      playPositiveChime();
    }, 2000);
  };

  // DETERMINA O TIPO DE CORTE ESPECÍFICO DO ALIMENTO
  const foodType = nameLower.includes('uva') ? 'uva'
    : nameLower.includes('banana') ? 'banana'
    : nameLower.includes('cenoura') ? 'cenoura'
    : nameLower.includes('maçã') || nameLower.includes('maca') ? 'maca'
    : nameLower.includes('brócolis') || nameLower.includes('brocolis') ? 'brocolis'
    : nameLower.includes('abacate') ? 'abacate'
    : nameLower.includes('ovo') ? 'ovo'
    : 'generico';

  return (
    <div className="space-y-6 text-slate-800">
      {/* CABEÇALHO DO GUIA BLW */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-slate-900 text-white p-6 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="flex justify-between items-start relative z-10">
          <div>
            <span className="bg-emerald-400/30 text-emerald-200 text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-md">
              Corte Real BLW & Faca
            </span>
            <h4 className="text-xl font-black mt-2 leading-tight">
              Como Cortar <span className="text-emerald-300">{food.name}</span>
            </h4>
            <p className="text-[10px] text-emerald-100 font-bold mt-1">
              Regra dos 2 Dedos do Bebê (~2 cm de espessura)
            </p>
          </div>
          <span className="text-4xl p-2 bg-white/10 rounded-2xl backdrop-blur-md">{food.icon}</span>
        </div>

        <button 
          onClick={() => setShowGagGuide(true)}
          className="mt-4 px-4 py-2.5 bg-amber-400 text-slate-950 font-black text-[9px] uppercase tracking-widest rounded-xl shadow-md flex items-center gap-1.5 active:scale-95 transition-transform"
        >
          <AlertTriangle size={13} /> GAG vs Engasgo (Guia Vital)
        </button>
      </div>

      {/* ÁREA INTERATIVA DA ANIMAÇÃO DO CORTE REAL DA FACA */}
      <div className="bg-slate-950 p-6 rounded-[2.5rem] text-white relative overflow-hidden border-4 border-slate-800 shadow-2xl">
        {/* TEXTURA DA TÁBUA / GRID */}
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />

        <div className="flex justify-between items-center mb-4 relative z-10">
          <div className="flex items-center gap-2">
            <Hand size={14} className="text-emerald-400" />
            <span className="text-[10px] font-black uppercase text-slate-300 tracking-wider">
              {blwDetails.dimensions}
            </span>
          </div>
          <button
            onClick={handleRunAnimation}
            disabled={isAnimating}
            className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-[9px] uppercase tracking-widest rounded-xl shadow-lg flex items-center gap-1.5 active:scale-95 transition-all disabled:opacity-50"
          >
            <Play size={12} className={isAnimating ? 'animate-spin' : ''} />
            {isAnimating ? 'Cortando...' : 'Animar Corte Real 🔪'}
          </button>
        </div>

        {/* CANVAS VIRTUAL DE CORTE DA FACA COM ANIMAÇÃO ESPECÍFICA */}
        <div className="relative h-52 w-full bg-slate-900/90 rounded-2xl border border-slate-800 flex items-center justify-center overflow-hidden my-2 p-4">
          {/* GUIA DA LARGURA DOS DEDOS */}
          <div className="absolute top-2 left-2 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700 text-[8px] font-bold text-emerald-300 uppercase tracking-wider z-20">
            📏 Formato Seguro: {foodType === 'uva' ? '4 Tiras Verticais Longas' : foodType === 'banana' ? '3 Bastões + Alça de Casca' : 'Espessura 2 Dedos'}
          </div>

          {/* ANIMAÇÃO ESPECÍFICA DO CORTE REAL */}
          <div className="relative w-full h-full flex items-center justify-center">
            
            {/* 🍇 CASO 1: UVA (1 UVA INTEIRA -> CORTE VERTICAL -> 4 TIRAS LONGAS) */}
            {foodType === 'uva' && (
              <div className="relative flex items-center justify-center w-full h-full">
                {animStep === 0 && (
                  <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="flex flex-col items-center gap-1">
                    <div className="w-16 h-20 bg-purple-700 rounded-full border-2 border-purple-400 shadow-xl flex items-center justify-center relative">
                      <div className="w-3 h-3 bg-purple-300 rounded-full absolute top-3 left-3 opacity-60" />
                      <span className="text-2xl">🍇</span>
                    </div>
                    <span className="text-[9px] font-black text-rose-400 uppercase tracking-wider">❌ Inteira = Perigo Alto de Engasgo</span>
                  </motion.div>
                )}

                {animStep === 1 && (
                  <div className="relative flex items-center justify-center">
                    <div className="w-16 h-20 bg-purple-700 rounded-full border-2 border-purple-400 opacity-80" />
                    {/* FACA FAZENDO CORTES VERTICAIS DUPLOS */}
                    <motion.div
                      animate={{ y: [-40, 20], x: [-10, -10] }}
                      transition={{ duration: 0.8, repeat: 1, repeatType: 'reverse' }}
                      className="absolute z-30 text-5xl pointer-events-none"
                    >
                      🔪
                    </motion.div>
                    <motion.div 
                      initial={{ scaleY: 0 }} 
                      animate={{ scaleY: 1 }} 
                      className="absolute inset-y-0 w-0.5 bg-emerald-400 shadow-[0_0_8px_#34d399]" 
                    />
                    <motion.div 
                      initial={{ scaleY: 0 }} 
                      animate={{ scaleY: 1 }} 
                      transition={{ delay: 0.4 }}
                      className="absolute inset-y-0 w-0.5 bg-emerald-400 translate-x-3 shadow-[0_0_8px_#34d399]" 
                    />
                  </div>
                )}

                {animStep === 2 && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-3">
                    {/* 4 TIRAS VERTICAIS FINAS E COMPRIDAS DA UVA */}
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div 
                        key={i} 
                        initial={{ y: -10, rotate: (i - 2.5) * 6 }}
                        animate={{ y: 0, rotate: (i - 2.5) * 6 }}
                        className="w-4 h-20 bg-purple-600 border border-purple-300 rounded-full shadow-lg flex flex-col items-center justify-between p-1"
                      >
                        <div className="w-1.5 h-1.5 bg-purple-300 rounded-full opacity-60" />
                        <span className="text-[7px] font-black text-purple-200">{i}ª</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>
            )}

            {/* 🍌 CASO 2: BANANA (CASCA NA BASE + 3 BASTÕES LONGOS) */}
            {foodType === 'banana' && (
              <div className="relative flex items-center justify-center w-full h-full">
                {animStep === 0 && (
                  <div className="flex flex-col items-center">
                    <span className="text-7xl">🍌</span>
                    <span className="text-[9px] font-black text-slate-300 uppercase">Banana Inteira</span>
                  </div>
                )}

                {animStep === 1 && (
                  <div className="relative flex items-center justify-center">
                    <span className="text-7xl opacity-80">🍌</span>
                    <motion.div animate={{ y: [-30, 20], x: [0, 0] }} transition={{ duration: 1 }} className="absolute z-30 text-5xl">🔪</motion.div>
                  </div>
                )}

                {animStep === 2 && (
                  <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="flex flex-col items-center">
                    {/* 3 BASTÕES SAINDO DA CASCA NA BASE */}
                    <div className="flex gap-1.5 mb-[-12px] z-10">
                      <div className="w-4 h-16 bg-amber-100 border-2 border-amber-300 rounded-t-xl shadow-md" />
                      <div className="w-4 h-18 bg-amber-100 border-2 border-amber-300 rounded-t-xl shadow-md" />
                      <div className="w-4 h-16 bg-amber-100 border-2 border-amber-300 rounded-t-xl shadow-md" />
                    </div>
                    {/* CASCA NA BASE SERVINDO DE ALÇA */}
                    <div className="w-20 h-10 bg-amber-400 border-2 border-amber-500 rounded-b-2xl flex items-center justify-center text-[8px] font-black text-amber-950 uppercase shadow-lg">
                      Alça de Casca ✋
                    </div>
                  </motion.div>
                )}
              </div>
            )}

            {/* 🥕 CASO 3: CENOURA (PALITOS RETANGULARES COZIDOS NO VAPOR) */}
            {foodType === 'cenoura' && (
              <div className="relative flex items-center justify-center w-full h-full">
                {animStep === 0 && (
                  <div className="flex flex-col items-center">
                    <span className="text-7xl">🥕</span>
                    <span className="text-[9px] font-black text-rose-400 uppercase">❌ Crua / Rodela = Perigo</span>
                  </div>
                )}

                {animStep === 1 && (
                  <div className="relative flex items-center justify-center">
                    <span className="text-7xl opacity-80">🥕</span>
                    <motion.div animate={{ y: [-40, 20], x: [10, -10] }} transition={{ duration: 1 }} className="absolute z-30 text-5xl">🔪</motion.div>
                  </div>
                )}

                {animStep === 2 && (
                  <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="flex flex-col items-center gap-2">
                    {/* VAPOR SUBINDO */}
                    <motion.div animate={{ opacity: [0.3, 0.9, 0.3], y: [-2, -8, -2] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-xs text-amber-300 font-black">
                      ♨️ Cozida no Vapor (Macia)
                    </motion.div>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-5 h-20 bg-orange-500 border-2 border-orange-300 rounded-md shadow-lg flex flex-col justify-between p-1 text-[7px] font-black text-orange-100">
                          <span>||</span>
                          <span>{i}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            )}

            {/* 🍎 CASO 4: MAÇÃ (SEM MIOLO + GOMOS EM MEIA LUA ASSADOS) */}
            {foodType === 'maca' && (
              <div className="relative flex items-center justify-center w-full h-full">
                {animStep === 0 && (
                  <div className="flex flex-col items-center">
                    <span className="text-7xl">🍎</span>
                    <span className="text-[9px] font-black text-rose-400 uppercase">❌ Crua = Perigo Gravíssimo</span>
                  </div>
                )}

                {animStep === 1 && (
                  <div className="relative flex items-center justify-center">
                    <span className="text-7xl opacity-80">🍎</span>
                    <motion.div animate={{ rotate: [0, 45, 90], scale: [1, 0.9, 1] }} transition={{ duration: 1 }} className="absolute z-30 text-5xl">🔪</motion.div>
                  </div>
                )}

                {animStep === 2 && (
                  <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="flex flex-col items-center gap-1">
                    <div className="text-[8px] font-black text-amber-300 uppercase">✨ Sem Miolo/Sementes • Macia na Airfryer</div>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-8 h-16 bg-rose-200 border-2 border-rose-500 rounded-b-full rounded-t-lg shadow-md flex items-center justify-center text-[10px] font-black text-rose-800">
                          🌙
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            )}

            {/* 🥦 CASO 5: BRÓCOLIS (FLORETE GRANDE COM TALO LONGO COMO ALÇA) */}
            {foodType === 'brocolis' && (
              <div className="relative flex items-center justify-center w-full h-full">
                {animStep === 0 && (
                  <div className="flex flex-col items-center">
                    <span className="text-7xl">🥦</span>
                    <span className="text-[9px] font-black text-slate-300 uppercase">Brócolis Inteiro</span>
                  </div>
                )}

                {animStep === 1 && (
                  <div className="relative flex items-center justify-center">
                    <span className="text-7xl opacity-80">🥦</span>
                    <motion.div animate={{ y: [10, -20] }} transition={{ duration: 0.8 }} className="absolute z-30 text-5xl">🔪</motion.div>
                  </div>
                )}

                {animStep === 2 && (
                  <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="flex flex-col items-center">
                    {/* ARVOREZINHA GRANDE */}
                    <div className="w-20 h-16 bg-emerald-500 rounded-t-full border-2 border-emerald-300 flex items-center justify-center text-2xl shadow-lg">
                      🥦
                    </div>
                    {/* TALO COMPRIDO (ALÇA) */}
                    <div className="w-6 h-12 bg-emerald-700 border-2 border-emerald-400 rounded-b-xl flex items-center justify-center text-[7px] font-black text-emerald-200 uppercase shadow-md">
                      Talo Alça
                    </div>
                  </motion.div>
                )}
              </div>
            )}

            {/* 🥑 CASO 6: ABACATE (FATIA EM GOMO + EMPANADO EM AVEIA) */}
            {foodType === 'abacate' && (
              <div className="relative flex items-center justify-center w-full h-full">
                {animStep === 0 && (
                  <div className="flex flex-col items-center">
                    <span className="text-7xl">🥑</span>
                    <span className="text-[9px] font-black text-slate-300 uppercase">Abacate com Caroço</span>
                  </div>
                )}

                {animStep === 1 && (
                  <div className="relative flex items-center justify-center">
                    <span className="text-7xl opacity-80">🥑</span>
                    <motion.div animate={{ x: [-30, 30] }} transition={{ duration: 0.8 }} className="absolute z-30 text-5xl">🔪</motion.div>
                  </div>
                )}

                {animStep === 2 && (
                  <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="flex flex-col items-center gap-2">
                    <div className="w-24 h-12 bg-emerald-600 border-2 border-emerald-400 rounded-full flex items-center justify-between px-3 shadow-xl relative overflow-hidden">
                      {/* PONTINHOS DE AVEIA PARA ADERÊNCIA */}
                      <div className="absolute inset-0 bg-[radial-gradient(#fef08a_2px,transparent_2px)] [background-size:8px_8px] opacity-70" />
                      <span className="text-xs font-black text-amber-100 z-10">🥑 Gomo de Abacate</span>
                    </div>
                    <span className="text-[8px] font-black text-amber-300 uppercase bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                      ✨ Empanado na Aveia para Não Escorregar
                    </span>
                  </motion.div>
                )}
              </div>
            )}

            {/* 🥚 CASO 7: OVO COZIDO (DUPLO CORTE VERTICAL -> 4 QUARTOS COM GEMA DURA) */}
            {foodType === 'ovo' && (
              <div className="relative flex items-center justify-center w-full h-full">
                {animStep === 0 && (
                  <div className="flex flex-col items-center">
                    <span className="text-7xl">🥚</span>
                    <span className="text-[9px] font-black text-slate-300 uppercase">Ovo Cozido por 10 min</span>
                  </div>
                )}

                {animStep === 1 && (
                  <div className="relative flex items-center justify-center">
                    <span className="text-7xl opacity-80">🥚</span>
                    <motion.div animate={{ y: [-40, 20] }} transition={{ duration: 0.8 }} className="absolute z-30 text-5xl">🔪</motion.div>
                  </div>
                )}

                {animStep === 2 && (
                  <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="flex gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-7 h-16 bg-slate-100 border-2 border-slate-300 rounded-b-full rounded-t-lg shadow-md flex flex-col items-center justify-center p-1">
                        <div className="w-3.5 h-6 bg-amber-400 rounded-full border border-amber-500 shadow-inner" />
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            )}

            {/* 🥖 CASO 8: GENÉRICO PARA DEMAIS ALIMENTOS (3 BASTÕES PARALELOS) */}
            {foodType === 'generico' && (
              <div className="relative flex items-center justify-center w-full h-full">
                {animStep === 0 && (
                  <div className="flex flex-col items-center">
                    <span className="text-7xl">{food.icon}</span>
                    <span className="text-[9px] font-black text-slate-300 uppercase">{food.name} Inteiro</span>
                  </div>
                )}

                {animStep === 1 && (
                  <div className="relative flex items-center justify-center">
                    <span className="text-7xl opacity-80">{food.icon}</span>
                    <motion.div animate={{ y: [-40, 20] }} transition={{ duration: 0.8 }} className="absolute z-30 text-5xl">🔪</motion.div>
                  </div>
                )}

                {animStep === 2 && (
                  <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="flex gap-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-20 bg-emerald-700 border-2 border-emerald-400 rounded-xl shadow-lg flex flex-col items-center justify-between p-2">
                        <span className="text-[8px] font-black text-emerald-200 uppercase">2 Dedos</span>
                        <span className="text-xl">{food.icon}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            )}

          </div>

          {/* BADGE DE SUCESSO DE CORTE */}
          {animStep === 2 && (
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute bottom-2 bg-emerald-500 text-slate-950 px-3 py-1 rounded-xl text-[9px] font-black uppercase tracking-widest shadow-lg flex items-center gap-1 z-20"
            >
              <Sparkles size={12} /> {foodType === 'uva' ? '4 Tiras Verticais Prontas!' : 'Corte em Bastão de 2 Dedos Concluído!'}
            </motion.div>
          )}
        </div>

        {/* ÂNGULO E INSTRUÇÃO DA FACA */}
        <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl text-center mt-3">
          <p className="text-[10px] font-black uppercase text-emerald-400 tracking-wider">
            {blwDetails.bladeAngle}
          </p>
        </div>
      </div>

      {/* COMPARATIVO CORRETO VS INCORRETO */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="bg-emerald-50 border-2 border-emerald-200 p-4 rounded-2xl space-y-1">
          <div className="flex items-center gap-2 text-emerald-800 font-black text-xs uppercase">
            <CheckCircle2 size={16} className="text-emerald-600 shrink-0" /> Formato Seguro ✅
          </div>
          <p className="text-[10px] font-bold text-emerald-950 leading-relaxed">
            {blwDetails.safeCutDescription}
          </p>
        </div>

        <div className="bg-rose-50 border-2 border-rose-200 p-4 rounded-2xl space-y-1">
          <div className="flex items-center gap-2 text-rose-800 font-black text-xs uppercase">
            <XCircle size={16} className="text-rose-600 shrink-0" /> Perigo ❌
          </div>
          <p className="text-[10px] font-bold text-rose-950 leading-relaxed">
            {blwDetails.commonMistake}
          </p>
        </div>
      </div>

      {/* TESTE DE TEXTURA DOS DEDOS */}
      <div className="bg-amber-50 border-2 border-amber-200 p-4 rounded-2xl flex items-center gap-3">
        <span className="text-2xl p-2 bg-amber-100 rounded-xl">🤏</span>
        <div>
          <h5 className="text-[10px] font-black text-amber-900 uppercase">Teste de Pressionar com Dedos:</h5>
          <p className="text-[10px] font-bold text-amber-800 mt-0.5 leading-snug">
            {blwDetails.textureTest}
          </p>
        </div>
      </div>

      {/* PASSO A PASSO DA FACA */}
      <div className="space-y-2 pt-2">
        <h5 className="text-[10px] font-black text-slate-800 uppercase tracking-widest">
          Passo a Passo com a Faca:
        </h5>
        <div className="space-y-1.5">
          {blwDetails.knifeSteps.map((step, idx) => (
            <div key={idx} className="flex items-center gap-2.5 p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="w-5 h-5 rounded-full bg-slate-800 text-white text-[9px] font-black flex items-center justify-center shrink-0">
                {idx + 1}
              </span>
              <p className="text-[10px] font-bold text-slate-700 leading-snug">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL GAG VS ENGASGO */}
      <AnimatePresence>
        {showGagGuide && (
          <div className="fixed inset-0 z-[1000] bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-6">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-md rounded-[2.5rem] p-6 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto no-scrollbar border-b-[8px] border-slate-200 text-slate-800"
            >
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl p-1.5 bg-amber-100 rounded-xl">🛡️</span>
                  <h4 className="text-lg font-black">Reflexo de GAG vs Engasgo</h4>
                </div>
                <button 
                  onClick={() => setShowGagGuide(false)}
                  className="w-8 h-8 bg-slate-100 rounded-full font-black text-slate-500 text-xs flex items-center justify-center"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3">
                <div className="bg-sky-50 border-2 border-sky-200 p-4 rounded-2xl space-y-1">
                  <h5 className="text-[11px] font-black text-sky-900 uppercase">
                    🗣️ Reflexo de GAG (Normal & Proteção)
                  </h5>
                  <p className="text-[10px] font-bold text-sky-900 leading-relaxed">
                    O bebê faz ansia, fica vermelho e joga o alimento para a frente da boca com barulho. É a proteção natural!
                  </p>
                  <p className="text-[9px] font-black text-sky-700 uppercase">
                    AÇÃO: Mantenha a calma. Não coloque a mão na boca dele.
                  </p>
                </div>

                <div className="bg-rose-50 border-2 border-rose-200 p-4 rounded-2xl space-y-1">
                  <h5 className="text-[11px] font-black text-rose-900 uppercase">
                    🚨 Engasgo Verdadeiro (Silencioso)
                  </h5>
                  <p className="text-[10px] font-bold text-rose-950 leading-relaxed">
                    O bebê fica em SILÊNCIO absoluto, sem conseguir tossir ou chorar. Lábios/pele começam a ficar roxos.
                  </p>
                  <p className="text-[9px] font-black text-rose-700 uppercase">
                    AÇÃO: LIGUE SAMU (192) E INICIE A MANOBRA ABAIXO IMEDIATAMENTE!
                  </p>
                </div>

                {/* VÍDEO CLÍNICO DE EMERGÊNCIA (DEMONSTRAÇÃO REALISTA) */}
                <div className="bg-slate-950 p-4 sm:p-5 rounded-3xl text-white border-2 border-rose-500/40 shadow-2xl space-y-3.5 relative overflow-hidden">
                  
                  {/* SELETOR DE VÍDEOS */}
                  <div className="flex bg-slate-900/90 p-1 rounded-2xl border border-slate-800 gap-1">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveEmergencyVideo('maneuver');
                        setIsVideoPlaying(true);
                        playPositiveChime();
                      }}
                      className={`flex-1 py-2 px-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                        activeEmergencyVideo === 'maneuver'
                          ? 'bg-rose-600 text-white shadow-lg'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Hand size={13} className={activeEmergencyVideo === 'maneuver' ? 'text-white' : 'text-rose-400'} />
                      <span>1. Manobra (Tapotagem)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveEmergencyVideo('movement');
                        setIsVideoPlaying(true);
                        playPositiveChime();
                      }}
                      className={`flex-1 py-2 px-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                        activeEmergencyVideo === 'movement'
                          ? 'bg-amber-500 text-slate-950 shadow-lg font-black'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <AlertTriangle size={13} className={activeEmergencyVideo === 'movement' ? 'text-slate-950' : 'text-amber-400'} />
                      <span>2. Sinal de Engasgo</span>
                    </button>
                  </div>

                  {/* PLAYER DE VÍDEO EM ALTA DEFINIÇÃO */}
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-slate-800 shadow-inner group">
                    <video
                      key={activeEmergencyVideo}
                      ref={videoPlayerRef}
                      src={
                        activeEmergencyVideo === 'maneuver'
                          ? '/videos/manobra_desengasgo.mp4'
                          : '/videos/movimento_engasgo.mp4'
                      }
                      autoPlay
                      loop
                      muted={isVideoMuted}
                      playsInline
                      className="w-full h-full object-cover scale-[1.06] origin-center"
                      onPlay={() => setIsVideoPlaying(true)}
                      onPause={() => setIsVideoPlaying(false)}
                      onClick={() => {
                        if (videoPlayerRef.current) {
                          if (videoPlayerRef.current.paused) {
                            videoPlayerRef.current.play();
                            setIsVideoPlaying(true);
                          } else {
                            videoPlayerRef.current.pause();
                            setIsVideoPlaying(false);
                          }
                        }
                      }}
                    />

                    {/* BADGE DISCRETO NO TOPO */}
                    <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-[9px] font-bold text-slate-200 pointer-events-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span>
                        {activeEmergencyVideo === 'maneuver'
                          ? 'Manobra Passo a Passo (SBP/AHA)'
                          : 'Reconhecimento do Engasgo (Silencioso)'}
                      </span>
                    </div>

                    {/* BOTÕES DE CONTROLE DISCRETOS */}
                    <div className="absolute bottom-2.5 right-2.5 z-20 flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          const nextMuted = !isVideoMuted;
                          setIsVideoMuted(nextMuted);
                          if (videoPlayerRef.current) {
                            videoPlayerRef.current.muted = nextMuted;
                          }
                        }}
                        className="p-1.5 rounded-full bg-black/70 hover:bg-black text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer"
                        title={isVideoMuted ? 'Ativar áudio' : 'Silenciar'}
                      >
                        {isVideoMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (videoPlayerRef.current) {
                            videoPlayerRef.current.currentTime = 0;
                            videoPlayerRef.current.play();
                            setIsVideoPlaying(true);
                          }
                        }}
                        className="p-1.5 rounded-full bg-black/70 hover:bg-black text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer"
                        title="Reiniciar vídeo"
                      >
                        <RotateCcw size={13} />
                      </button>
                    </div>

                    {/* PLAY OVERLAY QUANDO PAUSADO */}
                    {!isVideoPlaying && (
                      <div 
                        onClick={() => {
                          if (videoPlayerRef.current) {
                            videoPlayerRef.current.play();
                            setIsVideoPlaying(true);
                          }
                        }}
                        className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer z-10"
                      >
                        <div className="w-12 h-12 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all">
                          <Play size={20} className="ml-1 fill-white" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CARTÃO DE ORIENTAÇÕES CLÍNICAS */}
                  {activeEmergencyVideo === 'maneuver' ? (
                    <div className="space-y-2 text-left bg-slate-900/80 p-3.5 rounded-2xl border border-slate-800">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black text-rose-400 uppercase tracking-wider flex items-center gap-1">
                          <Hand size={12} /> Manobra em Bebês (&lt; 1 Ano)
                        </span>
                        <span className="text-[9px] font-bold text-slate-400">Diretriz SBP & AHA</span>
                      </div>
                      <div className="space-y-1.5 text-[9px] font-bold text-slate-300 leading-relaxed">
                        <p className="flex items-start gap-1.5">
                          <span className="w-4 h-4 rounded-full bg-rose-500/30 text-rose-300 flex items-center justify-center font-black text-[8px] flex-shrink-0 mt-0.5">1</span>
                          <span><strong>Posição de Bruços:</strong> Apoie o bebê no antebraço, cabeça mais baixa que o tórax, sustentando a mandíbula em &quot;V&quot; sem apertar a garganta.</span>
                        </p>
                        <p className="flex items-start gap-1.5">
                          <span className="w-4 h-4 rounded-full bg-rose-500/30 text-rose-300 flex items-center justify-center font-black text-[8px] flex-shrink-0 mt-0.5">2</span>
                          <span><strong>5 Golpes nas Costas (Tapotagem):</strong> Aplique 5 batidas secas e firmes entre as escápulas com o calcanhar da outra mão, direcionadas para fora.</span>
                        </p>
                        <p className="flex items-start gap-1.5">
                          <span className="w-4 h-4 rounded-full bg-rose-500/30 text-rose-300 flex items-center justify-center font-black text-[8px] flex-shrink-0 mt-0.5">3</span>
                          <span><strong>5 Compressões Torácicas:</strong> Se não desobstruir, vire de frente apoiando a nuca e faça 5 compressões com 2 dedos no centro do peito.</span>
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2 text-left bg-slate-900/80 p-3.5 rounded-2xl border border-slate-800">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black text-amber-400 uppercase tracking-wider flex items-center gap-1">
                          <AlertTriangle size={12} /> Reconhecimento Imediato
                        </span>
                        <span className="text-[9px] font-bold text-slate-400">Silencioso</span>
                      </div>
                      <div className="space-y-1.5 text-[9px] font-bold text-slate-300 leading-relaxed">
                        <p className="flex items-start gap-1.5">
                          <span className="w-4 h-4 rounded-full bg-amber-500/30 text-amber-300 flex items-center justify-center font-black text-[8px] flex-shrink-0 mt-0.5">⚠️</span>
                          <span><strong>Silêncio Absoluto:</strong> Diferente do engasgo parcial (onde há tosse e som), no engasgo grave o bebê <em>não consegue emitir som algum</em>.</span>
                        </p>
                        <p className="flex items-start gap-1.5">
                          <span className="w-4 h-4 rounded-full bg-amber-500/30 text-amber-300 flex items-center justify-center font-black text-[8px] flex-shrink-0 mt-0.5">⚠️</span>
                          <span><strong>Mudança de Cor:</strong> Lábios, língua e extremidades começam a ficar arroxeados (cianose por falta de oxigenação).</span>
                        </p>
                        <p className="flex items-start gap-1.5">
                          <span className="w-4 h-4 rounded-full bg-rose-500/30 text-rose-300 flex items-center justify-center font-black text-[8px] flex-shrink-0 mt-0.5">🚫</span>
                          <span><strong>O que NÃO Fazer:</strong> Nunca balance o bebê e nunca coloque a mão ou dedos às cegas na garganta (isso pode empurrar o alimento para o fundo).</span>
                        </p>
                      </div>
                    </div>
                  )}

                  {/* BOTÃO DE DISCAGEM DIRETA SAMU 192 */}
                  <a
                    href="tel:192"
                    className="w-full py-2.5 px-4 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-black rounded-xl text-[10px] uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all active:scale-98"
                  >
                    <PhoneCall size={14} className="animate-bounce" />
                    <span>Ligar Emergência SAMU (192)</span>
                  </a>
                </div>
              </div>

              <button
                onClick={() => setShowGagGuide(false)}
                className="w-full py-3 bg-slate-800 text-white font-black rounded-xl text-[10px] uppercase tracking-widest shadow-md"
              >
                Compreendi, Obrigado ✨
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FoodBLWAnimationView;
