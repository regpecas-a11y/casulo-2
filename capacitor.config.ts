import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.casulo.app',
  appName: 'Casulo',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    cleartext: true
  },
  plugins: {
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
      // @ts-ignore
      smallIcon: "ic_stat_casulo",
      // @ts-ignore
      iconColor: "#F4A261",
    },
    LocalNotifications: {
      // @ts-ignore
      smallIcon: "ic_stat_casulo",
      // @ts-ignore
      iconColor: "#F4A261",
    }
  }
};

export default config;
