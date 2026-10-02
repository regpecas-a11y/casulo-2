
export enum PhaseStatus {
  LOCKED = 'LOCKED',
  CURRENT = 'CURRENT',
  COMPLETED = 'COMPLETED',
  PREMIUM = 'PREMIUM'
}

export type FoodCategory = 'FRUTAS' | 'VEGETAIS' | 'PROTEINAS' | 'GRÃOS';
export type ShoppingCategory = 'MERCADO' | 'CASA' | 'OUTROS' | 'HISTÓRICO';

// --- SISTEMA DE DIÁRIO ---

export interface SleepSession {
  id: string;
  start: string;
  end: string;
  durationMinutes: number;
  location: string;
}

export interface FeedingEntry {
  type: 'breast' | 'bottle' | 'solid';
  time: string;
  side?: 'L' | 'R' | 'both';
  duration?: number;
  amount?: number; // ml or description
  items?: string[];
  acceptance?: 'loved' | 'liked' | 'neutral' | 'rejected';
  isNewFood?: boolean;
}

export interface DiaperChange {
  id: string;
  time: string;
  type: 'pee' | 'poo' | 'both';
  consistency?: 'normal' | 'soft' | 'hard' | 'liquid';
  color?: string;
  rash?: 'none' | 'light' | 'medium' | 'severe';
}

export interface Medication {
  id: string;
  name: string;
  time: string;
  dose: string;
  taken: boolean;
}

export interface DiaryEntry {
  date: string; // YYYY-MM-DD
  sleep: {
    bedtime: string;
    wakeTime: string;
    quality: number; // 1-5
    nightWakes: string[];
    naps: SleepSession[];
    notes: string;
  };
  feeding: FeedingEntry[];
  hygiene: {
    changes: DiaperChange[];
    bathTime: string;
    bathTemp: string;
    massage: boolean;
    oralHygiene: { morning: boolean; night: boolean; tongue: boolean };
    notes: string;
  };
  health: {
    temp: { value: string; time: string; location: string };
    meds: Medication[];
    vaccines: { name: string; local: string; time: string; reaction: string }[];
    consultation?: { specialty: string; time: string; local: string; reason: string; prescription: string; returnDate: string };
    symptoms: string[];
    accident?: { type: string; bodyPart: string; time: string; care: string; severity: string; doctorVisit: boolean };
    notes: string;
  };
  school: {
    attended: boolean;
    entry: string;
    exit: string;
    activities: string;
    homework: { subject: string; done: 'yes' | 'no' | 'partial'; time: number; difficulty: string };
    notice?: { subject: string; content: string; needsResponse: boolean; deadline: string };
    behavior: { mood: string; social: string; attention: string; teacherNote: string };
    media: string[]; // IDs/URLs
  };
  activities: {
    physical: { type: string; duration: number; location: string; liked: boolean };
    creative: { type: string; duration: number; photo: string | null };
    reading: { titles: string[]; duration: number; liked: boolean };
    screen: { tv: number; mobile: number; goal: number };
    milestone?: { title: string; time: string; photo: string | null; description: string };
    highlight: string;
  };
  mood: {
    general: string;
    bestMoment: { time: string; description: string };
    difficultMoment: { time: string; description: string; solution: string };
    tantrums: number;
    communication: { words: string[]; phrases: string[]; music: string; question: string };
  };
  shopping: {
    supermarket: string[];
    pharmacy: string[];
    clothing: string[];
    stationery: string[];
    reminders: string[];
    futureCommitments: { date: string; time: string; what: string }[];
  };
  parentNotes: {
    text: string;
    photos: string[];
    tags: string[];
    reflection: string;
    dayRating: number;
    gratitude: string;
  };
  finance?: {
    transactions: Transaction[];
    milestones: string[];
  };
  kitchen?: {
    cookedRecipes: string[];
    mealPlan: string[];
  };
  journeyAchievements?: {
    tasks: string[];
    missions: string[];
    photos: string[];
    games: { title: string; detail?: string; timestamp: string; note?: string }[];
    books: { title: string; timestamp: string; note?: string }[];
    activities: { title: string; timestamp: string; note?: string }[];
    familyTalks: { title: string; timestamp: string; note?: string }[];
  };
}

// --- SISTEMA DE JORNADA GAMIFICADA ---
export interface KnowledgePillar {
  title: string;
  content: string;
}

export interface DailyMission {
  id: string;
  title: string;
  description: string;
  xpReward: number;
}

export interface CameraTrigger {
  id: string;
  title: string;
  description: string;
  blocked: boolean;
}

