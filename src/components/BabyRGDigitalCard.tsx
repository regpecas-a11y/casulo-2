import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, 
  Share2, 
  CheckCircle2, 
  Copy, 
  FileText, 
  UserCheck, 
  PhoneCall, 
  Sparkles,
  Lock,
  Download,
  AlertTriangle,
  Info,
  Camera
} from 'lucide-react';
import { playPositiveChime, playSoftClick, playNotificationBell } from '../sounds';
import { ChildProfile } from '../types';

interface BabyRGDigitalCardProps {
  profile: ChildProfile;
  onUpdateProfile: (updated: Partial<ChildProfile>) => void;
  isPremium?: boolean;
}

export const BabyRGDigitalCard: React.FC<BabyRGDigitalCardProps> = ({ profile, onUpdateProfile, isPremium = true }) => {
  const [activeTab, setActiveTab] = useState<'card' | 'campaign' | 'guide'>('card');
  const [copiedAlert, setCopiedAlert] = useState(false);
  const [isEditingData, setIsEditingData] = useState(false);

  // ESTADO DO RG DO BEBÊ
  const [rgNumber, setRgNumber] = useState(profile?.rgData?.number || '');
  const [cpfNumber, setCpfNumber] = useState(profile?.rgData?.cpf || '');
  const [bloodType, setBloodType] = useState(profile?.rgData?.bloodType || 'O+');
  const [allergies, setAllergies] = useState(profile?.rgData?.allergies || 'Nenhuma alergia conhecida');
  const [emergencyPhone, setEmergencyPhone] = useState(profile?.rgData?.emergencyPhone || '');
  const [pediatricianPhone, setPediatricianPhone] = useState(profile?.rgData?.pediatricianPhone || '');
  const [healthInsurance, setHealthInsurance] = useState(profile?.rgData?.healthInsurance || 'SUS');

  const handleSaveRG = () => {
    onUpdateProfile({
      rgData: {
        number: rgNumber,
        cpf: cpfNumber,
        bloodType,
        allergies,
        emergencyPhone,
        pediatricianPhone,
        healthInsurance
      }
    });
    setIsEditingData(false);
    playPositiveChime();
  };

  const generateEmergencyCardText = () => {
    let txt = `🚨 *CARTÃO DE IDENTIFICAÇÃO E EMERGÊNCIA INFANTIL (CASULO)* 🚨\n\n`;
    txt += `👶 *Criança:* ${profile.name}\n`;
    txt += `📅 *Nascimento:* ${profile.birthDate || 'Não informado'}\n`;
    txt += `🪪 *RG:* ${rgNumber || 'Em emissão'}\n`;
    txt += `💳 *CPF:* ${cpfNumber || 'Não informado'}\n`;
    txt += `🩸 *Tipo Sanguíneo:* ${bloodType}\n`;
    txt += `⚠️ *Alergias:* ${allergies}\n`;
    txt += `🏥 *Plano de Saúde:* ${healthInsurance}\n\n`;
    txt += `📞 *CONTATOS DE EMERGÊNCIA:*\n`;
    txt += `• Responsável: ${emergencyPhone || 'Não informado'}\n`;
    txt += `• Pediatra: ${pediatricianPhone || 'Não informado'}\n\n`;
    txt += `🔒 *Gerado via Aplicativo Casulo Maternidade.*`;
    return txt;
  };

  const handleShareCard = () => {
    const txt = generateEmergencyCardText();
    navigator.clipboard.writeText(txt).then(() => {
      setCopiedAlert(true);
      playPositiveChime();
      setTimeout(() => setCopiedAlert(false), 3000);
    }).catch(() => {
      alert(txt);
    });
  };

  return (
    <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-slate-100 space-y-6 animate-fade-in">
      {/* SELETOR DE ABAS INTERNAS */}
      <div className="flex bg-slate-100 p-1.5 rounded-2xl gap-1 border border-slate-200">
        <button
          onClick={() => { setActiveTab('card'); playSoftClick(); }}
          className={`flex-1 py-2.5 px-3 rounded-xl text-[9px] font-black uppercase tracking-wider transition-all ${
            activeTab === 'card' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          🪪 Cartão Digital RG
        </button>
        <button
          onClick={() => { setActiveTab('campaign'); playSoftClick(); }}
          className={`flex-1 py-2.5 px-3 rounded-xl text-[9px] font-black uppercase tracking-wider transition-all ${
            activeTab === 'campaign' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          📢 Campanha "Seu Bebê Tem RG?"
        </button>
        <button
          onClick={() => { setActiveTab('guide'); playSoftClick(); }}
          className={`flex-1 py-2.5 px-3 rounded-xl text-[9px] font-black uppercase tracking-wider transition-all ${
            activeTab === 'guide' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          📝 Como Tirar o RG
        </button>
      </div>

      {/* 1. CARTEIRINHA DIGITAL E CARTÃO DE EMERGÊNCIA */}
      {activeTab === 'card' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-1">
            <div>
              <h4 className="text-lg font-black text-slate-800 flex items-center gap-2">
                <ShieldAlert className="text-indigo-600" size={20} /> RG Digital & Cartão de Emergência
              </h4>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">
                Identificação digital segura com dados médicos e envio rápido em 1 clique
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => { setIsEditingData(!isEditingData); playSoftClick(); }}
                className="px-4 py-2 bg-slate-100 text-slate-700 font-black rounded-2xl text-[10px] uppercase tracking-widest hover:bg-slate-200 transition-all"
              >
                {isEditingData ? "Cancelar" : "Editar Dados"}
              </button>
              <button
                onClick={handleShareCard}
                className="px-4 py-2 bg-indigo-600 text-white font-black rounded-2xl text-[10px] uppercase tracking-widest shadow-lg flex items-center gap-2 active:scale-95 transition-all hover:bg-indigo-700"
              >
                {copiedAlert ? <CheckCircle2 size={14} /> : <Share2 size={14} />}
                {copiedAlert ? "Copiado para Enviar!" : "Gerar Alerta WhatsApp"}
              </button>
            </div>
          </div>

          {/* FORMULÁRIO DE EDIÇÃO */}
          {isEditingData && (
            <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-200 space-y-4 animate-slide-up">
              <h5 className="text-xs font-black text-slate-800 uppercase tracking-wider">Editar Documentos e Dados Médicos:</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase block mb-1">Número do RG:</label>
                  <input
                    type="text"
                    value={rgNumber}
                    onChange={(e) => setRgNumber(e.target.value)}
                    placeholder="Ex: 00.000.000-0"
                    className="w-full p-3 rounded-xl border border-slate-200 bg-white font-bold text-slate-800"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase block mb-1">CPF do Bebê:</label>
                  <input
                    type="text"
                    value={cpfNumber}
                    onChange={(e) => setCpfNumber(e.target.value)}
                    placeholder="Ex: 000.000.000-00"
                    className="w-full p-3 rounded-xl border border-slate-200 bg-white font-bold text-slate-800"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase block mb-1">Tipo Sanguíneo:</label>
                  <select
                    value={bloodType}
                    onChange={(e) => setBloodType(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-200 bg-white font-bold text-slate-800"
                  >
                    {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase block mb-1">Plano de Saúde / Convênio:</label>
                  <input
                    type="text"
                    value={healthInsurance}
                    onChange={(e) => setHealthInsurance(e.target.value)}
                    placeholder="Ex: Amil / Bradesco / SUS"
                    className="w-full p-3 rounded-xl border border-slate-200 bg-white font-bold text-slate-800"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase block mb-1">Alergias Conhecidas:</label>
                  <input
                    type="text"
                    value={allergies}
                    onChange={(e) => setAllergies(e.target.value)}
                    placeholder="Ex: Lactose, Dipirona, Nenhuma"
                    className="w-full p-3 rounded-xl border border-slate-200 bg-white font-bold text-slate-800"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase block mb-1">Telefone do Responsável:</label>
                  <input
                    type="text"
                    value={emergencyPhone}
                    onChange={(e) => setEmergencyPhone(e.target.value)}
                    placeholder="Ex: (11) 99999-9999"
                    className="w-full p-3 rounded-xl border border-slate-200 bg-white font-bold text-slate-800"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase block mb-1">Telefone do Pediatra:</label>
                  <input
                    type="text"
                    value={pediatricianPhone}
                    onChange={(e) => setPediatricianPhone(e.target.value)}
                    placeholder="Ex: (11) 98888-8888 (Dra. Ana)"
                    className="w-full p-3 rounded-xl border border-slate-200 bg-white font-bold text-slate-800"
                  />
                </div>
              </div>
              <button
                onClick={handleSaveRG}
                className="w-full py-3 bg-indigo-600 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-md active:scale-95 transition-all"
              >
                Salvar Cadastro de Segurança
              </button>
            </div>
          )}

          {/* DESIGN VISUAL DA CARTEIRINHA DE RG */}
          <div className="relative bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white p-8 rounded-[3rem] shadow-2xl space-y-6 overflow-hidden border-4 border-indigo-400/30">
            {/* MARCA D'ÁGUA E BRILHO */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="flex justify-between items-start border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-xl backdrop-blur-md border border-indigo-400/30">
                  🪪
                </div>
                <div>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-indigo-300 block">REPÚBLICA FEDERATIVA DO CASULO</span>
                  <h3 className="text-base font-black tracking-tight text-white">CARTEIRA DIGITAL DE IDENTIFICAÇÃO INFANTIL</h3>
                </div>
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-400/30 backdrop-blur-md">
                VALIDADO ✔
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              {/* FOTO DO BEBÊ */}
              <div className="relative shrink-0">
                <div className="w-28 h-28 rounded-3xl overflow-hidden border-4 border-white/20 shadow-xl bg-slate-800 flex items-center justify-center text-4xl">
                  {profile.photo ? (
                    <img src={profile.photo} className="w-full h-full object-cover" alt={profile.name} />
                  ) : (
                    <span>👶</span>
                  )}
                </div>
                <div className="absolute -bottom-2 -right-2 bg-indigo-500 text-white p-1.5 rounded-full shadow-md text-xs">
                  ✨
                </div>
              </div>

              {/* DADOS NOMINAIS */}
              <div className="flex-1 space-y-3 text-center sm:text-left">
                <div>
                  <span className="text-[9px] font-black text-indigo-300 uppercase tracking-widest block">Nome Completo do Bebê:</span>
                  <p className="text-xl font-black text-white">{profile.name}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[9px] font-black text-indigo-300 uppercase block">Data de Nascimento:</span>
                    <p className="font-bold text-slate-200">{profile.birthDate || 'Não informado'}</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-black text-indigo-300 uppercase block">RG Oficial:</span>
                    <p className="font-bold text-emerald-400">{rgNumber || 'Não cadastrado'}</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-black text-indigo-300 uppercase block">Tipo Sanguíneo:</span>
                    <p className="font-bold text-rose-400">{bloodType}</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-black text-indigo-300 uppercase block">Plano de Saúde:</span>
                    <p className="font-bold text-slate-200">{healthInsurance}</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10">
                  <span className="text-[9px] font-black text-indigo-300 uppercase block">Alergias & Restrições:</span>
                  <p className="text-xs font-bold text-amber-300">{allergies}</p>
                </div>
              </div>
            </div>

            {/* RODAPÉ DO CARTÃO COM CONTATOS */}
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs">
              <div className="flex items-center gap-2 text-indigo-200">
                <PhoneCall size={14} />
                <span>Contato de Emergência: <strong>{emergencyPhone || 'Adicionar contato'}</strong></span>
              </div>
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                ID Único: #{profile.id.slice(0, 8).toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 2. CAMPANHA EDUCATIVA: "SEU BEBÊ TEM RG?" */}
      {activeTab === 'campaign' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-6 rounded-[2.5rem] space-y-3 shadow-lg">
            <h4 className="text-lg font-black flex items-center gap-2">
              📢 Campanha "Seu Bebê Tem RG desde os Primeiros Meses?"
            </h4>
            <p className="text-xs font-medium opacity-90 leading-relaxed">
              Muitos pais acreditam erroneamente que o RG só pode ser emitido a partir de 5 ou 6 anos. No Brasil, o documento de identidade civil pode e deve ser emitido logo após o nascimento!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-bold text-slate-700">
            <div className="p-5 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-2">
              <span className="text-3xl block mb-1">🛡️</span>
              <h5 className="font-black text-slate-800">Proteção em Viagens e Hospitais</h5>
              <p className="text-slate-500 font-medium text-[11px] leading-relaxed">
                A Certidão de Nascimento é um papel grande e frágil. O RG com foto e biometria garante identificação incontestável em embarques e pronto-socorros.
              </p>
            </div>

            <div className="p-5 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-2">
              <span className="text-3xl block mb-1">🚨</span>
              <h5 className="font-black text-slate-800">Prevenção Contra Raptos</h5>
              <p className="text-slate-500 font-medium text-[11px] leading-relaxed">
                Ao registrar o RG com as digitais do bebê, os dados entram no cadastro nacional de segurança pública, inibindo sequestros e fraudes em cartórios.
              </p>
            </div>

            <div className="p-5 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-2">
              <span className="text-3xl block mb-1">🎁</span>
              <h5 className="font-black text-slate-800">1ª Via 100% Gratuita</h5>
              <p className="text-slate-500 font-medium text-[11px] leading-relaxed">
                A primeira via da carteira de identidade é garantida por lei federal de forma totalmente gratuita em todos os estados brasileiros.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 3. GUIA PASSO A PASSO PARA EMISSÃO DO RG */}
      {activeTab === 'guide' && (
        <div className="space-y-6">
          <div className="px-1">
            <h4 className="text-lg font-black text-slate-800">Passo a Passo para Tirar o RG do Bebê</h4>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Checklist de documentos para agendar no Poupatempo, SAC, Detran ou Instituto de Identificação
            </p>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4">
              <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-black flex items-center justify-center shrink-0">1</span>
              <div>
                <h5 className="font-black text-slate-800 text-sm">Certidão de Nascimento Original</h5>
                <p className="text-slate-600 font-medium mt-0.5">Leve a certidão original e uma cópia simples sem rasuras.</p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4">
              <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-black flex items-center justify-center shrink-0">2</span>
              <div>
                <h5 className="font-black text-slate-800 text-sm">CPF do Bebê e Documento do Responsável</h5>
                <p className="text-slate-600 font-medium mt-0.5">O responsável legal (mãe ou pai) deve apresentar seu próprio RG/CPF original.</p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4">
              <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-black flex items-center justify-center shrink-0">3</span>
              <div>
                <h5 className="font-black text-slate-800 text-sm">Foto 3x4 Recente (Se necessário)</h5>
                <p className="text-slate-600 font-medium mt-0.5">Na maioria dos postos modernos a foto é tirada na hora. Leve uma roupa contrastante (evite camiseta branca).</p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4">
              <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-black flex items-center justify-center shrink-0">4</span>
              <div>
                <h5 className="font-black text-slate-800 text-sm">Agendamento Prévio Online</h5>
                <p className="text-slate-600 font-medium mt-0.5">Acesse o portal do órgão de identificação do seu estado (ex: Poupatempo em SP, UAI em MG, Detran em RJ) e escolha o horário.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BabyRGDigitalCard;
