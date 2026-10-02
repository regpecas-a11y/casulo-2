import React from 'react';
import { Sparkles, Users, Clock, BookOpen } from 'lucide-react';
import { NavigationTab } from '../../types/casulo';

interface BottomNavProps {
  activeTab: NavigationTab;
  onTabChange: (tab: NavigationTab) => void;
  pendingRequestsCount: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onTabChange,
  pendingRequestsCount,
}) => {
  const tabs = [
    {
      id: 'hoje' as NavigationTab,
      label: 'Hoje',
      icon: Sparkles,
      badge: 0,
    },
    {
      id: 'rede' as NavigationTab,
      label: 'Rede',
      icon: Users,
      badge: pendingRequestsCount,
    },
    {
      id: 'rotina' as NavigationTab,
      label: 'Rotina',
      icon: Clock,
      badge: 0,
    },
    {
      id: 'guia' as NavigationTab,
      label: 'Guia',
      icon: BookOpen,
      badge: 0,
    },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#EAE5DC] pb-[env(safe-area-inset-bottom,0px)]"
      role="navigation"
      aria-label="Navegação Principal do Aplicativo"
    >
      <div className="max-w-md mx-auto grid grid-cols-4 items-center h-16 px-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative flex flex-col items-center justify-center h-full min-h-[48px] py-1.5 rounded-xl transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#466352] ${
                isActive
                  ? 'text-[#2C4A35] font-semibold'
                  : 'text-[#716C65] hover:text-[#242220] font-medium'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              {/* Icon Container with subtle active pill */}
              <div
                className={`relative w-10 h-7 flex items-center justify-center rounded-full transition-colors ${
                  isActive ? 'bg-[#E2EBE4]' : 'bg-transparent'
                }`}
              >
                <Icon
                  className={`w-5 h-5 transition-transform ${
                    isActive ? 'scale-105 stroke-[2.3]' : 'stroke-[1.8]'
                  }`}
                  aria-hidden="true"
                />

                {/* Badge for active help requests in the network */}
                {tab.badge > 0 && (
                  <span
                    className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#C8684A] text-white text-[10px] font-bold flex items-center justify-center"
                    aria-label={`${tab.badge} pedido aguardando`}
                  >
                    {tab.badge}
                  </span>
                )}
              </div>

              {/* Tab Label */}
              <span className="text-[11px] leading-tight tracking-tight mt-0.5 whitespace-nowrap">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
