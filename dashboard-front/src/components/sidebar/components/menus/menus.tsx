import SubMenu from "./components/sub-menu";
import { useMenuItems, useSidebarItems } from "../../../../data/links";
import ChildMenu from "./components/child-menu";
const Menus = () => {
  const menuItems = useMenuItems();
  const sidebarItem = useSidebarItems();
  return (
    <div className="h-full w-full flex flex-col gap-2 p-2">
      {menuItems.map((it, index) => {
        const filteredItems = sidebarItem.filter(
          (item) => item.topId === it.id
        );

        return (
          <SubMenu key={index} title={it.title}>
            {filteredItems.map((item, index) => (
              <ChildMenu key={index} item={item} />
            ))}
          </SubMenu>
        );
      })}
    </div>
  );
};

export default Menus;