export interface JourneyTask {
  id: string;
  title: string;
  xpReward: number;
  completed: boolean;
  category: 'CHECKLIST' | 'MISSAO' | 'MARCO';
}

export interface JourneyModule {
  id: string;
  title: string;
  description: string;
  tasks: JourneyTask[];
}

export interface MiniGame {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface JourneyStep {
  id: string;
  dayId: number; // 0 a 2920
  title: string;
  ageRange: string;
  description: string;
  icon: string;
  status: PhaseStatus;
  isPremium: boolean;
  color: string;
  minYears: number; 
  modules: JourneyModule[];
  badges: string[];
  knowledgePillar?: KnowledgePillar;
  mission?: DailyMission;
  cameraTrigger?: CameraTrigger;
  miniGames?: MiniGame[];
  objectives?: string[];
}

export interface Era {
  id: string;
  title: string;
  description: string;
  color: string;
  steps: (string | JourneyStep)[];
}

// --- TIPOS FINANCEIROS ---
export type TransactionType = 'INCOME' | 'EXPENSE';
export type FinanceCategory = 'Alimentação' | 'Transporte' | 'Lazer' | 'Moradia' | 'Saúde' | 'Educação' | 'Outros';

export interface Transaction {
  id: string;
  type: TransactionType;
  category: FinanceCategory;
  amount: number;
  description: string;
  date: string;
}

export interface FinanceLimit {
  category: FinanceCategory | 'TOTAL';
  value: number;
}

export interface FinanceGoal {
  id: string;
  title: string;
  targetValue: number;
  currentValue: number;
  deadline: string;
  icon: string;
}

export interface FinanceEducationProgress {
  lessonId: string;
  completed: boolean;
}

export interface FinanceStats {
  xp: number;
  level: number;
  badges: string[];
  streak: number;
  lastActiveDate: string;
}

export interface FoodItem {
  id: string;
  name: string;
  category: FoodCategory;
  icon: string;
  blwInstructions: string;
  vitamins: string;
  seasonality: string;
  benefits?: string;
  airfryerRecipe?: string;
}

export interface AlarmData {
  time: string;
  enabled: boolean;
  notes: string[];
  customLabel?: string;
  repeatDays?: string[];
  sound?: string;
  snoozeEnabled?: boolean;
  snoozeDuration?: number;
}

export interface ShoppingItem {
  id: string;
  name: string;
  price: number;
  completed: boolean;
  category: Exclude<ShoppingCategory, 'HISTÓRICO'>;
}

export interface ShoppingHistoryEntry {
  id: string;
  date: string;
  total: number;
  items: ShoppingItem[];
}

export interface NoteDocument {
  id: string;
  text: string;
  date: string;
}

export interface AgendaEvent {
  id: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  title: string;
  type: 'SCHOOL' | 'MEDICAL' | 'PRESENTATION' | 'OTHER';
  notes: string;
  reminderEnabled: boolean;
}

export interface EducationalBook {
  id: string;
  title: string;
  author: string;
  description: string;
  coverUrl?: string;
  type: 'pedagogical' | 'literary';
}

export interface EducationalActivity {
  id: string;
  title: string;
  description: string;
  type: 'motor' | 'cognitive';
  icon: string;
  materials?: string[];
  howToDo?: string[];
}

export interface FamilyTalk {
  id: string;
  title: string;
  description: string;
  dynamic?: string;
}

export interface EducationalContent {
  id: string;
  ageRange: string;
  minYears: number;
  maxYears: number;
  books: EducationalBook[];
  activities: EducationalActivity[];
  familyTalks: FamilyTalk[];
}

export interface ChildProfile {
  id: string;
  name: string;
  birthDate: string;
  photo: string | null;
  gender: 'boy' | 'girl' | null;
  birthReport?: string;
  generalNotesList?: NoteDocument[];
  shoppingList?: ShoppingItem[];
  shoppingHistory?: ShoppingHistoryEntry[];
  shoppingNotes?: string;
  completedTasks?: string[]; 
  completedMissions?: string[];
  completedPhotos?: string[];
  milestonePhotos?: Record<string, string>; // stepId -> base64/URL
  sleepRecords?: { date: string; type: 'nap' | 'wake'; time: string }[];
  palateMap?: string[]; // list of food names tried
  xp?: number;
  diaryEntries?: Record<string, DiaryEntry>;
  mealPlan?: Record<string, string[]>; // date -> recipeIds
  agendaEvents?: AgendaEvent[];
  alarms?: {
    nap?: AlarmData;
    meals?: AlarmData;
    medical?: AlarmData;
    meds?: AlarmData;
  };
  finance?: {
    transactions: Transaction[];
    limits: FinanceLimit[];
    goals: FinanceGoal[];
    stats: FinanceStats;
    eduProgress: FinanceEducationProgress[];
  };
  favorites?: {
    books: string[];
    activities: string[];
  };
  completedBooks?: string[];
  completedActivities?: string[];
  completedFamilyTalks?: string[];
  completedObjectives?: string[];
  completedKnowledge?: string[];
  familyTalkResponses?: Record<string, string>; // talkId -> response text
  onboardingDone?: boolean;
  currentStreak?: number;
  longestStreak?: number;
  lastDiaryDate?: string; // YYYY-MM-DD
  subscription?: {
    status: 'trial' | 'premium' | 'expired';
    startDate: string; // ISO date
    plan?: 'monthly' | 'annual';
  };
  soundEnabled?: boolean;
  isPremium?: boolean;
  email?: string;
  communityName?: string;
  childNamePrivacy?: 'full' | 'first' | 'initial' | 'hidden';
  parentPhoto?: string | null;
  parentPhotoPrivacy?: 'public' | 'hidden';
  parentNamePrivacy?: 'public' | 'hidden';
  parentRole?: 'mother' | 'father';
  friends?: string[];
  blockedUsers?: string[];
  presence?: {
    isOnline: boolean;
    lastSeen: string;
    hideStatus: boolean;
  };
  birthPlanOptions?: any;
  contractionLogs?: ContractionLog[];
}

export interface ContractionLog {
  id: string;
  startTime: string; // ISO string
  endTime: string; // ISO string
  durationSeconds: number; // Duracao da contracao em segundos
  intervalSeconds: number | null; // Intervalo em relação à contração anterior (em segundos)
  intensity: 'mild' | 'moderate' | 'strong';
  notes?: string;
}

// --- SOCIAL FEATURES ---
export interface FriendRequest {
  id: string;
  fromId: string;
  fromName: string;
  fromPhoto?: string | null;
  toId: string;
  status: 'pending' | 'accepted' | 'declined';
  createdAt: any;
}

export interface Chat {
  id: string;
  participants: string[];
  lastMessage?: string;
  lastMessageTime?: any;
  unreadCount?: Record<string, number>;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  content: string;
  timestamp: any;
  status: 'sent' | 'delivered' | 'read';
}

export interface Notification {
  id: string;
  userId: string;
  type: 'like' | 'comment' | 'friend_request' | 'friend_accept';
  fromId: string;
  fromName: string;
  relatedId?: string;
  read: boolean;
  createdAt: any;
}

// --- CASULO COMMUNITY ---
export interface CommunityPost {
  id: string;
  type: "question" | "moment" | "tip";
  authorId: string;
  authorName: string;
  authorAge: string;
  content: string;
  imageUrl?: string | null;
  likes: number;
  likedBy: string[];
  comments: number;
  createdAt: any; // Firestore Timestamp
  reported: boolean;
  era: string;
  childNamePrivacy?: 'full' | 'first' | 'initial' | 'hidden';
  childDisplayName?: string;
  authorPhoto?: string | null;
  authorPhotoPrivacy?: 'public' | 'hidden';
}

export interface CommunityComment {
  id: string;
  authorId: string;
  authorName: string;
  authorAge: string;
  authorPhoto?: string | null;
  authorPhotoPrivacy?: 'public' | 'hidden';
  content: string;
  createdAt: any; // Firestore Timestamp
}

export interface Activity {
  id: string;
  title: string;
  icon: string;
  xp: number;
  description: string;
  details?: string;
  materials?: string[];
  suggestions?: Suggestion[];
}

export interface Suggestion {
  label: string;
  detail: string;
}

export interface RecipeIngredient {
  name: string;
  baseAmount: number;
  unit: string;
  householdMeasure: string;
}

export interface Recipe {
  id: string;
  name: string;
  age: string;
  ingredients: string[];
  ingredientsDetailed: RecipeIngredient[];
  instructions: string;
  instructionsDetailed: {
    preparacao: string[];
    cozimento: string[];
    finalizacao: string[];
  };
  image: string;
  prepTime: string;
  storageInfo: string;
  freezingTips: string;
  canFreeze: boolean;
  category: 'CAFÉ DA MANHÃ' | 'ALMOÇO' | 'CAFÉ DA TARDE' | 'JANTAR' | 'SOBREMESA';
  isPremium?: boolean;
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
  };
}

export interface MealSuggestion {
  label: string;
  val: string;
  time: string; 
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  xpReward: number;
  type: 'DAILY' | 'WEEKLY';
  progress: number;
  goal: number;
  icon: string;
  completed: boolean;
}
