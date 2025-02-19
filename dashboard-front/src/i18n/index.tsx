import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      setting: "setting",
      shoppingCart: "shoppingCart",
      menu: "menu",
      dashboard: "dashboard",
      pages: "pages",
      applications: "applications",
      charts: "charts",
    },
  },
  fa: {
    translation: {
      setting: "تنظیمات",
      shoppingCart: "سبدخرید",
      menu: "منو",
      dashboard: "داشبورد",
      pages: "صفحات",
      applications: "اپلیکیشن ها",
      charts: "نمودار ها",
    },
  },
  ar: {
    translation: {
      setting: "الإعدادات",
      shoppingCart: "عربة التسوق",
      menu: "القائمة",
      dashboard: "لوحة التحكم",
      pages: "صفحات",
      applications: "التطبيقات",
      charts: "الرسوم البيانية",
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
