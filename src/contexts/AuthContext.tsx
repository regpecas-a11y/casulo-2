
import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  onAuthStateChanged, 
  User, 
  signOut as firebaseSignOut,
  GoogleAuthProvider,
  signInWithPopup,
  OAuthProvider,
  signInAnonymously
} from 'firebase/auth';
import { auth } from '../lib/firebase';
import { getUserProfile, saveUserProfile } from '../services/firebaseService';
import { ChildProfile } from '../types';

interface AuthContextType {
  user: User | null;
  currentUserUid: string | null;
  profiles: ChildProfile[];
  activeProfileId: string | null;
  activeProfile: ChildProfile | null;
  loading: boolean;
  isAuthChecking: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithApple: () => Promise<void>;
  signOut: () => Promise<void>;
  setGuestMode: () => void;
  updateProfiles: (profiles: ChildProfile[]) => void;
  setActiveProfileId: (id: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [currentUserUid, setCurrentUserUid] = useState<string | null>(() => {
    try {
      return localStorage.getItem('casulo_v23_guest_uid') || null;
    } catch (e) {
      return null;
    }
  });
  const [profiles, setProfiles] = useState<ChildProfile[]>([]);
  const [activeProfileId, setActiveProfileIdState] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuthChecking, setIsAuthChecking] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);

  const activeProfile = profiles.find(p => p.id === activeProfileId) || profiles[0] || null;

  const defaultProfile: ChildProfile = { 
    id: '1', name: 'Meu Bebê', birthDate: new Date().toISOString().split('T')[0], photo: null, gender: 'boy', 
    xp: 0, completedMissions: [], completedPhotos: [], milestonePhotos: {},
    alarms: {
      nap: { time: '13:00', enabled: false, notes: [] },
      meals: { time: '12:00', enabled: false, notes: [] },
      meds: { time: '08:00', enabled: false, notes: [] }
    }, 
    generalNotesList: [], shoppingList: [], birthReport: '', shoppingNotes: '', completedTasks: [], diaryEntries: {}, agendaEvents: [],
    favorites: { books: [], activities: [] },
    subscription: {
      status: 'trial',
      startDate: new Date().toISOString()
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setIsAuthChecking(true);
      if (firebaseUser) {
        setUser(firebaseUser);
        setCurrentUserUid(firebaseUser.uid);
        localStorage.removeItem('casulo_v23_guest_uid');
        
        try {
          const profileData = await getUserProfile(firebaseUser.uid) as any;
          if (profileData && profileData.profiles && Array.isArray(profileData.profiles) && profileData.profiles.length > 0) {
            setProfiles(profileData.profiles);
            if (profileData.activeProfileId) {
              setActiveProfileIdState(profileData.activeProfileId);
            }
            setShowOnboarding(false);
          } else {
            // New user, no profiles in Firestore
            setProfiles([]);
            setShowOnboarding(true);
          }
        } catch (error) {
          console.error("Error fetching user profile:", error);
          setProfiles([]);
          setShowOnboarding(true);
        }
      } else {
        // Automatically sign in anonymously to satisfy Firestore security rules (request.auth != null)
        signInAnonymously(auth).catch(err => {
          console.warn("Anonymous auth skipped/failed:", err?.message || err);
        });

        setUser(null);
        const guestUid = localStorage.getItem('casulo_v23_guest_uid');
        if (guestUid === 'guest') {
          setCurrentUserUid('guest');
          // Load local profiles for guest
          const saved = localStorage.getItem('casulo_v23_profiles');
          if (saved) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length > 0) {
              setProfiles(parsed);
              const savedActiveId = localStorage.getItem('casulo_v23_active_id');
              setActiveProfileIdState(savedActiveId || parsed[0].id);
            } else {
              setProfiles([defaultProfile]);
              setActiveProfileIdState('1');
            }
          } else {
            setProfiles([defaultProfile]);
            setActiveProfileIdState('1');
          }
        } else {
          setCurrentUserUid(null);
          setProfiles([]);
        }
      }
      setIsAuthChecking(false);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result.user;
  };

  const signInWithApple = async () => {
    const provider = new OAuthProvider('apple.com');
    const result = await signInWithPopup(auth, provider);
    return result.user;
  };

  const signOut = async () => {
    await firebaseSignOut(auth);
    localStorage.removeItem('casulo_v23_guest_uid');
    setCurrentUserUid(null);
    setProfiles([]);
    setActiveProfileIdState(null);
    setShowOnboarding(false);
  };

  const setGuestMode = () => {
    localStorage.setItem('casulo_v23_guest_uid', 'guest');
    setCurrentUserUid('guest');
    if (profiles.length === 0) {
      setProfiles([defaultProfile]);
      setActiveProfileIdState('1');
    }
  };

  const updateProfiles = (newProfiles: ChildProfile[]) => {
    setProfiles(newProfiles);
    localStorage.setItem('casulo_v23_profiles', JSON.stringify(newProfiles));
    if (currentUserUid && currentUserUid !== 'guest') {
      saveUserProfile(currentUserUid, { profiles: newProfiles }).catch(console.error);
    }
  };

  const setActiveProfileId = (id: string) => {
    setActiveProfileIdState(id);
    localStorage.setItem('casulo_v23_active_id', id);
    if (currentUserUid && currentUserUid !== 'guest') {
      saveUserProfile(currentUserUid, { activeProfileId: id }).catch(console.error);
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      currentUserUid, 
      profiles, 
      activeProfileId, 
      activeProfile,
      loading, 
      isAuthChecking,
      showOnboarding,
      setShowOnboarding,
      signInWithGoogle, 
      signInWithApple,
      signOut,
      setGuestMode,
      updateProfiles,
      setActiveProfileId
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
