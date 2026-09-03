import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Traduções
import pt from './locales/pt/translation.json';
import en from './locales/en/translation.json';
import es from './locales/es/translation.json';
import de from './locales/de/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en },
      es: { translation: es },
      de: { translation: de },
    },
    lng: 'pt', // Força o idioma inicial a ser SEMPRE português na inicialização
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;