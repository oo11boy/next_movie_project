type ISubMenuItemProps = {
  id: number;
  title: string;
}
export type  IMenuItemsProps = ISubMenuItemProps & {
  icon: React.ReactNode;
  link: string;
  img: string;
  submenu: ISubMenuItemProps[];
}

export type IToggleMenuProps = {
  toggleMenu: () => void;
};

export type ISubMenuProps = {
  item: IMenuItemsProps;
};

export interface ISubMenuMobileProps {
  item: IMenuItemsProps;
  index: number;
}
