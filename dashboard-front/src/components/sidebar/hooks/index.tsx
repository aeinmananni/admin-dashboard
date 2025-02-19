import { ComponentsType } from "../../../models";
import { FaShoppingCart } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { CgMenuBoxed } from "react-icons/cg";
import { useChangeLanguage } from "../../../hooks/useChangeLanguage";
import { Menus } from "../components/menus";
export const useSetComponents = (component: ComponentsType | null) => {
  const { t } = useChangeLanguage();
  switch (component) {
    case "menu":
      return {
        title: t("menu"),
        icon: <CgMenuBoxed size={20} />,
        component: <Menus />,
      };
    case "settings":
      return {
        title: t("setting"),
        icon: <IoSettingsSharp />,
        component: <h1>Setting</h1>,
      };
    case "shoppingCart":
      return {
        title: t("shoppingCart"),
        icon: <FaShoppingCart />,
        component: <h1>ShoppingCart</h1>,
      };
    default:
      return null;
  }
};
