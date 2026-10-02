
import React, { createContext, useContext, useMemo, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import { Purchases, LOG_LEVEL, PurchasesPackage } from '@revenuecat/purchases-capacitor';
import { Capacitor } from '@capacitor/core';

interface PremiumContextType {
  isPremium: boolean;
  handlePurchase: (plan: 'monthly' | 'annual') => Promise<void>;
  restorePurchases: () => Promise<void>;
  isLoading: boolean;
}

const PremiumContext = createContext<PremiumContextType | undefined>(undefined);

export const PremiumProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { activeProfile, updateProfiles, profiles, activeProfileId } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isPremium, setIsPremium] = useState(false);

  // Sync isPremium state with activeProfile and RevenueCat
  useEffect(() => {
    const checkEntitlements = async () => {
      const platform = Capacitor.getPlatform();
      
      // Local check first (for speed and offline)
      if (activeProfile?.isPremium || activeProfile?.subscription?.status === 'premium') {
        setIsPremium(true);
      }

      if (platform === 'web') return;

      try {
        const { customerInfo } = await Purchases.getCustomerInfo();
        const hasPremium = !!customerInfo.entitlements.active['premium'];
        setIsPremium(hasPremium);

        // If RevenueCat says premium but profile doesn't, sync it
        if (hasPremium && activeProfile && !activeProfile.isPremium) {
          const updatedProfiles = profiles.map(p => 
            p.id === activeProfileId ? { 
              ...p, 
              isPremium: true, 
              subscription: { ...p.subscription, status: 'premium' as const, startDate: p.subscription?.startDate || new Date().toISOString() } 
            } : p
          );
          updateProfiles(updatedProfiles);
        }
      } catch (e) {
        console.error("RevenueCat Entitlement Check Error:", e);
      }
    };

    if (activeProfile) {
      checkEntitlements().catch(e => console.error("Error in checkEntitlements:", e));
    }
  }, [activeProfile?.id]);

  useEffect(() => {
    const initRevenueCat = async () => {
      const platform = Capacitor.getPlatform();
      if (platform === 'web') {
        console.log("RevenueCat: Web environment detected, skipping native initialization.");
        return;
      }
      try {
        await Purchases.setLogLevel({ level: LOG_LEVEL.DEBUG });
        // Replace with your actual RevenueCat API Keys
        await Purchases.configure({
          apiKey: "goog_placeholder_api_key", // Replace with real key
          appUserID: activeProfile?.id || "anonymous"
        });
        
        // Initial check after configuration
        const { customerInfo } = await Purchases.getCustomerInfo();
        setIsPremium(!!customerInfo.entitlements.active['premium']);
      } catch (e) {
        console.error("RevenueCat Init Error:", e);
      }
    };

    initRevenueCat().catch(e => console.error("Error in initRevenueCat:", e));
  }, [activeProfile?.id]);

  const handlePurchase = async (plan: 'monthly' | 'annual') => {
    if (!activeProfile) return;
    
    const platform = Capacitor.getPlatform();
    if (platform === 'web') {
      console.log("RevenueCat: Purchase simulated on web.");
      setIsLoading(true);
      setTimeout(() => {
        const updatedProfiles = profiles.map(p => 
          p.id === activeProfileId ? {
            ...p,
            isPremium: true,
            subscription: {
              status: 'premium' as const,
              startDate: p.subscription?.startDate || new Date().toISOString(),
              plan
            }
          } : p
        );
        updateProfiles(updatedProfiles);
        setIsPremium(true);
        setIsLoading(false);
      }, 1000);
      return;
    }

    setIsLoading(true);
    try {
      const offerings = await Purchases.getOfferings();
      if (!offerings.current) throw new Error("No offerings found");

      let pkg: PurchasesPackage | undefined;
      if (plan === 'annual') {
        pkg = offerings.current.annual;
      } else {
        pkg = offerings.current.monthly;
      }

      if (!pkg) throw new Error(`Package for ${plan} not found`);

      const { customerInfo } = await Purchases.purchasePackage({ aPackage: pkg });
      
      if (customerInfo.entitlements.active['premium']) {
        setIsPremium(true);
        const updatedProfiles = profiles.map(p => 
          p.id === activeProfileId ? {
            ...p,
            isPremium: true,
            subscription: {
              status: 'premium' as const,
              startDate: p.subscription?.startDate || new Date().toISOString(),
              plan
            }
          } : p
        );
        updateProfiles(updatedProfiles);
      }
    } catch (e: any) {
      if (!e.userCancelled) {
        console.error("Purchase Error:", e);
        throw e;
      }
    } finally {
      setIsLoading(false);
    }
  };

  const restorePurchases = async () => {
    if (!activeProfile) return;

    const platform = Capacitor.getPlatform();
    if (platform === 'web') {
      console.log("RevenueCat: Restore simulated on web.");
      return;
    }

    setIsLoading(true);
    try {
      const { customerInfo } = await Purchases.restorePurchases();
      if (customerInfo.entitlements.active['premium']) {
        setIsPremium(true);
        const updatedProfiles = profiles.map(p => 
          p.id === activeProfileId ? {
            ...p,
            isPremium: true,
            subscription: {
              status: 'premium' as const,
              startDate: p.subscription?.startDate || new Date().toISOString()
            }
          } : p
        );
        updateProfiles(updatedProfiles);
      }
    } catch (e) {
      console.error("Restore Error:", e);
      throw e;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PremiumContext.Provider value={{ isPremium, handlePurchase, restorePurchases, isLoading }}>
      {children}
    </PremiumContext.Provider>
  );
};

export const usePremium = () => {
  const context = useContext(PremiumContext);
  if (context === undefined) {
    throw new Error('usePremium must be used within a PremiumProvider');
  }
  return context;
};
