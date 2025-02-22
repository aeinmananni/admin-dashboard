import { LinkType } from "../../../../../models";
import { useDashboardStoreManager } from "../../../../../store";

type ChildMenuProps = {
  item: LinkType;
};

const ChildMenu = ({ item }: ChildMenuProps) => {
  const currentColor = useDashboardStoreManager((s) => s.currentColor);
  return (
    <span
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = currentColor)
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = "transparent")
      }
      className={`text-sm  p-1 dark:text-white text-slate-400  cursor-pointer duration-300 rounded-sm hover:text-white`}
    >
      {item.title}
    </span>
  );
};

export default ChildMenu;
