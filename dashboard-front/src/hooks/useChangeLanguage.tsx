import { useEffect } from "react";
import { useTranslation } from "react-i18next";
export const useChangeLanguage = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: "en" | "fa") => {
    i18n.changeLanguage(lng);
    document.documentElement.setAttribute("dir", lng === "fa" ? "rtl" : "ltr");
  };
  useEffect(() => {
    const currentLang = i18n.language || "en";
    document.documentElement.setAttribute(
      "dir",
      currentLang === "fa" ? "rtl" : "ltr"
    );
  }, [i18n.language]);

  return { t, changeLanguage, i18n };
};
