import { IoIosArrowDown } from "react-icons/io";
import { useDashboardStoreManager } from "../../../../../store";
import { useState } from "react";

type MenuProps = {
  title: string;
  children?: React.ReactNode;
};

const SubMenu = ({ title, children }: MenuProps) => {
  const [show, setShow] = useState<boolean>(false);
  const currentColor = useDashboardStoreManager((s) => s.currentColor);
  return (
    <div className="flex flex-col">
      <div
        onClick={() => setShow((c) => !c)}
        style={{
          boxShadow: show
            ? `0 1px 1px ${currentColor}`
            : `0 1px 7px ${currentColor}`,
          border: `1px solid ${currentColor}`,
        }}
        className="w-full  cursor-pointer flex justify-between border items-center border-red-500 p-2 rounded-sm"
      >
        <span className="dark:text-white text-slate-600 text-sm">{title}</span>
        <IoIosArrowDown
          className={` ${
            show ? "-rotate-180" : "rotate-0"
          } dark:text-white text-slate-600 duration-300`}
        />
      </div>
      <div
        style={{ boxShadow: `0 1px 5px ${currentColor}` }}
        className={` w-full  overflow-hidden px-2 rounded-b-md ${
          show ? "max-h-40" : "max-h-0"
        } transition-all duration-300`}
      >
        <div className="mt-1 w-full h-full flex flex-col pb-2 gap-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SubMenu;
