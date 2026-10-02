import React, { useState } from 'react';
import {
  Users,
  UserPlus,
  Shield,
  HeartHandshake,
  CheckCircle2,
  Clock,
  Sparkles,
  Copy,
  Check,
  X,
  Lock,
  ArrowRight,
  Eye,
  EyeOff,
} from 'lucide-react';
import { TrustedPerson, HelpRequest } from '../../types/casulo';

interface NetworkScreenProps {
  trustedPeople: TrustedPerson[];
  helpRequests: HelpRequest[];
  onOpenHelpModalWithPerson: (personId: string) => void;
  onSimulateAccept: (requestId: string) => void;
  onCompleteRequest: (requestId: string) => void;
}

export const NetworkScreen: React.FC<NetworkScreenProps> = ({
  trustedPeople,
  helpRequests,
  onOpenHelpModalWithPerson,
  onSimulateAccept,
  onCompleteRequest,
}) => {
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [showEmptyStateDemo, setShowEmptyStateDemo] = useState(false);

  const activeRequests = helpRequests.filter(
    (r) => r.status === 'aguardando' || r.status === 'aceito'
  );

  const currentDisplayPeople = showEmptyStateDemo ? [] : trustedPeople;

  const handleCopyInvite = () => {
    navigator.clipboard?.writeText?.('https://casulo.app/rede/convite-mariana-xyz');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="space-y-6 pb-24">
      {/* 1. Network Privacy Assurance Banner */}
      <section className="bg-white rounded-3xl p-5 border border-[#EAE5DC] shadow-sm">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#2C4A35] bg-[#E8EFE9] px-2.5 py-0.5 rounded-md w-fit">
              <Lock className="w-3.5 h-3.5" />
              <span>Círculo Fechado & Privado</span>
            </div>
            <h1 className="font-display font-bold text-2xl text-[#242220] tracking-tight">
              Sua Rede de Confiança
            </h1>
            <p className="text-xs text-[#716C65] leading-relaxed max-w-lg">
              Sem feed aberto, sem comparações de maternidade perfeita. Apenas pessoas queridas dispostas a ajudar na prática da rotina.
            </p>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-[#E8EFE9] text-[#2C4A35] flex items-center justify-center shrink-0">
            <Users className="w-5 h-5 text-[#466352]" />
          </div>
        </div>

        {/* Safe Protection Principles */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5F5B56]">
          <div className="flex items-center gap-2 p-2 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC]">
            <Shield className="w-4 h-4 text-[#466352] shrink-0" />
            <span>Fotos de crianças e prontuários nunca são expostos.</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC]">
            <HeartHandshake className="w-4 h-4 text-[#C8684A] shrink-0" />
            <span>Foco em apoio mútuo: refeições, caronas e pausas.</span>
          </div>
        </div>

        {/* Demo Controls: Toggle empty state demonstration */}
        <div className="mt-4 pt-3 border-t border-[#EAE5DC] flex items-center justify-between">
          <span className="text-[11px] text-[#716C65]">
            Testar experiência com rede vazia:
          </span>
          <button
            onClick={() => setShowEmptyStateDemo(!showEmptyStateDemo)}
            className="text-xs font-semibold text-[#466352] hover:underline flex items-center gap-1 min-h-[32px]"
          >
            {showEmptyStateDemo ? (
              <>
                <Eye className="w-3.5 h-3.5" />
                <span>Restaurar círculo demonstrativo</span>
              </>
            ) : (
              <>
                <EyeOff className="w-3.5 h-3.5" />
                <span>Simular estado sem pessoas</span>
              </>
            )}
          </button>
        </div>
      </section>

      {/* 2. Active Collaborative Requests in Network */}
      <section className="bg-white rounded-3xl p-5 border border-[#EAE5DC] shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="font-display font-semibold text-base text-[#242220]">
              Pedidos ativos no círculo
            </h2>
            <p className="text-xs text-[#716C65]">
              Coordenação de quem está ajudando no momento.
            </p>
          </div>
          <span className="text-xs font-bold text-[#466352] bg-[#E8EFE9] px-2 py-0.5 rounded-full">
            {activeRequests.length} ativo{activeRequests.length === 1 ? '' : 's'}
          </span>
        </div>

        {activeRequests.length === 0 ? (
          <div className="p-5 text-center rounded-2xl bg-[#FAF8F5] border border-dashed border-[#DCD5C4]">
            <p className="text-xs font-semibold text-[#5F5B56]">
              Nenhum pedido ativo no momento
            </p>
            <p className="text-[11px] text-[#716C65] mt-0.5">
              Tudo calmo na rotina familiar por hoje.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {activeRequests.map((req) => (
              <div
                key={req.id}
                className="p-4 rounded-2xl border border-[#EAE5DC] bg-[#FAF8F5] space-y-2.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                      req.status === 'aceito'
                        ? 'bg-[#E8EFE9] text-[#2C4A35] border border-[#BDD3C2]'
                        : 'bg-[#FAF0EC] text-[#9A462C] border border-[#E8C5B8]'
                    }`}
                  >
                    {req.status === 'aceito' ? (
                      <>
                        <CheckCircle2 className="w-3 h-3" />
                        Ajuda combinada
                      </>
                    ) : (
                      <>
                        <Clock className="w-3 h-3" />
                        Aguardando resposta
                      </>
                    )}
                  </span>
                  <span className="text-[11px] text-[#716C65]">{req.createdAt}</span>
                </div>

                <p className="text-sm font-semibold text-[#242220]">{req.title}</p>
                {req.message && (
                  <p className="text-xs text-[#5F5B56]">"{req.message}"</p>
                )}

                {req.acceptedBy && (
                  <div className="p-2.5 rounded-xl bg-white border border-[#BDD3C2] text-xs">
                    <p className="font-semibold text-[#2C4A35]">
                      {req.acceptedBy.name} aceitou ajudar:
                    </p>
                    <p className="text-[#5F5B56] mt-0.5 italic">
                      "{req.acceptedBy.message}"
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-between pt-2 border-t border-[#EAE5DC]">
                  <span className="text-[11px] text-[#716C65]">
                    Destinado a: <strong className="text-[#242220]">{req.targetPersonName}</strong>
                  </span>
                  {req.status === 'aguardando' && (
                    <button
                      onClick={() => onSimulateAccept(req.id)}
                      className="px-3 py-1.5 rounded-lg bg-[#466352] text-white text-xs font-semibold hover:bg-[#385142] flex items-center gap-1 min-h-[34px]"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Simular aceite</span>
                    </button>
                  )}
                  {req.status === 'aceito' && (
                    <button
                      onClick={() => onCompleteRequest(req.id)}
                      className="px-3 py-1.5 rounded-lg bg-white border border-[#EAE5DC] text-[#2C4A35] text-xs font-semibold hover:bg-[#E8EFE9] min-h-[34px]"
                    >
                      Concluir
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 3. Trusted Circle People List */}
      <section className="bg-white rounded-3xl p-5 border border-[#EAE5DC] shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-display font-semibold text-base text-[#242220]">
              Pessoas de confiança ({currentDisplayPeople.length})
            </h2>
            <p className="text-xs text-[#716C65]">
              Círculo com acesso aos seus pedidos de rotina.
            </p>
          </div>

          <button
            onClick={() => setShowInviteModal(true)}
            className="px-3.5 py-2 rounded-xl bg-[#466352] hover:bg-[#385142] text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm active:scale-[0.98] transition-all min-h-[44px]"
            aria-label="Convidar alguém para sua rede de confiança"
          >
            <UserPlus className="w-4 h-4" />
            <span>Convidar alguém</span>
          </button>
        </div>

        {/* Empty State vs List */}
        {currentDisplayPeople.length === 0 ? (
          <div className="p-8 text-center rounded-2xl bg-[#FAF8F5] border border-dashed border-[#DCD5C4] space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#E8EFE9] text-[#2C4A35] mx-auto flex items-center justify-center">
              <Users className="w-6 h-6 text-[#466352]" />
            </div>
            <h3 className="font-display font-bold text-base text-[#242220]">
              Você ainda não convidou ninguém para sua rede
            </h3>
            <p className="text-xs text-[#716C65] max-w-sm mx-auto leading-relaxed">
              Adicione pessoas queridas (avós, irmãos, tios, vizinhos de confiança ou amigos) para compartilhar o peso do dia a dia com tranquilidade.
            </p>
            <button
              onClick={() => setShowInviteModal(true)}
              className="mt-2 px-5 py-2.5 rounded-xl bg-[#466352] text-white text-xs font-semibold shadow-sm inline-flex items-center gap-2 min-h-[44px]"
            >
              <UserPlus className="w-4 h-4" />
              <span>Convidar a primeira pessoa</span>
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {currentDisplayPeople.map((person) => (
              <div
                key={person.id}
                className="p-4 rounded-2xl border border-[#EAE5DC] bg-[#FAF8F5] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-11 h-11 rounded-2xl font-bold text-sm flex items-center justify-center shrink-0 border ${person.avatarColor}`}
                  >
                    {person.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-display font-semibold text-sm text-[#242220]">
                        {person.name}
                      </h3>
                      <span className="text-[11px] text-[#716C65] bg-white border border-[#EAE5DC] px-2 py-0.5 rounded-md">
                        {person.relation}
                      </span>
                      {person.isAvailableToday && (
                        <span className="text-[10px] font-semibold text-[#2C4A35] bg-[#E8EFE9] px-2 py-0.5 rounded-full">
                          Disponível hoje
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#5F5B56] mt-1 leading-snug">
                      {person.availability}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onOpenHelpModalWithPerson(person.id)}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-white border border-[#EAE5DC] hover:border-[#466352] text-xs font-semibold text-[#2C4A35] hover:bg-[#E8EFE9] transition-colors shrink-0 flex items-center justify-center gap-1.5 min-h-[44px]"
                >
                  <HeartHandshake className="w-4 h-4 text-[#466352]" />
                  <span>Pedir para {person.name.split(' ')[0]}</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. Demonstrative Invite Modal */}
      {showInviteModal && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/45 backdrop-blur-sm transition-opacity"
          role="dialog"
          aria-modal="true"
          aria-labelledby="invite-title"
        >
          <div className="w-full max-w-md bg-[#FAF8F5] rounded-t-3xl sm:rounded-3xl border border-[#EAE5DC] shadow-2xl overflow-hidden p-6 space-y-5 animate-slide-up">
            <div className="flex items-center justify-between border-b border-[#EAE5DC] pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#E8EFE9] text-[#2C4A35] flex items-center justify-center">
                  <UserPlus className="w-5 h-5 text-[#466352]" />
                </div>
                <div>
                  <h3 id="invite-title" className="font-display font-bold text-base text-[#242220]">
                    Convidar para a Rede
                  </h3>
                  <p className="text-xs text-[#716C65]">
                    Círculo privado e seguro
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowInviteModal(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#716C65] hover:bg-[#F5F2EA]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3 bg-[#FAF0EC] border border-[#E8C5B8] rounded-2xl flex items-start gap-2.5 text-[#9A462C] text-xs leading-relaxed">
              <Sparkles className="w-4 h-4 shrink-0 mt-0.5" />
              <div>
                <strong>Demonstração do protótipo:</strong> O Casulo não acessa contatos do seu telefone nem redes sociais. O link abaixo é uma simulação segura.
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#5F5B56] mb-1.5">
                Link de convite privado demonstrativo:
              </label>
              <div className="flex items-center gap-2 p-2 bg-white rounded-xl border border-[#EAE5DC]">
                <input
                  type="text"
                  readOnly
                  value="https://casulo.app/rede/convite-mariana-xyz"
                  className="bg-transparent text-xs text-[#5F5B56] flex-1 outline-none font-mono"
                />
                <button
                  onClick={handleCopyInvite}
                  className="px-3 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#EAE5DC] text-xs font-semibold text-[#2C4A35] hover:bg-[#E8EFE9] flex items-center gap-1 min-h-[36px]"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#466352]" />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#716C65]" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-white border border-[#EAE5DC] text-xs text-[#5F5B56] space-y-1">
              <p className="font-semibold text-[#242220]">O que a pessoa convidada poderá ver?</p>
              <p>• Apenas pedidos práticos de ajuda que você enviar (ex: refeição, carona ou descanso).</p>
              <p>• Ela não tem acesso a registros de saúde, fotos ou rotinas íntimas das crianças.</p>
            </div>

            <button
              onClick={() => setShowInviteModal(false)}
              className="w-full py-3 rounded-xl bg-[#466352] text-white text-sm font-semibold hover:bg-[#385142] min-h-[48px]"
            >
              Entendido, fechar simulação
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
