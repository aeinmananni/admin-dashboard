import { LinkType } from "../models";
import { useChangeLanguage } from "../hooks/useChangeLanguage";
import { useMemo } from "react";

export const useMenuItems = (): LinkType[] => {
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

export const useSidebarItems = (): LinkType[] => {
  const { t } = useChangeLanguage();
  return useMemo(
    () => [
      { id: 1, title: t("overview"), topId: 1 },
      { id: 2, title: t("analytics"), topId: 1 },
      { id: 3, title: t("performance"), topId: 1 },
      { id: 4, title: t("profile"), topId: 2 },
      { id: 5, title: t("setting"), topId: 2 },
      { id: 6, title: t("faq"), topId: 2 },
      { id: 7, title: t("calendar"), topId: 3 },
      { id: 8, title: t("email"), topId: 3 },
      { id: 9, title: t("chat"), topId: 3 },
      { id: 10, title: t("bar_chart"), topId: 4 },
      { id: 11, title: t("line_chart"), topId: 4 },
      { id: 12, title: t("pie_chart"), topId: 4 },
    ],
    [t]
  );
};
