import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa i file JSON di traduzione
import translationEN from './locales/translationEN';
import translationIT from './locales/translationIT';

const savedLanguage = localStorage.getItem('language') || 'en';

// Risorse di traduzione
const resources = {
  en: {
    translation: translationEN,
  },
  it: {
    translation: translationIT,
  },
};

// Configura i18next  
i18n
  .use(initReactI18next) // Passa i18next al plugin react-i18next
  .init({
    resources,
    lng: savedLanguage, // Lingua di default
    fallbackLng: 'en', // Lingua di fallback
    interpolation: {
      escapeValue: false, // React gestisce l'escaping
    },
  });

export default i18n;