import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      setting: "setting",
      shoppingCart: "shoppingCart",
      menu: "menu",
    },
  },
  fa: {
    translation: {
      setting: "تنظیمات",
      shoppingCart: "سبدخرید",
      menu: "منو",
    },
  },
  ar: {
    translation: {
      setting: "الإعدادات",
      shoppingCart: "عربة التسوق",
      menu: "القائمة",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    debug: true,
  });

export default i18n;
