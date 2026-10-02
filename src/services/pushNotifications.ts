import { PushNotifications } from '@capacitor/push-notifications';
import { LocalNotifications } from '@capacitor/local-notifications';
import { Capacitor } from '@capacitor/core';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

export const inicializarPush = async (userId: string) => {
  if (!Capacitor.isNativePlatform()) {
    console.log('PushNotifications: Not a native platform, skipping.');
    return;
  }

  console.log('PushNotifications: Initializing for user', userId);

  try {
    // Check if plugin is available
    if (!PushNotifications) {
      console.warn('PushNotifications: Plugin not available');
      return;
    }

    // Check if we should skip push registration (e.g. if we know google-services.json is missing)
    const skipPush = localStorage.getItem('casulo_skip_push_reg') === 'true';
    if (skipPush) {
      console.warn('PushNotifications: Registration skipped due to manual override');
      return;
    }

    console.log('PushNotifications: Requesting permissions...');
    const perm = await PushNotifications.requestPermissions();
    console.log('PushNotifications: Permission result:', perm.receive);
    
    if (perm.receive !== 'granted') {
      console.warn('PushNotifications: Permission not granted');
      return;
    }

    console.log('PushNotifications: Registering device...');
    // Check if previous attempt crashed
    const isTrying = localStorage.getItem('casulo_push_trying');
    if (isTrying === 'true') {
      console.warn("PushNotifications: Registration crashed last time, skipping to prevent boot loop.");
      localStorage.setItem('casulo_skip_push_reg', 'true');
      localStorage.removeItem('casulo_push_trying');
      return;
    }

    // This is the line that often crashes if google-services.json is missing
    try {
      localStorage.setItem('casulo_push_trying', 'true');
      await PushNotifications.register();
      localStorage.removeItem('casulo_push_trying');
      console.log('PushNotifications: Registration call successful');
    } catch (regError) {
      console.error('PushNotifications: Registration failed (likely missing google-services.json):', regError);
      localStorage.removeItem('casulo_push_trying');
      // Store a flag to avoid crashing again on next reload
      localStorage.setItem('casulo_skip_push_reg', 'true');
      return;
    }

    await PushNotifications.addListener('registration', async (token) => {
      console.log('PushNotifications: Registration success, token received:', token.value);
      try {
        await updateDoc(doc(db, 'usuarios', userId), {
          fcmToken: token.value,
          fcmTokenAt: new Date().toISOString()
        });
        console.log('PushNotifications: Token updated in Firestore');
      } catch (e) {
        console.error('PushNotifications: Error updating FCM token in Firestore:', e);
      }
    });

    await PushNotifications.addListener('registrationError', (error) => {
      console.error('PushNotifications: Registration error event:', error);
      localStorage.setItem('casulo_skip_push_reg', 'true');
    });

    await PushNotifications.addListener('pushNotificationReceived', async (notification) => {
      console.log('PushNotifications: Notification received in foreground:', notification);
      
      try {
        // Show local notification when in foreground
        await LocalNotifications.schedule({
          notifications: [
            {
              title: notification.title || 'Nova Notificação',
              body: notification.body || '',
              id: Math.floor(Math.random() * 10000),
              schedule: { at: new Date(Date.now() + 100) },
              extra: notification.data,
              smallIcon: "ic_stat_casulo",
              iconColor: "#F4A261"
            }
          ]
        });
      } catch (e) {
        console.error('PushNotifications: Error scheduling local notification from push:', e);
      }
    });

    await PushNotifications.addListener('pushNotificationActionPerformed', (action) => {
      const tab = action.notification.data?.tab;
      if (tab) console.log('PushNotifications: Action performed, navigate to tab:', tab);
    });

  } catch (e) {
    console.error('PushNotifications: Fatal init error (safely caught):', e);
    // If we catch a fatal error here, it's likely a native crash was avoided or it's a plugin issue
    localStorage.setItem('casulo_skip_push_reg', 'true');
  }
};
