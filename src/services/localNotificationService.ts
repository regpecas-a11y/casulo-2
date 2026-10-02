
// CASULO DAILY FEED - Local Notification Service
import { LocalNotifications } from '@capacitor/local-notifications';
import { Capacitor } from '@capacitor/core';

export const setupNotifications = async (childName: string, birthDate: string, isPremium: boolean, nextMissionTitle?: string, knowledgePhrase?: string) => {
  try {
    // Check if plugin is available
    if (Capacitor.getPlatform() === 'web' || !LocalNotifications) {
      console.log('LocalNotifications: Skipping setup on web/non-native platform.');
      return;
    }

    // Request permissions
    const perm = await LocalNotifications.requestPermissions();
    if (perm.display !== 'granted') return;

    // Criar canal (Android 8+)
    try {
      await LocalNotifications.createChannel({
        id: 'casulo_channel',
        name: 'Casulo Notificações',
        description: 'Notificações da jornada do seu bebê',
        importance: 5, // IMPORTANCE_HIGH
        visibility: 1,
        vibration: true,
        sound: 'default',
        lights: true,
        lightColor: '#F4A261',
      });
    } catch (channelError) {
      console.error('Error creating notification channel:', channelError);
    }

    // Get pending notifications safely
    try {
      const pending = await LocalNotifications.getPending();
      if (pending && pending.notifications && pending.notifications.length > 0) {
        await LocalNotifications.cancel({ notifications: pending.notifications });
      }
    } catch (pendingError) {
      console.error('Error handling pending notifications:', pendingError);
    }

    const notifications = [];
    const now = new Date();
    const birth = new Date(birthDate);

    // 1. Aniversário de mês
    // Find next monthly birthday
    let nextBirthday = new Date(now.getFullYear(), now.getMonth(), birth.getDate(), 10, 0, 0);
    if (nextBirthday <= now) {
      nextBirthday.setMonth(nextBirthday.getMonth() + 1);
    }
    
    // Calculate months at next birthday
    const months = (nextBirthday.getFullYear() - birth.getFullYear()) * 12 + (nextBirthday.getMonth() - birth.getMonth());

    notifications.push({
      id: 1,
      title: `🎉 ${childName} completa ${months} meses hoje!`,
      body: "Veja o que mudou e registre este momento.",
      schedule: { at: nextBirthday },
      channelId: "casulo_channel",
      smallIcon: "ic_stat_casulo",
      iconColor: "#F4A261",
      extra: { tab: 'journey' }
    });

    // 2. Missão do dia (09:00)
    if (nextMissionTitle) {
      let missionTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 0, 0);
      if (missionTime <= now) missionTime.setDate(missionTime.getDate() + 1);

      notifications.push({
        id: 2,
        title: "🎯 Nova missão disponível",
        body: nextMissionTitle,
        schedule: { at: missionTime, repeats: true, every: 'day' },
        channelId: "casulo_channel",
        smallIcon: "ic_stat_casulo",
        iconColor: "#F4A261",
        extra: { tab: 'feed' }
      });
    }

    // 3. Lembrete diário (20:00)
    let reminderTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 20, 0, 0);
    if (reminderTime <= now) reminderTime.setDate(reminderTime.getDate() + 1);

    notifications.push({
      id: 3,
      title: `✨ Momento Casulo`,
      body: `O dia do ${childName} foi especial? ✨ Registre uma memória agora!`,
      schedule: { at: reminderTime, repeats: true, every: 'day' },
      channelId: "casulo_channel",
      smallIcon: "ic_stat_casulo",
      iconColor: "#F4A261",
      extra: { tab: 'diary' }
    });

    // 4. Semana nova (Segunda 08:00)
    let nextMonday = new Date(now);
    nextMonday.setDate(now.getDate() + (1 + 7 - now.getDay()) % 7);
    nextMonday.setHours(8, 0, 0, 0);
    if (nextMonday <= now) nextMonday.setDate(nextMonday.getDate() + 7);

    notifications.push({
      id: 4,
      title: `✨ Nova semana na jornada de ${childName}`,
      body: knowledgePhrase || "Acompanhe o desenvolvimento desta semana.",
      schedule: { at: nextMonday, repeats: true, every: 'week' },
      channelId: "casulo_channel",
      smallIcon: "ic_stat_casulo",
      iconColor: "#F4A261",
      extra: { tab: 'feed' }
    });

    // 5. Refeições (Café, Almoço, Jantar)
    const mealTimes = [
      { id: 10, title: "☕ Café da Manhã", hour: 8, min: 30 },
      { id: 11, title: "🍽️ Almoço", hour: 12, min: 0 },
      { id: 13, title: "🥣 Jantar", hour: 19, min: 0 }
    ];

    mealTimes.forEach(meal => {
      let time = new Date(now.getFullYear(), now.getMonth(), now.getDate(), meal.hour, meal.min, 0);
      if (time <= now) time.setDate(time.getDate() + 1);
      
      const body = isPremium 
        ? `Hora do papa do ${childName}! 🥣 Vamos ver o que tem na geladeira?`
        : `Hora do papa de ${childName}! 🥣`;

      notifications.push({
        id: meal.id,
        title: meal.title,
        body: body,
        schedule: { at: time, repeats: true, every: 'day' },
        channelId: "casulo_channel",
        smallIcon: "ic_stat_casulo",
        iconColor: "#F4A261",
        extra: { tab: 'feeding' }
      });
    });

    await LocalNotifications.schedule({ notifications: notifications as any });
  } catch (error) {
    console.error("Error scheduling notifications:", error);
  }
};

export const cancelNotification = async (id: number) => {
  try {
    if (Capacitor.getPlatform() === 'web' || !LocalNotifications) return;
    await LocalNotifications.cancel({ notifications: [{ id }] });
    console.log(`Notification ${id} cancelled`);
  } catch (error) {
    console.error(`Error cancelling notification ${id}:`, error);
  }
};
