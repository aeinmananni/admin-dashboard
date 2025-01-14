import { create } from "zustand";
import { InitialStateType } from "../models";

type DashboardStoreType = {
  activeMenu: boolean;
  setActiveMenu: (value: boolean | ((c: boolean) => boolean)) => void;
  isClicked: InitialStateType;
  setIsClicked: (value: InitialStateType) => void;
  currentColor: string;
  setCurrentColor: (value: string) => void;
};

export const useDashboardStoreManager = create<DashboardStoreType>()((set) => ({
  activeMenu: true,
  isClicked: {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
  },
  currentColor: "#03C9D7",

  setActiveMenu: (value: boolean | ((c: boolean) => boolean)) => {
    set((state) => ({
      activeMenu: typeof value === "function" ? value(state.activeMenu) : value,
    }));
  },
  setIsClicked: (value: InitialStateType) => {
    set(() => ({
      isClicked: value,
    }));
  },
  setCurrentColor: (value: string) => {
    set(() => ({
      currentColor: value,
    }));
  },
}));
