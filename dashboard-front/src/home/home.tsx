import { Button } from "../custom/button";
import { useDashboardStoreManager } from "../store";
import { IoSettingsOutline } from "react-icons/io5";
import { Tooltip } from "../custom/tooltip";
import { Header } from "../components/header";
import { useEffect } from "react";
export default function Home() {
  const currentColor = useDashboardStoreManager((s) => s.currentColor);
  const setThemeSettings = useDashboardStoreManager((s) => s.setThemeSettings);
  const currentMode = useDashboardStoreManager((s) => s.currentMode);
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
      <h1>Home</h1>

      <Tooltip text="تنظیمات" className="inline-block fixed bottom-8 left-4">
        <Button
          onClick={() => setThemeSettings(true)}
          style={{ backgroundColor: currentColor }}
          className="p-3  rounded-full "
        >
          <IoSettingsOutline size={25} color="white" />
        </Button>
      </Tooltip>
    </div>
  );
}
