import React, { useState } from 'react';
import {
  BookOpen,
  ArrowRight,
  ShieldAlert,
  Calendar,
  UserCheck,
  FileText,
  ChevronLeft,
  Share2,
  Sparkles,
  Heart,
  Baby,
  Scale,
  Smile,
} from 'lucide-react';
import { GUIDE_ARTICLES } from '../../data/mockCasuloData';
import { GuideArticle } from '../../types/casulo';

export const GuideScreen: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<GuideArticle | null>(null);

  const articleIcons: Record<string, React.ElementType> = {
    desenvolvimento: Baby,
    'blw-alimentacao': Heart,
    'bem-estar-cuidador': Smile,
    'direitos-familias': Scale,
  };

  return (
    <div className="space-y-6 pb-24">
      {/* 1. Header */}
      <section className="bg-white rounded-3xl p-5 border border-[#EAE5DC] shadow-sm">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#756AA3] bg-[#F2EFF9] px-2.5 py-0.5 rounded-md inline-block mb-1.5">
              Conhecimento & Acolhimento
            </span>
            <h1 className="font-display font-bold text-2xl text-[#242220] tracking-tight">
              Guia da Família
            </h1>
            <p className="text-xs text-[#716C65] mt-1 leading-relaxed max-w-md">
              Conteúdos práticos, livres de julgamento e fundamentados para apoiar suas escolhas do dia a dia.
            </p>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-[#F2EFF9] text-[#55477E] flex items-center justify-center shrink-0">
            <BookOpen className="w-5 h-5 text-[#756AA3]" />
          </div>
        </div>
      </section>

      {/* 2. Grid of 4 Thematic Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {GUIDE_ARTICLES.map((art) => {
          const Icon = articleIcons[art.id] || BookOpen;

          return (
            <div
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="p-5 rounded-3xl bg-white border border-[#EAE5DC] hover:border-[#466352] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group min-h-[170px]"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  setSelectedArticle(art);
                }
              }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] text-[#466352] flex items-center justify-center group-hover:bg-[#E8EFE9] transition-colors">
                    <Icon className="w-4 h-4 text-[#466352]" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#716C65]">
                    {art.readTime}
                  </span>
                </div>

                <span className="text-[11px] font-semibold text-[#756AA3] tracking-wide">
                  {art.tag}
                </span>
                <h2 className="font-display font-bold text-base text-[#242220] group-hover:text-[#466352] transition-colors leading-snug mt-0.5">
                  {art.title}
                </h2>
                <p className="text-xs text-[#5F5B56] mt-1.5 line-clamp-2 leading-relaxed">
                  {art.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#EAE5DC] flex items-center justify-between text-xs font-semibold text-[#466352]">
                <span>Ler conteúdo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. Mandatory General Disclaimer for Guide Topics */}
      <section className="p-4 rounded-3xl bg-[#FAF8F5] border border-[#EAE5DC] flex items-start gap-3 text-xs text-[#5F5B56]">
        <ShieldAlert className="w-5 h-5 text-[#C8684A] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-semibold text-[#242220]">
            Aviso ético e institucional obrigatório:
          </p>
          <p className="leading-relaxed">
            “Conteúdo educativo demonstrativo, pendente de revisão profissional. Não substitui orientação individual.”
          </p>
          <p className="text-[11px] text-[#716C65]">
            Em caso de dúvidas sobre sintomas, dosagens ou questões clínicas específicas dos seus filhos, consulte sempre um médico pediatra ou serviço de saúde credenciado.
          </p>
        </div>
      </section>

      {/* 4. Full Article Modal / Drawer */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/45 backdrop-blur-sm transition-opacity"
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-title"
        >
          <div className="w-full max-w-2xl bg-[#FAF8F5] rounded-t-3xl sm:rounded-3xl border border-[#EAE5DC] shadow-2xl overflow-hidden max-h-[92vh] flex flex-col animate-slide-up">
            {/* Modal Header */}
            <div className="px-5 py-3.5 border-b border-[#EAE5DC] bg-white flex items-center justify-between sticky top-0 z-10">
              <button
                onClick={() => setSelectedArticle(null)}
                className="flex items-center gap-1.5 text-xs font-semibold text-[#466352] hover:underline min-h-[38px] px-1"
                aria-label="Voltar para a lista do Guia"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Voltar ao Guia</span>
              </button>

              <span className="text-xs font-semibold text-[#716C65]">
                {selectedArticle.readTime}
              </span>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Mandatory Legal & Health Notice Box */}
              <div className="p-4 bg-[#FAF0EC] border border-[#E8C5B8] rounded-2xl flex items-start gap-3 text-[#9A462C]">
                <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider">
                    Aviso Legal & Regulatório
                  </p>
                  <p className="text-xs leading-relaxed mt-0.5">
                    “Conteúdo educativo demonstrativo, pendente de revisão profissional. Não substitui orientação individual.”
                  </p>
                </div>
              </div>

              {/* Title & Tag */}
              <div>
                <span className="text-xs font-semibold text-[#756AA3] uppercase tracking-wider">
                  {selectedArticle.tag}
                </span>
                <h2 id="article-title" className="font-display font-bold text-2xl text-[#242220] mt-1 leading-snug">
                  {selectedArticle.title}
                </h2>
                <p className="text-sm text-[#5F5B56] mt-1.5 leading-relaxed">
                  {selectedArticle.subtitle}
                </p>
              </div>

              {/* Sections Content */}
              <div className="space-y-6 text-sm text-[#242220] leading-relaxed">
                {selectedArticle.content.map((sec, idx) => (
                  <div key={idx} className="space-y-3">
                    <h3 className="font-display font-bold text-base text-[#242220] border-l-3 border-[#466352] pl-3">
                      {sec.heading}
                    </h3>
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-xs sm:text-sm text-[#4A4641] leading-relaxed">
                        {p}
                      </p>
                    ))}

                    {sec.tips && sec.tips.length > 0 && (
                      <div className="p-4 rounded-2xl bg-white border border-[#EAE5DC] space-y-2 mt-3">
                        <p className="text-xs font-semibold text-[#466352] uppercase tracking-wide">
                          Pontos práticos essenciais:
                        </p>
                        <ul className="space-y-2 text-xs text-[#5F5B56]">
                          {sec.tips.map((tip, tIdx) => (
                            <li key={tIdx} className="flex items-start gap-2">
                              <span className="text-[#C8684A] font-bold">•</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Structured Metadata Box (Source, Reviewer Space, Date) */}
              <div className="mt-8 p-4 rounded-2xl bg-white border border-[#EAE5DC] space-y-2.5 text-xs text-[#5F5B56]">
                <div className="flex items-start gap-2">
                  <FileText className="w-4 h-4 text-[#716C65] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#242220]">Fonte consultada:</strong>{' '}
                    <span>{selectedArticle.source}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <UserCheck className="w-4 h-4 text-[#466352] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#242220]">Autor / Revisor Técnico:</strong>{' '}
                    <span className="italic">{selectedArticle.reviewerSpace}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#716C65] shrink-0" />
                  <div>
                    <strong className="text-[#242220]">Última atualização:</strong>{' '}
                    <span>{selectedArticle.updatedAt}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Close Action */}
              <div className="pt-2">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="w-full py-3 rounded-xl bg-[#466352] text-white text-sm font-semibold hover:bg-[#385142] min-h-[48px]"
                >
                  Concluir leitura
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
