import React, { useState } from 'react';
import { X, HeartHandshake, Check, Clock, UserCheck, AlertCircle, Sparkles } from 'lucide-react';
import { TrustedPerson, HelpRequest } from '../../types/casulo';

interface HelpRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  trustedPeople: TrustedPerson[];
  onSubmitRequest: (request: Omit<HelpRequest, 'id' | 'createdAt'>) => void;
}

const TEMPLATE_OPTIONS = [
  {
    id: 'descanso',
    category: 'descanso' as const,
    title: 'Preciso de um tempo para descansar',
    description: 'Pausa de 40 minutos para respirar ou cochilar.',
    suggestedMessage: 'A noite foi muito puxada com as três crianças e preciso de 40 minutos para deitar e recarregar as energias.',
  },
  {
    id: 'refeicao',
    category: 'refeicao' as const,
    title: 'Alguém pode ajudar com uma refeição?',
    description: 'Um prato caseiro ou socorro no almoço de hoje.',
    suggestedMessage: 'Hoje o dia está corrido por aqui. Alguém conseguiria trazer ou ajudar com o almoço/jantar das crianças?',
  },
  {
    id: 'tarefa',
    category: 'tarefa' as const,
    title: 'Preciso de ajuda com uma tarefa de hoje',
    description: 'Buscar na escola, farmácia ou olhar 30 min.',
    suggestedMessage: 'Preciso resolver algo urgente ou dar uma passada rápida no mercado e precisava de apoio de 30 minutinhos.',
  },
  {
    id: 'personalizado',
    category: 'personalizado' as const,
    title: 'Outro pedido específico...',
    description: 'Escreva com suas próprias palavras o que aliviaria seu dia.',
    suggestedMessage: '',
  },
];

