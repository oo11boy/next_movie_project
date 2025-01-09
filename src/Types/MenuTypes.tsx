export interface MenuItems {
  id: number;
  title: string;
  icon: React.ReactNode;
  link: string;
  img: string;
  submenu: SubMenuItem[];
}
export interface SubMenuItem {
  id: number;
  title: string;
}

export type toggleMenuprop = {
  toggleMenu: () => void;
};

export type SubMenuprop = {
  item: MenuItems;
};

export interface SubMenuMobileProps {
  item: MenuItems;
  index: number;
}
