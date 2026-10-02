import { getToken, onMessage } from "firebase/messaging";
import { messagingPromise, VAPID_KEY } from "../lib/firebase";
import { PushNotifications } from '@capacitor/push-notifications';
import { Capacitor } from '@capacitor/core';

export const requestNotificationPermission = async () => {
  try {
    const messaging = await messagingPromise;
    const isNative = Capacitor.isNativePlatform();

    if (isNative) {
      // Check if plugin is available
      if (!PushNotifications) {
        console.warn('PushNotifications: Plugin not available');
        return null;
      }

      // Check for manual override to prevent crashes
      if (localStorage.getItem('casulo_skip_push_reg') === 'true') {
        console.warn('PushNotifications: Skipping registration due to previous failure');
        return null;
      }

      console.log('PushNotifications: Requesting permissions...');
      const perm = await PushNotifications.requestPermissions();
      console.log('PushNotifications: Permission result:', perm.receive);
      
      if (perm.receive === 'granted') {
        try {
          console.log('PushNotifications: Registering...');
          await PushNotifications.register();
          
          PushNotifications.addListener('registration', token => {
            console.log('PushNotifications: FCM Token (Native):', token.value);
          });
          
          PushNotifications.addListener('registrationError', error => {
            console.error('PushNotifications: Registration error:', error);
            localStorage.setItem('casulo_skip_push_reg', 'true');
          });
        } catch (regError) {
          console.error('PushNotifications: Error during register() call:', regError);
          localStorage.setItem('casulo_skip_push_reg', 'true');
        }
      }
    } else if ("Notification" in window) {
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') {
        console.warn("Notification permission denied on web.");
        return null;
      }
    }

    if (!messaging) {
      console.warn("Firebase Messaging is not supported in this environment.");
      return null;
    }

    const token = await getToken(messaging, {
      vapidKey: VAPID_KEY,
    });
    console.log("FCM Token (Firebase):", token);
    return token;
  } catch (error) {
    console.error("Error requesting notification permission (safely caught):", error);
  }
  return null;
};

export const scheduleLocalNotification = (title: string, body: string, delayMs: number) => {
  if (!("Notification" in window)) return;
  
  setTimeout(() => {
    if (Notification.permission === "granted") {
      new Notification(title, {
        body,
        icon: '/favicon.ico'
      });
    }
  }, delayMs);
};

export const onForegroundMessage = async (callback: (payload: any) => void) => {
  const messaging = await messagingPromise;
  if (!messaging) return () => {};
  return onMessage(messaging, (payload) => {
    console.log("Message received in foreground:", payload);
    callback(payload);
  });
};

// Reminder logic would typically be handled by Cloud Functions on the backend
// based on the Firestore timestamps we are saving.
// For example, a scheduled function could check for inactivity or upcoming events.
