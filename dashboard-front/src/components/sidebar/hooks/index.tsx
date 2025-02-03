import { ComponentsType } from "../../../models";
import { FaShoppingCart } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { CgMenuBoxed } from "react-icons/cg";

export const useSetComponents = (component: ComponentsType | null) => {
  switch (component) {
    case "menu":
      return {
        title: "منو",
        icon: <CgMenuBoxed size={20} />,
        component: <h1>Menu</h1>,
      };
    case "settings":
      return {
        title: "تنظیمات",
        icon: <IoSettingsSharp />,
        component: <h1>Setting</h1>,
      };
    case "shoppingCart":
      return {
        title: "سبد خرید",
        icon: <FaShoppingCart />,
        component: <h1>ShoppingCart</h1>,
      };
    default:
      return null;
  }
};
