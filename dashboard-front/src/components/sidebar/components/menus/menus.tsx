import Menu from "./components/menu";
import { useMenuItems } from "../../../../data/links";
const Menus = () => {
  const menuItems = useMenuItems();
  return (
    <div className="h-full w-full flex flex-col gap-2 p-2">
      {menuItems.map((it, index) => (
        <Menu key={index} title={it.title}>
          rtrtttttttttttttttttttt rtrtttttttttttttttttttt
          rtrtttttttttttttttttttt rtrtttttttttttttttttttt
          rtrtttttttttttttttttttt rtrtttttttttttttttttttt
        </Menu>
      ))}
    </div>
  );
};

export default Menus;
