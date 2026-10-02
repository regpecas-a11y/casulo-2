import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  CheckCircle2, 
  AlertCircle, 
  Heart, 
  Volume2, 
  Sparkles,
  RefreshCw,
  ShieldAlert,
  HelpCircle,
  MapPin,
  PhoneCall
} from 'lucide-react';
import { playPositiveChime, playSoftClick, playNotificationBell } from '../sounds';

export const BreastfeedingAnimationView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'latchSimulator' | 'positions' | 'troubleshooting' | 'milkBank'>('latchSimulator');
  
  // ESTADOS DO SIMULADOR DE PEGA CORRETA
  const [latchStep, setLatchStep] = useState<number>(0);
  const [isPlayingAnimation, setIsPlayingAnimation] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState<'traditional' | 'football' | 'sideLying' | 'koala'>('traditional');
  const [troubleFilter, setTroubleFilter] = useState<'fissures' | 'mastitis' | 'lowSupply' | 'engorgement'>('fissures');

  const stepsData = [
    {
      title: "1. Posicionamento de Boca & Nariz",
      subtitle: "Nariz livre e queixo encostado na mama",
      icon: "👶",
      description: "O nariz do bebê deve ficar totalmente livre para respirar, paralelo ao bico. O queixo toca firme na parte inferior da mama.",
      checkpoints: [
        "Nariz não fica afundado no peito",
        "Cabeça levemente inclinada para trás",
        "Bebê bem alinhado (barriga com barriga)"
      ],
      animationStatus: "Alinhando a boca do bebê à altura do mamilo..."
    },
    {
      title: "2. Estimulando o Reflexo de Abertura",
      subtitle: "Tocar o bico no lábio superior (abertura de bocejo)",
      icon: "😮",
      description: "Passe o bico do peito suavemente no lábio superior do bebê até ele abrir a boca bem grande, como um bocejo amplo.",
      checkpoints: [
        "Aguardar a abertura máxima da boca",
        "Não empurrar o bico antes da hora",
        "Manter a calma e calma na respiração"
      ],
      animationStatus: "Toque no lábio ativando o reflexo de busca..."
    },
    {
      title: "3. Abocanhamento Amplo da Aréola",
      subtitle: "Pega profunda (nunca pegar apenas o bico!)",
      icon: "✨",
      description: "Traga a cabeça do bebê rapidamente em direção ao peito (e não o peito ao bebê!). Mais aréola inferior entra na boca do que a superior.",
      checkpoints: [
        "Mais aréola visível acima da boca do que abaixo",
        "Abertura de boca maior que 120 graus",
        "Bico fica posicionado no palato mole (fundo da boca)"
      ],
      animationStatus: "Abocanhamento assimétrico completo realizado!"
    },
    {
      title: "4. Lábios Peixinho & Deglutição Segura",
      subtitle: "Lábios virados para fora e sucção rítmica sem dor",
      icon: "🐟",
      description: "Os lábios superior e inferior devem ficar evertidos ('peixinho'). A amamentação NUNCA deve doer. Se doer, corrija a pega!",
      checkpoints: [
        "Lábios virados para fora (eversão labial)",
        "Bochechas arredondadas (sem covinhas ou barulhos de estalo)",
        "Som ritmado de engolir (pausa e deglutição)"
      ],
      animationStatus: "Sucção nutritiva ritmada ativa com sucesso!"
    }
  ];

  const positionsData = {
    traditional: {
      title: "Posição Tradicional (Berço)",
      icon: "🤱",
      description: "A mãe segura o bebê no antebraço do mesmo lado da mama oferecida. Ideal para a rotina diária.",
      tips: [
        "Apoie as costas do bebê no seu antebraço",
        "Mantenha a cabeça apoiada na dobra do cotovelo",
        "Use uma almofada de amamentação no colo para apoiar os braços"
      ]
    },
    football: {
      title: "Posição Invertida (Basquete / Rugby)",
      icon: "🏈",
      description: "O bebê fica encaixado debaixo do armário/braço da mãe como uma bola de futebol americano. Excelente para cesáreas e mamas grandes.",
      tips: [
        "Evita pressão na cicatriz da cesariana",
        "Facilita a visualização direta da pega e da aréola",
        "A mão apoia a base da cabeça e o pescoço do bebê"
      ]
    },
    sideLying: {
      title: "Posição Deitada de Lado",
      icon: "🛌",
      description: "Mãe e bebê deitados de lado, barriga com barriga na cama. Perfeita para as mamadas da madrugada e descanso maternal.",
      tips: [
        "Coloque um travesseiro atrás das suas costas e entre os joelhos",
        "Garanta que o bebê não vá rolar",
        "Excelente para diminuir o cansaço noturno"
      ]
    },
    koala: {
      title: "Posição Cavalinho (Vertical)",
      icon: "🐨",
      description: "O bebê fica sentado sobre a coxa da mãe de frente para a mama. Recomendada para bebês com refluxo ou frênulo curto (língua presa).",
      tips: [
        "Ótima para diminuir a ingestão de ar e refluxo",
        "Apoie o pescoço e a nuca do bebê firmemente",
        "Ideal a partir do momento que o bebê sustenta mais o tronco"
      ]
    }
  };

  const troubleData = {
    fissures: {
      title: "Fissuras e Mamilos Machucados",
      severity: "🟢 Correção Rápida de Pega",
      cause: "99% das fissuras ocorrem por pega incorreta (bebê sugando apenas o bico em vez de abocanhar a aréola).",
      solution: [
        "Corrija a pega imediatamente usando o simulador animado acima.",
        "Passe algumas gotas do próprio leite materno no mamilo após a mamada (tem poder cicatrizante).",
        "Tome banho de sol de 10 a 15 min nas mamas pela manhã.",
        "Evite sabonetes, pomadas espessas com lanolina excessiva ou conchas que abafem o bico."
      ]
    },
    mastitis: {
      title: "Mastite e Ducto Obstruído",
      severity: "🔴 Alerta Médico se Houver Febre",
      cause: "Acúmulo de leite estagnado num canal mamário ou infecção bacteriana.",
      solution: [
        "Continue amamentando na mama afetada! O esvaziamento é o melhor remédio.",
        "Faça massagens circulares delicadas na região empedrada ANTES das mamadas.",
        "Ofereça a mama com o queixo do bebê apontado para o local dolorido.",
        "Se tiver febre alta (>38°C), vermelhidão quente e calafrios, consulte a médica para avaliar antibiótico."
      ]
    },
    lowSupply: {
      title: "Sensação de Baixa Produção de Leite",
      severity: "🟡 Ajuste de Estímulo",
      cause: "A produção de leite funciona pela lei da oferta e da procura (quanto mais o bebê suga, mais leite é produzido).",
      solution: [
        "Livre demanda: ofereça o peito sempre que o bebê der sinais de fome (sem estipular relógio rígido).",
        "Beba bastante água (ao menos 3 litros por dia) e descanse quando o bebê dormir.",
        "Evite bicos artificiais (chupetas e mamadeiras) que causam confusão de bicos.",
        "Confira as fraldas de xixi: se o bebê faz 6+ xixis transparentes/claros por dia, ele está mamando bem!"
      ]
    },
    engorgement: {
      title: "Apojadura e Mamas Empedradas",
      severity: "🟢 Alívio com Ordenha",
      cause: "Descida massiva do leite (apojadura) entre o 3º e 5º dia pós-parto, deixando a mama muito cheia e firme.",
      solution: [
        "Faça ordenha de alívio (retire um pouco de leite manualmente) antes de oferecer o peito para amolecer a aréola.",
        "Aplique compressas frias (nunca quentes!) APÓS a mamada para reduzir o inchaço e a inflamação.",
        "Massageie a aréola com a técnica da pressão positiva cruzada."
      ]
    }
  };

  const handleStartAnimation = () => {
    setIsPlayingAnimation(true);
    playPositiveChime();
    setLatchStep(0);

    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (current < stepsData.length) {
        setLatchStep(current);
        playSoftClick();
      } else {
        clearInterval(interval);
        setIsPlayingAnimation(false);
        playNotificationBell();
      }
    }, 3500);
  };

  return (
    <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-slate-100 space-y-6 animate-fade-in">
      {/* SELETOR DE ABAS INTERNAS */}
      <div className="flex bg-slate-100 p-1.5 rounded-2xl gap-1 border border-slate-200 shadow-inner overflow-x-auto no-scrollbar">
        <button
          onClick={() => { setActiveTab('latchSimulator'); playSoftClick(); }}
          className={`flex-1 py-2.5 px-3 rounded-xl text-[9px] font-black uppercase tracking-wider transition-all whitespace-nowrap ${
            activeTab === 'latchSimulator' ? 'bg-rose-500 text-white shadow-md' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          🎬 Simulador de Pega
        </button>
        <button
          onClick={() => { setActiveTab('positions'); playSoftClick(); }}
          className={`flex-1 py-2.5 px-3 rounded-xl text-[9px] font-black uppercase tracking-wider transition-all whitespace-nowrap ${
            activeTab === 'positions' ? 'bg-rose-500 text-white shadow-md' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          🤱 Posições de Amamentar
        </button>
        <button
          onClick={() => { setActiveTab('troubleshooting'); playSoftClick(); }}
          className={`flex-1 py-2.5 px-3 rounded-xl text-[9px] font-black uppercase tracking-wider transition-all whitespace-nowrap ${
            activeTab === 'troubleshooting' ? 'bg-rose-500 text-white shadow-md' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          🩺 Solução de Dores
        </button>
        <button
          onClick={() => { setActiveTab('milkBank'); playSoftClick(); }}
          className={`flex-1 py-2.5 px-3 rounded-xl text-[9px] font-black uppercase tracking-wider transition-all whitespace-nowrap ${
            activeTab === 'milkBank' ? 'bg-rose-500 text-white shadow-md' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          🥛 Banco de Leite
        </button>
      </div>

      {/* 1. SIMULADOR ANIMADO DE PEGA CORRETA */}
      {activeTab === 'latchSimulator' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center px-1">
            <div>
              <h4 className="text-lg font-black text-slate-800 flex items-center gap-2">
                <Sparkles className="text-rose-500" size={20} /> Guia Animado de Pega Correta
              </h4>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">
                Aprenda a prevenir fissuras e dor garantindo a pega profunda
              </p>
            </div>
            <button
              onClick={handleStartAnimation}
              disabled={isPlayingAnimation}
              className="px-4 py-2.5 bg-rose-500 text-white font-black rounded-2xl text-[10px] uppercase tracking-widest shadow-lg flex items-center gap-2 active:scale-95 transition-all hover:bg-rose-600 disabled:opacity-50"
            >
              <Play size={14} /> {isPlayingAnimation ? "Reproduzindo..." : "Iniciar Animação"}
            </button>
          </div>

          {/* CANVAS DA ANIMAÇÃO INTERATIVA */}
          <div className="relative bg-gradient-to-b from-rose-50 to-pink-100/60 rounded-[3rem] p-8 border-2 border-rose-200 min-h-[320px] flex flex-col items-center justify-center text-center overflow-hidden shadow-inner">
            <AnimatePresence mode="wait">
              <motion.div
                key={latchStep}
                initial={{ scale: 0.8, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 1.1, opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-4 max-w-sm z-10"
              >
                <div className="w-28 h-28 mx-auto rounded-full bg-white shadow-xl flex items-center justify-center text-5xl border-4 border-rose-300 relative">
                  <span>{stepsData[latchStep].icon}</span>
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }} 
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute -top-2 -right-2 bg-rose-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-black shadow-md"
                  >
                    #{latchStep + 1}
                  </motion.div>
                </div>

                <div className="space-y-1">
                  <span className="text-[9px] font-black uppercase tracking-widest bg-rose-200 text-rose-800 px-3 py-1 rounded-full">
                    Passo {latchStep + 1} de {stepsData.length}
                  </span>
                  <h3 className="text-xl font-black text-slate-800 tracking-tight pt-1">
                    {stepsData[latchStep].title}
                  </h3>
                  <p className="text-xs font-bold text-rose-600">
                    {stepsData[latchStep].subtitle}
                  </p>
                </div>

                <p className="text-xs font-medium text-slate-600 leading-relaxed bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-rose-100 shadow-sm">
                  {stepsData[latchStep].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* SELEÇÃO MANUAL DOS PASSO DA ANIMAÇÃO */}
            <div className="flex items-center gap-2 mt-6 z-10">
              {stepsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => { setLatchStep(idx); playSoftClick(); }}
                  className={`h-3 rounded-full transition-all ${
                    latchStep === idx ? 'w-8 bg-rose-500' : 'w-3 bg-rose-200 hover:bg-rose-300'
                  }`}
                  title={`Ir para passo ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* CHECKPOINTS DE PEGA PERFEITA */}
          <div className="bg-slate-50 p-5 rounded-3xl border border-slate-200 space-y-3">
            <h5 className="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500" /> Sinais Virtuais de Pega Bem-Sucedida:
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              {stepsData[latchStep].checkpoints.map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm font-bold text-slate-700">
                  <span className="text-emerald-500 font-black">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 2. POSIÇÕES DE AMAMENTAÇÃO */}
      {activeTab === 'positions' && (
        <div className="space-y-6">
          <div className="px-1">
            <h4 className="text-lg font-black text-slate-800">Escolha a Melhor Posição para o Momento</h4>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Alterne as posições para esvaziar todos os quadrantes da mama
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {(Object.keys(positionsData) as Array<keyof typeof positionsData>).map((key) => {
              const pos = positionsData[key];
              const isSelected = selectedPosition === key;
              return (
                <button
                  key={key}
                  onClick={() => { setSelectedPosition(key); playSoftClick(); }}
                  className={`p-4 rounded-3xl text-left border-2 transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-rose-500 text-white border-rose-600 shadow-lg scale-105'
                      : 'bg-white text-slate-800 border-slate-100 hover:border-rose-200'
                  }`}
                >
                  <span className="text-3xl mb-2">{pos.icon}</span>
                  <div>
                    <h5 className="text-xs font-black leading-snug">{pos.title}</h5>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="bg-rose-50/60 p-6 rounded-[2.5rem] border border-rose-100 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{positionsData[selectedPosition].icon}</span>
              <div>
                <h4 className="text-base font-black text-slate-800">{positionsData[selectedPosition].title}</h4>
                <p className="text-xs font-medium text-slate-600">{positionsData[selectedPosition].description}</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-rose-100 space-y-2">
              <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest block">Dicas de Ergonomia Materna:</span>
              <ul className="space-y-1.5 text-xs font-bold text-slate-700">
                {positionsData[selectedPosition].tips.map((tip, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* 3. SOLUÇÃO DE DORES & PROBLEMAS */}
      {activeTab === 'troubleshooting' && (
        <div className="space-y-6">
          <div className="flex bg-slate-100 p-1.5 rounded-2xl gap-1 border border-slate-200">
            {(Object.keys(troubleData) as Array<keyof typeof troubleData>).map((key) => (
              <button
                key={key}
                onClick={() => { setTroubleFilter(key); playSoftClick(); }}
                className={`flex-1 py-2 text-[9px] font-black uppercase tracking-wider rounded-xl transition-all ${
                  troubleFilter === key ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-400'
                }`}
              >
                {key === 'fissures' ? 'Fissuras' : key === 'mastitis' ? 'Mastite' : key === 'lowSupply' ? 'Pouco Leite' : 'Empedrado'}
              </button>
            ))}
          </div>

          <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-4">
            <div className="flex justify-between items-start border-b border-slate-100 pb-3">
              <div>
                <h4 className="text-base font-black text-slate-800">{troubleData[troubleFilter].title}</h4>
                <p className="text-[10px] font-bold text-slate-400 mt-0.5">Causa principal: {troubleData[troubleFilter].cause}</p>
              </div>
              <span className="text-[9px] font-black px-3 py-1 bg-slate-100 text-slate-700 rounded-full">
                {troubleData[troubleFilter].severity}
              </span>
            </div>

            <div className="space-y-3">
              <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest block">Passo a Passo de Alívio:</span>
              <div className="space-y-2">
                {troubleData[troubleFilter].solution.map((sol, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-xs font-bold text-slate-700 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-xl bg-rose-100 text-rose-600 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{sol}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. BANCO DE LEITE HUMANO */}
      {activeTab === 'milkBank' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-rose-500 to-pink-600 text-white p-6 rounded-[2.5rem] space-y-3 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                <Heart size={28} />
              </div>
              <div>
                <h4 className="text-lg font-black">Doe Leite Materno & Salve Vidas</h4>
                <p className="text-xs font-medium opacity-90">1 colher de leite materno pode alimentar até 10 recém-nascidos prematuros na UTI Neonatal.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold text-slate-700">
            <div className="p-5 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-2">
              <span className="text-rose-500 font-black uppercase text-[10px] block">📍 Como Localizar o Banco Mais Próximo</span>
              <p className="text-slate-600 font-medium">A Rede Global de Bancos de Leite Humano (rBLH / Fiocruz) possui centenas de pontos de coleta gratuitos com busca de frascos em casa.</p>
              <a 
                href="https://rblh.fiocruz.br/localizacao-dos-blh" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 text-rose-600 font-black underline pt-2 hover:text-rose-700"
              >
                <MapPin size={14} /> Consultar Postos rBLH Fiocruz ↗
              </a>
            </div>

            <div className="p-5 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-2">
              <span className="text-indigo-500 font-black uppercase text-[10px] block">⏱️ Armazenamento Seguro de Leite</span>
              <ul className="space-y-1.5 text-slate-600 font-medium">
                <li>• <strong>Geladeira:</strong> Até 12 horas no máximo.</li>
                <li>• <strong>Freezer / Congelador:</strong> Até 15 dias para doação ou consumo do bebê.</li>
                <li>• Frasco de vidro esterilizado com tampa de plástico.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BreastfeedingAnimationView;
