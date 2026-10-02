export type NavigationTab = 'hoje' | 'rede' | 'rotina' | 'guia';

export type WellBeingState = 'pausa' | 'limite' | 'bem' | null;

export type HelpRequestStatus = 'aguardando' | 'aceito' | 'concluido';

export interface TrustedPerson {
  id: string;
  name: string;
  relation: string;
  initials: string;
  availability: string;
  avatarColor: string;
  isAvailableToday: boolean;
}

export interface HelpRequest {
  id: string;
  title: string;
  message?: string;
  createdAt: string;
  status: HelpRequestStatus;
  targetPersonId?: string;
  targetPersonName?: string;
  acceptedBy?: {
    name: string;
    message: string;
    acceptedAt: string;
  };
  category: 'descanso' | 'refeicao' | 'tarefa' | 'personalizado';
}

export interface DailyItem {
  id: string;
  text: string;
  completed: boolean;
  gentleNote: string;
}

export interface GroceryItem {
  id: string;
  name: string;
  category: string;
  checked: boolean;
}

export interface GuideArticle {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  readTime: string;
  summary: string;
  content: {
    heading: string;
    paragraphs: string[];
    tips?: string[];
  }[];
  source: string;
  reviewerSpace: string;
  updatedAt: string;
}
