import Button from "../custom/button";
import { useDashboardStoreManager } from "../store";
import { IoSettingsOutline } from "react-icons/io5";
export default function Home() {
  const currentColor = useDashboardStoreManager((s) => s.currentColor);
  const setThemeSettings = useDashboardStoreManager((s) => s.setThemeSettings);
  return (
    <div className="w-full h-full relative">
      <h1>Home</h1>

      <Button
        onClick={() => setThemeSettings(true)}
        style={{ backgroundColor: currentColor }}
        className="p-3  fixed rounded-full left-4 bottom-8"
      >
        <IoSettingsOutline size={25} color="white" />
      </Button>
    </div>
  );
}
