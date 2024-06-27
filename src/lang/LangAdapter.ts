import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { ru } from './localization/ru/ru';

i18n.use(initReactI18next).init({
  resources: {
    ru,    
  },
  lng: 'ru',
  defaultNS: 'common',
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false,
  },
});

// Need init, default i18n will be inited when ‘sync' function from RootStore
export const Localization = i18n;