export const HelpRequestModal: React.FC<HelpRequestModalProps> = ({
  isOpen,
  onClose,
  trustedPeople,
  onSubmitRequest,
}) => {
  const [selectedTemplateIndex, setSelectedTemplateIndex] = useState(0);
  const [selectedPersonId, setSelectedPersonId] = useState<string>(trustedPeople[0]?.id || '');
  const [customMessage, setCustomMessage] = useState(TEMPLATE_OPTIONS[0].suggestedMessage);

  if (!isOpen) return null;

  const currentTemplate = TEMPLATE_OPTIONS[selectedTemplateIndex];
  const selectedPerson = trustedPeople.find((p) => p.id === selectedPersonId);

  const handleTemplateSelect = (index: number) => {
    setSelectedTemplateIndex(index);
    setCustomMessage(TEMPLATE_OPTIONS[index].suggestedMessage);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const title = currentTemplate.title === 'Outro pedido específico...'
      ? (customMessage.slice(0, 45) || 'Pedido de apoio familiar')
      : currentTemplate.title;

    onSubmitRequest({
      title,
      message: customMessage.trim(),
      status: 'aguardando',
      targetPersonId: selectedPerson?.id,
      targetPersonName: selectedPerson?.name || 'Círculo de Confiança',
      category: currentTemplate.category,
    });

    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/45 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="w-full max-w-lg bg-[#FAF8F5] rounded-t-3xl sm:rounded-3xl border border-[#EAE5DC] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-slide-up">
        {/* Header */}
        <div className="px-5 pt-5 pb-3 border-b border-[#EAE5DC] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#E8EFE9] text-[#2C4A35] flex items-center justify-center">
              <HeartHandshake className="w-5 h-5 text-[#466352]" />
            </div>
            <div>
              <h2 id="modal-title" className="font-display font-bold text-lg text-[#242220]">
                Pedir apoio prático
              </h2>
              <p className="text-xs text-[#716C65]">
                Peça de forma direta, sem culpa e sem rodeios.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#716C65] hover:bg-[#F5F2EA] focus:outline-none"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-5 space-y-5">
          {/* Simulation Disclaimer Banner */}
          <div className="p-3 bg-[#F2EFF9] border border-[#D4CBEA] rounded-2xl flex items-start gap-2.5 text-[#55477E]">
            <Sparkles className="w-4 h-4 shrink-0 mt-0.5" />
            <p className="text-xs leading-relaxed">
              <strong>Simulação do protótipo:</strong> Nenhuma mensagem externa será enviada. Você poderá testar a resposta imediata da rede após confirmar.
            </p>
          </div>

          {/* Step 1: Pre-formatted requests */}
          <fieldset>
            <legend className="text-xs font-semibold uppercase tracking-wider text-[#716C65] mb-2.5">
              1. O que você precisa hoje?
            </legend>
            <div className="space-y-2">
              {TEMPLATE_OPTIONS.map((opt, idx) => {
                const isSelected = selectedTemplateIndex === idx;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleTemplateSelect(idx)}
                    className={`w-full text-left p-3 rounded-2xl border transition-all flex items-start justify-between min-h-[52px] ${
                      isSelected
                        ? 'bg-white border-[#466352] ring-1 ring-[#466352] shadow-sm'
                        : 'bg-white border-[#EAE5DC] hover:border-[#DCD5C4]'
                    }`}
                  >
                    <div className="pr-3">
                      <p className={`text-sm font-semibold ${isSelected ? 'text-[#2C4A35]' : 'text-[#242220]'}`}>
                        {opt.title}
                      </p>
                      <p className="text-xs text-[#716C65] mt-0.5">{opt.description}</p>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                        isSelected
                          ? 'border-[#466352] bg-[#466352] text-white'
                          : 'border-[#CCC5B8]'
                      }`}
                      aria-hidden="true"
                    >
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </fieldset>

          {/* Step 2: Choose person from trusted circle */}
          <fieldset>
            <legend className="text-xs font-semibold uppercase tracking-wider text-[#716C65] mb-2.5">
              2. Quem você quer acionar no seu círculo?
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {trustedPeople.map((person) => {
                const isSelected = selectedPersonId === person.id;
                return (
                  <button
                    key={person.id}
                    type="button"
                    onClick={() => setSelectedPersonId(person.id)}
                    className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-3 min-h-[52px] ${
                      isSelected
                        ? 'bg-[#E8EFE9] border-[#466352] ring-1 ring-[#466352]'
                        : 'bg-white border-[#EAE5DC] hover:border-[#DCD5C4]'
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-xl font-bold text-xs flex items-center justify-center shrink-0 border ${person.avatarColor}`}
                    >
                      {person.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-[#242220] truncate">
                        {person.name}
                      </p>
                      <p className="text-[11px] text-[#716C65] truncate">{person.relation}</p>
                    </div>
                    {isSelected && (
                      <Check className="w-4 h-4 text-[#466352] stroke-[2.5] shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </fieldset>

          {/* Step 3: Message / Note */}
          <div>
            <label
              htmlFor="help-message"
              className="block text-xs font-semibold uppercase tracking-wider text-[#716C65] mb-2"
            >
              3. Mensagem curta (opcional)
            </label>
            <textarea
              id="help-message"
              rows={3}
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              placeholder="Ex: Pode ser em qualquer momento da manhã..."
              className="w-full p-3 rounded-2xl bg-white border border-[#EAE5DC] text-sm text-[#242220] placeholder-[#A09A92] focus:outline-none focus:ring-2 focus:ring-[#466352] resize-none"
            />
            <p className="text-[11px] text-[#716C65] mt-1">
              Dica: pedidos específicos têm o dobro de chances de serem atendidos com leveza.
            </p>
          </div>

          {/* Footer Submit Buttons */}
          <div className="pt-2 flex flex-col-reverse sm:flex-row gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-1/3 py-3 px-4 rounded-xl border border-[#EAE5DC] bg-white text-sm font-semibold text-[#5F5B56] hover:bg-[#F5F2EA] min-h-[48px]"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="w-full sm:w-2/3 py-3 px-4 rounded-xl bg-[#466352] hover:bg-[#385142] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-sm min-h-[48px] active:scale-[0.99] transition-transform"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>Enviar pedido para o círculo</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
