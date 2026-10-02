import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export interface ToastData {
  id: string;
  type: 'success' | 'info' | 'warning';
  title: string;
  message?: string;
}

interface ToastNotificationProps {
  toast: ToastData | null;
  onDismiss: () => void;
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({ toast, onDismiss }) => {
  if (!toast) return null;

  const bgStyles = {
    success: 'bg-[#E8EFE9] border-[#BDD3C2] text-[#2C4A35]',
    info: 'bg-[#F2EFF9] border-[#D4CBEA] text-[#55477E]',
    warning: 'bg-[#FAF0EC] border-[#E8C5B8] text-[#9A462C]',
  }[toast.type];

  const Icon = {
    success: CheckCircle2,
    info: Info,
    warning: AlertCircle,
  }[toast.type];

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed top-16 left-4 right-4 z-50 flex justify-center pointer-events-none"
    >
      <div
        className={`pointer-events-auto max-w-md w-full p-3.5 rounded-2xl border shadow-lg flex items-start gap-3 transition-all transform animate-fade-in ${bgStyles}`}
      >
        <Icon className="w-5 h-5 shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold leading-tight">{toast.title}</p>
          {toast.message && (
            <p className="text-xs mt-0.5 opacity-90 leading-relaxed">{toast.message}</p>
          )}
        </div>
        <button
          onClick={onDismiss}
          className="p-1 -mr-1 -mt-1 rounded-lg opacity-70 hover:opacity-100 hover:bg-black/5 focus:outline-none"
          aria-label="Fechar notificação"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
