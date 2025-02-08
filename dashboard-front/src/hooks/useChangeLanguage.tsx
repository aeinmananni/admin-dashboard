import { useTranslation } from "react-i18next";
export const useChangeLanguage = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: "en" | "fa") => {
    i18n.changeLanguage(lng);
  };
  return { t, changeLanguage, i18n };
};
