import { Button } from "../../custom/button";
import { useDashboardStoreManager } from "../../store";
import { useChangeLanguage } from "../../hooks/useChangeLanguage";

export default function Header() {
  const setCurrentMode = useDashboardStoreManager((s) => s.setCurrentMode);
  const currentMode = useDashboardStoreManager((s) => s.currentMode);
  const setType = useDashboardStoreManager((s) => s.setType);
  const { changeLanguage } = useChangeLanguage();
  return (
    <div className="h-12 w-full flex justify-end gap-2">
      <Button
        onClick={() =>
          setCurrentMode(currentMode === "dark" ? "light" : "dark")
        }
        className="bg-blue-500 p-2"
      >
        Mode
      </Button>
      <Button
        onClick={() => setType("shoppingCart")}
        className="bg-green-500 p-2"
      >
        ShoppingCart
      </Button>
      <Button onClick={() => setType("menu")} className="bg-orange-500 p-2">
        menu
      </Button>
      <Button onClick={() => changeLanguage("en")} className="bg-pink-500 p-2">
        English
      </Button>
      <Button
        onClick={() => changeLanguage("fa")}
        className="bg-yellow-500 p-2"
      >
        فارسی
      </Button>
      <Button onClick={() => changeLanguage("ar")} className="bg-gray-500 p-2">
        عربی
      </Button>
    </div>
  );
}
