import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import  translations  from './i18n-translations';
import Misc from './Helpers/Misc.js';

i18n
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        lng: Misc.getCurrentUserLocale(),
        interpolation: {
            escapeValue: false,
        },
        resources: translations
    });

export default i18n;