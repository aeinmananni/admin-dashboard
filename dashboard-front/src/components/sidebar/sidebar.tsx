import { ComponentsType } from "../../models";
import { useSetComponents } from "./hooks";
import HeaderSidebar from "./header-sidebar";
type SidebarProps = {
  componentsType: ComponentsType | null;
};

export default function Sidebar({ componentsType }: SidebarProps) {
  const components = useSetComponents(componentsType);

  return (
    <div
      className={`${
        components ? "translate-x-0" : "translate-x-full"
      } w-1/6 flex flex-col fixed bg-white h-full p-1 overflow-y-auto md:overflow-hidden md:hover:overflow-y-auto z-50 dark:bg-secondary-dark-bg top-0 right-0 transition-all duration-300 shadow-md dark:shadow-slate-200 shadow-slate-200`}
    >
      <HeaderSidebar title={components?.title ?? ""} icon={components?.icon} />
      <div className="w-full h-full">{components?.component}</div>
    </div>
  );
}
