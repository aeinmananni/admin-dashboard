import { create } from "zustand";
import { InitialStateType, CurrentModeType, ComponentsType } from "../models";

type DashboardStoreType = {
  activeMenu: boolean;
  setActiveMenu: (value: boolean | ((c: boolean) => boolean)) => void;
  isClicked: InitialStateType;
  setIsClicked: (key: keyof InitialStateType, value: InitialStateType) => void;
  currentColor: string;
  setCurrentColor: (value: string) => void;
  currentMode: CurrentModeType;
  setCurrentMode: (value: CurrentModeType) => void;
  themeSettings: boolean;
  setThemeSettings: (value: boolean) => void;
  screenSize: number | null;
  setScreenSize: (value: number | null) => void;
  type: ComponentsType | null;
  setType: (
    value: ComponentsType | null | ((v: ComponentsType) => ComponentsType)
  ) => void;
};

export const useDashboardStoreManager = create<DashboardStoreType>()((set) => ({
  activeMenu: true,
  isClicked: {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
  },
  currentColor: localStorage.getItem("currentColor") || "#03C9D7",
  currentMode:
    (localStorage.getItem("currentMode") as CurrentModeType) || "dark",
  themeSettings: false,
  screenSize: null,
  type: null,
  setType: (
    value: ComponentsType | null | ((c: ComponentsType) => ComponentsType)
  ) => {
    set((state) => {
      const newValue =
        typeof value === "function"
          ? value(state.type as ComponentsType)
          : value;
      if (state.type === newValue) return state;
      return { type: null };
    });

    setTimeout(() => {
      set((state) => ({
        type:
          typeof value === "function"
            ? value(state?.type as ComponentsType)
            : value,
      }));
    }, 400);
  },

  setScreenSize: (value: number | null) => {
    set(() => ({
      screenSize: value,
    }));
  },
  setActiveMenu: (value: boolean | ((c: boolean) => boolean)) => {
    set((state) => ({
      activeMenu: typeof value === "function" ? value(state.activeMenu) : value,
    }));
  },
  setIsClicked: (key: keyof InitialStateType) => {
    set((state) => ({
      isClicked: { ...state.isClicked, [key]: !state.isClicked[key] },
    }));
  },
  setCurrentColor: (value: string) => {
    set(() => ({
      currentColor: value,
    }));
    localStorage.setItem("currentColor", value);
  },
  setCurrentMode: (value: CurrentModeType) => {
    set(() => ({
      currentMode: value,
    }));
    localStorage.setItem("currentMode", value);
  },
  setThemeSettings: (value: boolean) => {
    set(() => ({
      themeSettings: value,
    }));
  },
}));
