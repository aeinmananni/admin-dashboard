import { Button } from "../../custom/button";
import { useDashboardStoreManager } from "../../store";

export default function Header() {
  const setCurrentMode = useDashboardStoreManager((s) => s.setCurrentMode);
  const currentMode = useDashboardStoreManager((s) => s.currentMode);
  const setType = useDashboardStoreManager((s) => s.setType);

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
    </div>
  );
}
