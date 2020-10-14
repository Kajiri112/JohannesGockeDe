import i18n from "i18next";
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './i18n/en.json';
import translationDE from './i18n/de.json';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    global: translationEN,
  },
  de: {
    global: translationDE,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: 'en',
    resources: resources,
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    ns: ['global'],
    defaultNS: 'global'
  });

export default i18n;