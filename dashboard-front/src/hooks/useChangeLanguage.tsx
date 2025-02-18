import { useEffect } from "react";
import { useTranslation } from "react-i18next";
export const useChangeLanguage = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: "en" | "fa" | "ar") => {
    i18n.changeLanguage(lng);
    document.documentElement.setAttribute("dir", lng === "en" ? "ltr" : "rtl");
  };
  useEffect(() => {
    const currentLang = i18n.language || "en";
    document.documentElement.setAttribute(
      "dir",
      currentLang === "en" ? "ltr" : "rtl"
    );
  }, [i18n.language]);

  return { t, changeLanguage, i18n };
};
