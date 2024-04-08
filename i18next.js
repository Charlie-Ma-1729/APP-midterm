import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import enUS from './assets/locales/en-US.json';
import zhHantTW from './assets/locales/zh-Hant-TW.json';

export const languageResources = {
    'en-US': {
        translation: enUS,
    },
    'zh-Hant-TW': {
        translation: zhHantTW,
    },
};

i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'zh-Hant-TW',
    fallbackLng: 'zh-Hant-TW',
    resources: languageResources,
})

export  default i18next;