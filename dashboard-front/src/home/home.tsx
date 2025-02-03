import { Button } from "../custom/button";
import { useDashboardStoreManager } from "../store";
import { IoSettingsOutline } from "react-icons/io5";
import { Tooltip } from "../custom/tooltip";
import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { useEffect } from "react";
export default function Home() {
  const currentColor = useDashboardStoreManager((s) => s.currentColor);
  const currentMode = useDashboardStoreManager((s) => s.currentMode);
  const setType = useDashboardStoreManager((s) => s.setType);
  const type = useDashboardStoreManager((s) => s.type);
  useEffect(() => {
    if (currentMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [currentMode]);
  return (
    <div className="w-full h-full relative">
      <Header />
      <h1 className="dark:text-slate-200 text-slate-700">Home</h1>

      <Tooltip text="تنظیمات" className="inline-block fixed bottom-8 left-4">
        <Button
          onClick={() => setType("settings")}
          style={{ backgroundColor: currentColor }}
          className="p-3  rounded-full "
        >
          <IoSettingsOutline size={25} color="white" />
        </Button>
      </Tooltip>
      <Sidebar componentsType={type} />
    </div>
  );
}
