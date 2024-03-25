import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {en, fr, hi} from './translations'; // Import your translations

const STORE_LANGUAGE_KEY = 'settings.lang';

const languageDetectorPlugin: any = {
  type: 'languageDetector',
  async: true,
  init: () => {},
  detect: async function (callback: any) {
    try {
      const language = await AsyncStorage.getItem(STORE_LANGUAGE_KEY);
      callback(language || 'en');
    } catch (error) {
      console.log('Error reading language', error);
      callback('en');
    }
  },
  cacheUserLanguage: async function (language: any) {
    try {
      await AsyncStorage.setItem(STORE_LANGUAGE_KEY, language);
    } catch (error) {}
  },
};

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
  hi: {
    translation: hi,
  },
};

i18n
  .use(initReactI18next)
  .use(languageDetectorPlugin)
  .init({
    resources,
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
