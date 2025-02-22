import { ComponentsType } from "../../models";
import { useSetComponents } from "./hooks";
import HeaderSidebar from "./header-sidebar";
import { useChangeLanguage } from "../../hooks/useChangeLanguage";
import { useDashboardStoreManager } from "../../store";

type SidebarProps = {
  componentsType: ComponentsType | null;
};

export default function Sidebar({ componentsType }: SidebarProps) {
  const { i18n } = useChangeLanguage();
  console.log(i18n.language);
  const components = useSetComponents(componentsType);
  const currentColor = useDashboardStoreManager((s) => s.currentColor);
  return (
    <div
      style={{ boxShadow: `0 4px 8px ${currentColor}` }}
      className={`${
        components
          ? "translate-x-0"
          : `${
              i18n.language === "en" ? "-translate-x-full" : "translate-x-full"
            } `
      } w-1/6 flex flex-col fixed bg-white h-full p-1 overflow-y-auto md:overflow-hidden md:hover:overflow-y-auto z-50 dark:bg-secondary-dark-bg top-0 start-0 transition-all duration-300 shadow-md dark:shadow-slate-200 shadow-slate-200 gap-3 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-thumb-rounded-full scrollbar-track-gray-200`}
    >
      <HeaderSidebar title={components?.title ?? ""} icon={components?.icon} />
      <hr className="dark:text-white text-gray-600" />
      <div className="w-full h-full">{components?.component}</div>
    </div>
  );
}
