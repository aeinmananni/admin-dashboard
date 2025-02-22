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
      overview: "overview",
      analytics: "analytics",
      performance: "performance",
      profile: "profile",
      faq: "faq",
      calendar: "calendar",
      email: "email",
      chat: "chat",
      bar_chart: "barChart",
      line_chart: "lineChart",
      pie_chart: "pie_chart",
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
      overview: "نمای کلی",
      analytics: "تحلیل ها",
      performance: "عملکرد",
      profile: "پروفایل",
      faq: "سوالات متداول",
      calendar: "تقویم",
      email: "ایمیل",
      chat: "چت",
      bar_chart: "نمودارمیله ای",
      line_chart: "نمودارخطی",
      pie_chart: "نمودار دایره‌ای",
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
      overview: "نظرة عامة",
      analytics: "التحليلات",
      performance: "الأداء",
      profile: "الملف الشخصي",
      faq: "الأسئلة الشائعة",
      calendar: "التقويم",
      email: "البريد الإلكتروني",
      chat: "الدردشة",
      bar_chart: "مخطط شريطي",
      line_chart: "مخطط خطي",
      pie_chart: "مخطط دائري",
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
