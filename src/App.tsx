import React, { useState, useEffect } from 'react';
import { NavigationTab, WellBeingState, HelpRequest, TrustedPerson, DailyItem, GroceryItem } from './types/casulo';
import {
  INITIAL_TRUSTED_PEOPLE,
  INITIAL_HELP_REQUESTS,
  INITIAL_DAILY_ITEMS,
  INITIAL_GROCERY_ITEMS,
} from './data/mockCasuloData';
import { Header } from './components/casulo/Header';
import { BottomNav } from './components/casulo/BottomNav';
import { TodayScreen } from './components/casulo/TodayScreen';
import { NetworkScreen } from './components/casulo/NetworkScreen';
import { RoutineScreen } from './components/casulo/RoutineScreen';
import { GuideScreen } from './components/casulo/GuideScreen';
import { HelpRequestModal } from './components/casulo/HelpRequestModal';
import { ToastNotification, ToastData } from './components/casulo/ToastNotification';
import { PrivacyNoticeModal } from './components/casulo/PrivacyNoticeModal';
import { startAmbientSound, stopAmbientSound } from './utils/audioSynth';

const App: React.FC = () => {
  // Navigation & Viewport State
  const [activeTab, setActiveTab] = useState<NavigationTab>('hoje');
  const [isMobileFrame, setIsMobileFrame] = useState(false);

  // Business State (Local and temporary)
  const [wellBeing, setWellBeing] = useState<WellBeingState>(null);
  const [trustedPeople, setTrustedPeople] = useState<TrustedPerson[]>(INITIAL_TRUSTED_PEOPLE);
  const [helpRequests, setHelpRequests] = useState<HelpRequest[]>(INITIAL_HELP_REQUESTS);
  const [dailyItems, setDailyItems] = useState<DailyItem[]>(INITIAL_DAILY_ITEMS);
  const [groceryItems, setGroceryItems] = useState<GroceryItem[]>(INITIAL_GROCERY_ITEMS);

  // Ambient Sound State
  const [isPlayingSound, setIsPlayingSound] = useState(false);

  // Modals & Feedback
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [selectedPersonForHelp, setSelectedPersonForHelp] = useState<string | undefined>(undefined);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [toast, setToast] = useState<ToastData | null>(null);

  const showToast = (title: string, message?: string, type: 'success' | 'info' | 'warning' = 'success') => {
    setToast({
      id: Date.now().toString(),
      title,
      message,
      type,
    });
    setTimeout(() => {
      setToast((curr) => (curr?.title === title ? null : curr));
    }, 4000);
  };

  // Sound Handler
  const handleTogglePlaySound = (preset: 'chuva' | 'rosa' | 'brisa' | 'mar') => {
    if (isPlayingSound) {
      stopAmbientSound();
      setIsPlayingSound(false);
      showToast('Player pausado', 'O som calmante foi interrompido.', 'info');
    } else {
      startAmbientSound(preset, 0.25);
      setIsPlayingSound(true);
      showToast(
        'Som calmante ativado',
        `Tocando ${preset === 'chuva' ? 'chuva suave' : preset === 'brisa' ? 'brisa na janela' : preset === 'mar' ? 'mar calmo' : 'ruído rosa'}. Use com cuidado e em volume suave.`,
        'success'
      );
    }
  };

  // Clean up sound on unmount
  useEffect(() => {
    return () => {
      stopAmbientSound();
    };
  }, []);

  // Help Request Handlers
  const handleCreateHelpRequest = (newReq: Omit<HelpRequest, 'id' | 'createdAt'>) => {
    const created: HelpRequest = {
      ...newReq,
      id: `hr-${Date.now()}`,
      createdAt: 'Agora mesmo',
    };

    setHelpRequests([created, ...helpRequests]);
    showToast(
      'Pedido enviado com sucesso!',
      `Seu pedido foi registrado para ${newReq.targetPersonName || 'o círculo'}. Toque em "Simular aceite" para testar a resposta.`,
      'success'
    );
  };

  const handleSimulateAccept = (requestId: string) => {
    setHelpRequests((prev) =>
      prev.map((req) => {
        if (req.id !== requestId) return req;

        const personName = req.targetPersonName || 'Tia Clara';
        const responseMessage =
          req.category === 'refeicao'
            ? 'Pode deixar comigo! Estou levando o almoço quentinho para as crianças às 12h30.'
            : req.category === 'descanso'
            ? 'Mari, chego em 20 minutos para ficar com o Theo e a Maya na sala. Deita e descansa!'
            : 'Já anotei aqui e resolvo isso para você ainda hoje!';

        return {
          ...req,
          status: 'aceito',
          acceptedBy: {
            name: personName,
            message: responseMessage,
            acceptedAt: 'Agora mesmo',
          },
        };
      })
    );

    showToast(
      'Ajuda combinada!',
      'Um membro do seu círculo aceitou ajudar. O status foi atualizado para "Ajuda combinada".',
      'success'
    );
  };

  const handleCompleteRequest = (requestId: string) => {
    setHelpRequests((prev) =>
      prev.map((req) => (req.id === requestId ? { ...req, status: 'concluido' } : req))
    );
    showToast('Apoio concluído!', 'Obrigado por compartilhar o cuidado. Uma coisa de cada vez.', 'info');
  };

  const handleOpenHelpModalWithPerson = (personId: string) => {
    setSelectedPersonForHelp(personId);
    setIsHelpModalOpen(true);
  };

  // Daily Items Handlers
  const handleToggleDailyItem = (id: string) => {
    setDailyItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        const nextState = !item.completed;
        if (nextState) {
          showToast('Um respiro para você!', 'Sem cobranças. O que der para fazer hoje foi ótimo.', 'success');
        }
        return { ...item, completed: nextState };
      })
    );
  };

  // Grocery Handlers
  const handleToggleGroceryItem = (id: string) => {
    setGroceryItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const handleAddGroceryItem = (name: string, category = 'Geral') => {
    const newItem: GroceryItem = {
      id: `g-${Date.now()}`,
      name,
      category,
      checked: false,
    };
    setGroceryItems([newItem, ...groceryItems]);
    showToast('Item adicionado', `"${name}" foi incluído na lista de compras.`, 'success');
  };

  const handleRemoveGroceryItem = (id: string) => {
    setGroceryItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleAddRecipeIngredientsToGroceries = (ingredients: string[]) => {
    const newItems: GroceryItem[] = ingredients.map((ing, idx) => ({
      id: `g-recipe-${Date.now()}-${idx}`,
      name: ing,
      category: 'Ingredientes da Refeição Rápida',
      checked: false,
    }));
    setGroceryItems([...newItems, ...groceryItems]);
    showToast(
      'Ingredientes adicionados!',
      `${ingredients.length} itens do macarrão de panela única foram adicionados à sua lista de compras.`,
      'success'
    );
  };

  // Count pending requests for bottom nav badge
  const pendingRequestsCount = helpRequests.filter((r) => r.status === 'aguardando').length;

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#242220] flex flex-col font-sans selection:bg-[#E8EFE9] selection:text-[#2C4A35]">
      {/* Toast Notification */}
      <ToastNotification toast={toast} onDismiss={() => setToast(null)} />

      {/* Main Container: Adaptable between smartphone preview and wide view */}
      <div
        className={`mx-auto w-full transition-all duration-300 flex-1 flex flex-col ${
          isMobileFrame
            ? 'max-w-[420px] my-0 sm:my-6 sm:rounded-[40px] sm:shadow-2xl sm:border-[8px] sm:border-[#2C2926] bg-[#F7F5F0] overflow-hidden min-h-[844px]'
            : 'max-w-2xl'
        }`}
      >
        {/* Top Header */}
        <Header
          isMobileFrame={isMobileFrame}
          onToggleFrame={() => setIsMobileFrame(!isMobileFrame)}
          isPlayingSound={isPlayingSound}
          onToggleSound={() => handleTogglePlaySound('rosa')}
          onOpenPrivacyNotice={() => setIsPrivacyModalOpen(true)}
        />

        {/* Content View according to active tab */}
        <main className="flex-1 px-4 pt-5 pb-8 overflow-y-auto">
          {activeTab === 'hoje' && (
            <TodayScreen
              wellBeing={wellBeing}
              onSelectWellBeing={(state) => setWellBeing(state)}
              onOpenHelpModal={() => {
                setSelectedPersonForHelp(undefined);
                setIsHelpModalOpen(true);
              }}
              dailyItems={dailyItems}
              onToggleDailyItem={handleToggleDailyItem}
              helpRequests={helpRequests}
              onSimulateAccept={handleSimulateAccept}
              onCompleteRequest={handleCompleteRequest}
              onNavigateToTab={(tab) => setActiveTab(tab)}
            />
          )}

          {activeTab === 'rede' && (
            <NetworkScreen
              trustedPeople={trustedPeople}
              helpRequests={helpRequests}
              onOpenHelpModalWithPerson={handleOpenHelpModalWithPerson}
              onSimulateAccept={handleSimulateAccept}
              onCompleteRequest={handleCompleteRequest}
            />
          )}

          {activeTab === 'rotina' && (
            <RoutineScreen
              groceryItems={groceryItems}
              onToggleGroceryItem={handleToggleGroceryItem}
              onAddGroceryItem={handleAddGroceryItem}
              onRemoveGroceryItem={handleRemoveGroceryItem}
              onAddRecipeIngredientsToGroceries={handleAddRecipeIngredientsToGroceries}
              isPlayingSound={isPlayingSound}
              onTogglePlaySound={handleTogglePlaySound}
            />
          )}

          {activeTab === 'guia' && <GuideScreen />}
        </main>

        {/* Bottom Navigation (Fixed 4 Tabs) */}
        <BottomNav
          activeTab={activeTab}
          onTabChange={(tab) => {
            setActiveTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          pendingRequestsCount={pendingRequestsCount}
        />
      </div>

      {/* "Pedir Ajuda" Modal Flow */}
      <HelpRequestModal
        isOpen={isHelpModalOpen}
        onClose={() => setIsHelpModalOpen(false)}
        trustedPeople={
          selectedPersonForHelp
            ? trustedPeople.filter((p) => p.id === selectedPersonForHelp)
            : trustedPeople
        }
        onSubmitRequest={handleCreateHelpRequest}
      />

      {/* Privacy & Safe Prototype Notice Modal */}
      <PrivacyNoticeModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </div>
  );
};

export default App;
