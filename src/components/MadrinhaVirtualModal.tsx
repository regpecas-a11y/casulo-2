import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  MessageCircle, 
  Users, 
  Calendar, 
  Sparkles, 
  UserCheck, 
  Send, 
  CheckCircle2,
  Clock,
  ShieldCheck,
  Star
} from 'lucide-react';
import { playPositiveChime, playSoftClick, playNotificationBell } from '../sounds';

interface MadrinhaVirtualModalProps {
  onClose?: () => void;
}

export const MadrinhaVirtualModal: React.FC<MadrinhaVirtualModalProps> = () => {
  const [activeTab, setActiveTab] = useState<'madrinha' | 'forum' | 'events' | 'specialists'>('madrinha');
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      sender: 'madrinha',
      text: 'Olá mamãe! Eu sou a Juliana, sua Madrinha Virtual no Casulo. Tenho 2 filhos e já passei por esse início sem dormir. Como você está se sentindo hoje?',
      time: '14:30'
    }
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const userMsg = {
      sender: 'user',
      text: chatMessage,
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };

    setChatHistory(prev => [...prev, userMsg]);
    setChatMessage('');
    playPositiveChime();

    // Resposta acolhedora automática da Madrinha Virtual
    setTimeout(() => {
      const responses = [
        "Estou aqui com você! Respira fundo. O salto de desenvolvimento dessa fase passa rápido. Você está fazendo um trabalho incrível!",
        "Sei exatamente como é essa angústia do choro no fim da tarde. Experimenta colocar o bebê no sling ou dar um banho morno com a luz baixinha.",
        "Não se cobre tanto! O puerpério é um momento desafiador. Quer conversar sobre o sono ou sobre a amamentação hoje?"
      ];
      const randomResp = responses[Math.floor(Math.random() * responses.length)];
      setChatHistory(prev => [...prev, {
        sender: 'madrinha',
        text: randomResp,
        time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
      }]);
      playNotificationBell();
    }, 1500);
  };

  return (
    <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-slate-100 space-y-6 animate-fade-in">
      {/* NAVEGAÇÃO INTERNA DA REDE DE APOIO */}
      <div className="flex bg-slate-100 p-1.5 rounded-2xl gap-1 border border-slate-200">
        <button
          onClick={() => { setActiveTab('madrinha'); playSoftClick(); }}
          className={`flex-1 py-2.5 px-3 rounded-xl text-[9px] font-black uppercase tracking-wider transition-all ${
            activeTab === 'madrinha' ? 'bg-pink-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          💖 Madrinha Virtual
        </button>
        <button
          onClick={() => { setActiveTab('forum'); playSoftClick(); }}
          className={`flex-1 py-2.5 px-3 rounded-xl text-[9px] font-black uppercase tracking-wider transition-all ${
            activeTab === 'forum' ? 'bg-pink-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          💬 Fórum de Mães
        </button>
        <button
          onClick={() => { setActiveTab('specialists'); playSoftClick(); }}
          className={`flex-1 py-2.5 px-3 rounded-xl text-[9px] font-black uppercase tracking-wider transition-all ${
            activeTab === 'specialists' ? 'bg-pink-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          🩺 Especialistas
        </button>
        <button
          onClick={() => { setActiveTab('events'); playSoftClick(); }}
          className={`flex-1 py-2.5 px-3 rounded-xl text-[9px] font-black uppercase tracking-wider transition-all ${
            activeTab === 'events' ? 'bg-pink-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          📅 Agenda
        </button>
      </div>

      {/* 1. MADRINHA VIRTUAL CHAT & ACOLHIMENTO */}
      {activeTab === 'madrinha' && (
        <div className="space-y-4">
          <div className="flex items-center gap-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white p-5 rounded-3xl shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl backdrop-blur-sm border border-white/30">
              👩‍🦰
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-black text-base">Juliana — Sua Madrinha Virtual</h4>
                <span className="text-[9px] font-black bg-emerald-400 text-slate-900 px-2 py-0.5 rounded-full uppercase">Online</span>
              </div>
              <p className="text-xs font-medium text-pink-100">Mãe experiente voluntária para acolhimento de primeira viagem</p>
            </div>
          </div>

          {/* CHAT CONTAINER */}
          <div className="bg-slate-50 p-4 rounded-[2rem] border border-slate-100 min-h-[250px] max-h-[320px] overflow-y-auto space-y-3">
            {chatHistory.map((msg, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`p-3.5 rounded-2xl text-xs font-bold max-w-[85%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-pink-600 text-white rounded-br-none shadow-sm'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[9px] text-slate-400 font-bold mt-1 px-1">{msg.time}</span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              type="text"
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              placeholder="Digite sua dúvida ou desabafo..."
              className="flex-1 p-3.5 rounded-2xl border border-slate-200 bg-white text-xs font-bold text-slate-800 focus:outline-none focus:border-pink-500"
            />
            <button
              type="submit"
              className="px-5 py-3.5 bg-pink-600 text-white rounded-2xl font-black text-xs shadow-md active:scale-95 transition-all flex items-center gap-1"
            >
              <Send size={14} /> Enviar
            </button>
          </form>
        </div>
      )}

      {/* 2. FÓRUM DE MÃES */}
      {activeTab === 'forum' && (
        <div className="space-y-4">
          <div className="px-1">
            <h4 className="text-lg font-black text-slate-800">Comunidade Moderada de Mães</h4>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Troque experiências reais sem julgamentos
            </p>
          </div>

          <div className="space-y-3">
            {[
              { title: "Alguém mais com bebê de 3 meses que acorda de 2 em 2 horas?", replies: 24, category: "Sono Infantil", time: "Há 15 min" },
              { title: "Dicas de amamentação em público sem vergonha?", replies: 18, category: "Amamentação", time: "Há 1 hora" },
              { title: "Receitas de BLW que o bebê não cospe!", replies: 35, category: "Introdução Alimentar", time: "Há 3 horas" }
            ].map((topic, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 hover:bg-slate-100/80 transition-all cursor-pointer">
                <div className="flex justify-between items-center text-[10px] font-black">
                  <span className="bg-pink-100 text-pink-700 px-2.5 py-0.5 rounded-full">{topic.category}</span>
                  <span className="text-slate-400">{topic.time}</span>
                </div>
                <h5 className="text-xs font-black text-slate-800">{topic.title}</h5>
                <div className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                  <MessageCircle size={12} /> {topic.replies} respostas ativas
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. ESPECIALISTAS */}
      {activeTab === 'specialists' && (
        <div className="space-y-4">
          <div className="px-1">
            <h4 className="text-lg font-black text-slate-800">Plantão de Especialistas Credenciados</h4>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Suporte com Nutricionistas, Pediatras e Psicólogas
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center gap-3">
              <span className="text-3xl p-2 bg-pink-50 rounded-xl">👩‍⚕️</span>
              <div>
                <h5 className="font-black text-slate-800">Dra. Camila Rocha</h5>
                <p className="text-[10px] font-bold text-pink-600">Consultora de Amamentação & Lactação</p>
                <span className="text-[9px] font-bold text-emerald-600 block mt-1">✓ Responde em até 30 min</span>
              </div>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center gap-3">
              <span className="text-3xl p-2 bg-purple-50 rounded-xl">🧠</span>
              <div>
                <h5 className="font-black text-slate-800">Dra. Vanessa Lima</h5>
                <p className="text-[10px] font-bold text-purple-600">Psicóloga Perinatal & Puerpério</p>
                <span className="text-[9px] font-bold text-emerald-600 block mt-1">✓ Plantão de acolhimento</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. AGENDA DE EVENTOS & WORKSHOPS */}
      {activeTab === 'events' && (
        <div className="space-y-4">
          <div className="px-1">
            <h4 className="text-lg font-black text-slate-800">Workshops & Encontros de Mães</h4>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Webinars ao vivo e encontros presenciais
            </p>
          </div>

          <div className="p-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-3xl space-y-2 shadow-md">
            <span className="text-[9px] font-black bg-white/20 px-2.5 py-0.5 rounded-full uppercase">Próximo Webinar Ao Vivo</span>
            <h5 className="font-black text-base">Desmistificando o Sono do Bebê dos 0 aos 6 Meses</h5>
            <p className="text-xs text-purple-100">Com Dra. Mariana Ferraz (Especialista em Higiene do Sono)</p>
            <div className="flex items-center gap-4 text-[10px] font-bold pt-2 border-t border-white/20">
              <span className="flex items-center gap-1"><Calendar size={12} /> Quinta-feira às 20h</span>
              <span className="flex items-center gap-1"><Users size={12} /> 140 vagas reservadas</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MadrinhaVirtualModal;
