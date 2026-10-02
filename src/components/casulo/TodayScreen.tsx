import React from 'react';
import {
  HeartHandshake,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  MessageSquareHeart,
  Check,
  AlertCircle,
  Smile,
  Coffee,
  HelpCircle,
} from 'lucide-react';
import { WellBeingState, HelpRequest, DailyItem } from '../../types/casulo';

interface TodayScreenProps {
  wellBeing: WellBeingState;
  onSelectWellBeing: (state: WellBeingState) => void;
  onOpenHelpModal: () => void;
  dailyItems: DailyItem[];
  onToggleDailyItem: (id: string) => void;
  helpRequests: HelpRequest[];
  onSimulateAccept: (requestId: string) => void;
  onCompleteRequest: (requestId: string) => void;
  onNavigateToTab: (tab: 'rede' | 'rotina' | 'guia') => void;
}

export const TodayScreen: React.FC<TodayScreenProps> = ({
  wellBeing,
  onSelectWellBeing,
  onOpenHelpModal,
  dailyItems,
  onToggleDailyItem,
  helpRequests,
  onSimulateAccept,
  onCompleteRequest,
  onNavigateToTab,
}) => {
  return (
    <div className="space-y-6 pb-24">
      {/* 1. Welcome & Guilt-Free Warm Header */}
      <section className="bg-white rounded-3xl p-5 border border-[#EAE5DC] shadow-sm">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#466352] bg-[#E8EFE9] px-2.5 py-0.5 rounded-md inline-block mb-1.5">
              Apoio Familiar · Família com 3 crianças
            </span>
            <h1 className="font-display font-bold text-2xl text-[#242220] tracking-tight">
              Bom dia, Mariana
            </h1>
            <p className="text-xs text-[#716C65] mt-1">
              Gael (1 ano) · Maya (3 anos) · Theo (5 anos)
            </p>
          </div>
          <div className="w-11 h-11 rounded-2xl bg-[#F7F5F0] border border-[#EAE5DC] flex items-center justify-center shrink-0">
            <span className="text-lg">🌿</span>
          </div>
        </div>

        {/* Anti-guilt reminder banner */}
        <div className="mt-4 p-3 bg-[#FAF8F5] rounded-2xl border border-[#EAE5DC] flex items-center gap-3">
          <Sparkles className="w-4 h-4 text-[#C8684A] shrink-0" />
          <p className="text-xs font-medium text-[#5F5B56] leading-relaxed">
            <strong className="text-[#242220]">Uma coisa de cada vez:</strong> Pedir ajuda também é cuidar. Você não precisa carregar o mundo hoje.
          </p>
        </div>
      </section>

      {/* 2. Check-in de Bem-Estar (Optional & Non-Clinical) */}
      <section className="bg-white rounded-3xl p-5 border border-[#EAE5DC] shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="font-display font-semibold text-base text-[#242220]">
              Como você está hoje?
            </h2>
            <p className="text-xs text-[#716C65]">
              Check-in opcional e sem julgamentos para acolher seu momento.
            </p>
          </div>
        </div>

        {/* 3 Non-clinical choices */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <button
            onClick={() => onSelectWellBeing('pausa')}
            className={`p-3 rounded-2xl border text-left transition-all flex items-center justify-between min-h-[52px] ${
              wellBeing === 'pausa'
                ? 'bg-[#FAF0EC] border-[#C8684A] text-[#9A462C] ring-1 ring-[#C8684A]'
                : 'bg-[#FAF8F5] border-[#EAE5DC] text-[#242220] hover:border-[#DCD5C4]'
            }`}
          >
            <div>
              <p className="text-xs font-semibold">Preciso de uma pausa</p>
              <p className="text-[11px] opacity-80 mt-0.5">Respiração e silêncio</p>
            </div>
            <Coffee className="w-4 h-4 opacity-70 shrink-0" />
          </button>

          <button
            onClick={() => onSelectWellBeing('limite')}
            className={`p-3 rounded-2xl border text-left transition-all flex items-center justify-between min-h-[52px] ${
              wellBeing === 'limite'
                ? 'bg-[#F2EFF9] border-[#756AA3] text-[#55477E] ring-1 ring-[#756AA3]'
                : 'bg-[#FAF8F5] border-[#EAE5DC] text-[#242220] hover:border-[#DCD5C4]'
            }`}
          >
            <div>
              <p className="text-xs font-semibold">Estou no limite</p>
              <p className="text-[11px] opacity-80 mt-0.5">Cansaço acumulado</p>
            </div>
            <AlertCircle className="w-4 h-4 opacity-70 shrink-0" />
          </button>

          <button
            onClick={() => onSelectWellBeing('bem')}
            className={`p-3 rounded-2xl border text-left transition-all flex items-center justify-between min-h-[52px] ${
              wellBeing === 'bem'
                ? 'bg-[#E8EFE9] border-[#466352] text-[#2C4A35] ring-1 ring-[#466352]'
                : 'bg-[#FAF8F5] border-[#EAE5DC] text-[#242220] hover:border-[#DCD5C4]'
            }`}
          >
            <div>
              <p className="text-xs font-semibold">Tudo bem por agora</p>
              <p className="text-[11px] opacity-80 mt-0.5">Fluxo tranquilo</p>
            </div>
            <Smile className="w-4 h-4 opacity-70 shrink-0" />
          </button>
        </div>

        {/* Immediate Empathetic Feedback Box */}
        {wellBeing && (
          <div className="mt-4 p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] animate-fade-in">
            {wellBeing === 'pausa' && (
              <div>
                <p className="text-xs font-semibold text-[#9A462C]">
                  ☕ Sua pausa é um direito, não um privilégio.
                </p>
                <p className="text-xs text-[#5F5B56] mt-1 leading-relaxed">
                  Cuidar de 3 crianças pequenas exige pausas reais. Que tal pedir 40 minutos para a Tia Clara ou o Vovô Carlos ficarem na sala enquanto você descansa?
                </p>
                <button
                  onClick={onOpenHelpModal}
                  className="mt-2 text-xs font-semibold text-[#C8684A] hover:underline flex items-center gap-1 min-h-[32px]"
                >
                  Pedir essa pausa na rede agora →
                </button>
              </div>
            )}

            {wellBeing === 'limite' && (
              <div>
                <p className="text-xs font-semibold text-[#55477E]">
                  💜 Acolha seu cansaço. Você não tem que ser de ferro.
                </p>
                <p className="text-xs text-[#5F5B56] mt-1 leading-relaxed">
                  O esgotamento acontece quando nos faltam braços de apoio, não por falta de amor pelos filhos. Diminua as exigências de hoje: comida congelada vale, bagunça na sala espera.
                </p>
                <button
                  onClick={onOpenHelpModal}
                  className="mt-2 text-xs font-semibold text-[#756AA3] hover:underline flex items-center gap-1 min-h-[32px]"
                >
                  Acionar apoio de emergência na rede →
                </button>
              </div>
            )}

            {wellBeing === 'bem' && (
              <div>
                <p className="text-xs font-semibold text-[#2C4A35]">
                  🌿 Que bom ter esse momento de respiro!
                </p>
                <p className="text-xs text-[#5F5B56] mt-1 leading-relaxed">
                  Aproveite a tranquilidade sem inventar mil obrigações para preencher o tempo. Aproveite para estar presente com as crianças ou curtir seu café quente.
                </p>
              </div>
            )}
          </div>
        )}
      </section>

      {/* 3. HERO PRIMARY ACTION: "Pedir Ajuda" */}
      <section className="bg-gradient-to-br from-[#466352] to-[#364F40] rounded-3xl p-6 text-white shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-[#D1E3D6] bg-white/10 px-2.5 py-0.5 rounded-full">
              Ação Principal do Casulo
            </span>
            <h2 className="font-display font-bold text-xl text-white">
              Precisa de apoio prático hoje?
            </h2>
            <p className="text-xs text-[#E2EBE4] max-w-sm leading-relaxed">
              Acione seu círculo de confiança em segundos para refeições, pausas ou tarefas de rotina.
            </p>
          </div>

          <button
            onClick={onOpenHelpModal}
            className="w-full sm:w-auto h-14 px-6 rounded-2xl bg-[#FAF8F5] hover:bg-white text-[#2C4A35] font-semibold text-sm flex items-center justify-center gap-2.5 shadow-lg active:scale-[0.98] transition-all min-h-[48px]"
            aria-label="Abrir fluxo para pedir ajuda para sua rede de confiança"
          >
            <HeartHandshake className="w-5 h-5 text-[#466352]" />
            <span>Pedir ajuda</span>
          </button>
        </div>
      </section>

      {/* 4. Active & Recent Help Requests with Interactive Acceptance Simulation */}
      <section className="bg-white rounded-3xl p-5 border border-[#EAE5DC] shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="font-display font-semibold text-base text-[#242220]">
              Pedidos recentes na sua rede
            </h2>
            <p className="text-xs text-[#716C65]">
              Acompanhe quem aceitou ajudar ou simule uma resposta do círculo.
            </p>
          </div>
          <button
            onClick={() => onNavigateToTab('rede')}
            className="text-xs font-semibold text-[#466352] hover:underline min-h-[32px] flex items-center"
          >
            Ver rede →
          </button>
        </div>

        {helpRequests.length === 0 ? (
          <div className="p-6 text-center rounded-2xl bg-[#FAF8F5] border border-dashed border-[#DCD5C4]">
            <p className="text-sm font-semibold text-[#5F5B56]">
              Nenhum pedido ativo no momento
            </p>
            <p className="text-xs text-[#716C65] mt-1 max-w-xs mx-auto">
              Quando precisar de uma mão, use o botão "Pedir ajuda" acima para acionar seu círculo.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {helpRequests.map((req) => {
              const isWaiting = req.status === 'aguardando';
              const isAccepted = req.status === 'aceito';
              const isDone = req.status === 'concluido';

              return (
                <div
                  key={req.id}
                  className="p-4 rounded-2xl border border-[#EAE5DC] bg-[#FAF8F5] transition-all space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        {isWaiting && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#FAF0EC] text-[#9A462C] border border-[#E8C5B8]">
                            <Clock className="w-3 h-3" />
                            Aguardando resposta
                          </span>
                        )}
                        {isAccepted && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#E8EFE9] text-[#2C4A35] border border-[#BDD3C2]">
                            <CheckCircle2 className="w-3 h-3" />
                            Ajuda combinada
                          </span>
                        )}
                        {isDone && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 border border-gray-200">
                            <Check className="w-3 h-3" />
                            Concluído
                          </span>
                        )}
                        <span className="text-[11px] text-[#716C65]">{req.createdAt}</span>
                      </div>

                      <h3 className="text-sm font-semibold text-[#242220] mt-1.5 leading-snug">
                        {req.title}
                      </h3>
                      {req.message && (
                        <p className="text-xs text-[#5F5B56] mt-1 leading-relaxed">
                          "{req.message}"
                        </p>
                      )}
                    </div>
                  </div>

                  {/* If Accepted, show the person's supportive response */}
                  {req.acceptedBy && (
                    <div className="p-3 rounded-xl bg-white border border-[#BDD3C2] flex items-start gap-2.5 text-xs text-[#2C4A35]">
                      <MessageSquareHeart className="w-4 h-4 shrink-0 text-[#466352] mt-0.5" />
                      <div>
                        <p className="font-semibold">
                          {req.acceptedBy.name} aceitou ajudar:
                        </p>
                        <p className="text-[#5F5B56] mt-0.5 italic">
                          "{req.acceptedBy.message}"
                        </p>
                        <p className="text-[10px] text-[#716C65] mt-1">
                          Combinado {req.acceptedBy.acceptedAt}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Simulation & Completion Controls */}
                  <div className="flex items-center justify-between pt-1 border-t border-[#EAE5DC]/60">
                    <span className="text-[11px] text-[#716C65]">
                      Destinatário: <strong className="text-[#242220]">{req.targetPersonName || 'Círculo de Confiança'}</strong>
                    </span>

                    <div className="flex items-center gap-2">
                      {isWaiting && (
                        <button
                          onClick={() => onSimulateAccept(req.id)}
                          className="px-3 py-1.5 rounded-lg bg-[#466352] text-white text-xs font-semibold hover:bg-[#385142] transition-colors shadow-sm flex items-center gap-1.5 min-h-[36px]"
                          title="Simular aceite no protótipo"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Simular aceite</span>
                        </button>
                      )}

                      {isAccepted && (
                        <button
                          onClick={() => onCompleteRequest(req.id)}
                          className="px-3 py-1.5 rounded-lg bg-white border border-[#EAE5DC] text-[#2C4A35] text-xs font-semibold hover:bg-[#E8EFE9] transition-colors min-h-[36px]"
                        >
                          Marcar como concluído
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 5. Max 3 Gentle Daily Items (No guilt, no stress) */}
      <section className="bg-white rounded-3xl p-5 border border-[#EAE5DC] shadow-sm">
        <div className="flex items-center justify-between mb-1">
          <div>
            <h2 className="font-display font-semibold text-base text-[#242220]">
              Itens leves para hoje
            </h2>
            <p className="text-xs text-[#716C65]">
              No máximo 3 sugestões sem cobrança. O que der foi ótimo!
            </p>
          </div>
        </div>

        <div className="space-y-2.5 mt-3">
          {dailyItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onToggleDailyItem(item.id)}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 min-h-[56px] select-none ${
                item.completed
                  ? 'bg-[#F5F2EA]/60 border-[#DCD5C4]'
                  : 'bg-[#FAF8F5] border-[#EAE5DC] hover:border-[#DCD5C4]'
              }`}
              role="checkbox"
              aria-checked={item.completed}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  onToggleDailyItem(item.id);
                }
              }}
            >
              <div
                className={`w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                  item.completed
                    ? 'bg-[#466352] border-[#466352] text-white'
                    : 'border-[#CCC5B8] bg-white'
                }`}
              >
                {item.completed && <Check className="w-4 h-4 stroke-[3]" />}
              </div>

              <div className="min-w-0 flex-1">
                <p
                  className={`text-sm font-semibold transition-all ${
                    item.completed
                      ? 'line-through text-[#716C65]'
                      : 'text-[#242220]'
                  }`}
                >
                  {item.text}
                </p>
                <p className="text-[11px] text-[#716C65] mt-0.5">
                  {item.gentleNote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Quick Navigation to Complements */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          onClick={() => onNavigateToTab('rotina')}
          className="p-4 rounded-2xl bg-white border border-[#EAE5DC] text-left hover:border-[#DCD5C4] transition-all flex items-center justify-between min-h-[60px]"
        >
          <div>
            <p className="text-xs font-semibold text-[#466352]">Rotina Prática</p>
            <p className="text-sm font-bold text-[#242220]">Refeição rápida & Ruído calmante</p>
          </div>
          <ArrowRight className="w-4 h-4 text-[#716C65]" />
        </button>

        <button
          onClick={() => onNavigateToTab('guia')}
          className="p-4 rounded-2xl bg-white border border-[#EAE5DC] text-left hover:border-[#DCD5C4] transition-all flex items-center justify-between min-h-[60px]"
        >
          <div>
            <p className="text-xs font-semibold text-[#756AA3]">Guia do Cuidador</p>
            <p className="text-sm font-bold text-[#242220]">Direitos, BLW e Desenvolvimento</p>
          </div>
          <ArrowRight className="w-4 h-4 text-[#716C65]" />
        </button>
      </section>
    </div>
  );
};
