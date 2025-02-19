import { IoMdCloseCircleOutline } from "react-icons/io";
import { useDashboardStoreManager } from "../../store";
import { useChangeLanguage } from "../../hooks/useChangeLanguage";
type HeaderSidebarProps = {
  title: string;
  icon: React.ReactNode;
};

export default function HeaderSidebar({ title, icon }: HeaderSidebarProps) {
  const setType = useDashboardStoreManager((s) => s.setType);

  const { t, i18n } = useChangeLanguage();
  return (
    <div
      style={{ direction: i18n.language === "en" ? "ltr" : "rtl" }}
      className={`flex justify-between p-1 items-center dark:text-white text-slate-600`}
    >
      <div className="flex w-full gap-2 items-center">
        <span>{icon}</span>
        <span>{t(title)}</span>
      </div>
      <IoMdCloseCircleOutline
        onClick={() => setType(null)}
        size={20}
        cursor={"pointer"}
      />
    </div>
  );
}
