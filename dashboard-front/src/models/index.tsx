export type InitialStateType = {
  chat: boolean;
  cart: boolean;
  userProfile: boolean;
  notification: false;
};

export type CurrentModeType = "dark" | "light";

export type ComponentsType = "shoppingCart" | "settings" | "menu";
export type Components = {
  title: string;
  icon: React.ReactNode;
  component: React.ReactNode;
};

export type LinkType = {
  id: number;
  title: string;
  topId?: number;
};
