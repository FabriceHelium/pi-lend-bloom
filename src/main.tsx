
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n' // Import i18n initialization
import { initPiNetwork } from './utils/piNetworkSDK'

// Initialize Pi Network SDK
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    initPiNetwork();
  });
}

createRoot(document.getElementById("root")!).render(<App />);
