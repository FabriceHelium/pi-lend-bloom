
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.8f7e83959965415498dbbd435d4c24af',
  appName: 'pi-lend-bloom',
  webDir: 'dist',
  server: {
    url: 'https://8f7e8395-9965-4154-98db-bd435d4c24af.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      backgroundColor: "#8150F2",
      androidSplashResourceName: "splash",
      splashFullScreen: true,
      splashImmersive: true,
    },
  },
};

export default config;
