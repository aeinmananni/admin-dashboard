import { ParentLinks } from "../models";
import { useChangeLanguage } from "../hooks/useChangeLanguage";
import { useMemo } from "react";

export const useMenuItems = (): ParentLinks[] => {
  const { t } = useChangeLanguage();
  return useMemo(
    () => [
      { id: 1, title: t("dashboard") },
      { id: 2, title: t("pages") },
      { id: 3, title: t("applications") },
      { id: 4, title: t("charts") },
    ],
    [t]
  );
};
