import { Button } from "../../custom/button";
import { useDashboardStoreManager } from "../../store";

export default function Header() {
  const setCurrentMode = useDashboardStoreManager((s) => s.setCurrentMode);
  const currentMode = useDashboardStoreManager((s) => s.currentMode);
  return (
    <div className="h-12 w-full">
      <Button
        onClick={() =>
          setCurrentMode(currentMode === "dark" ? "light" : "dark")
        }
        className="bg-blue-500 p-2"
      >
        Mode
      </Button>
    </div>
  );
}
