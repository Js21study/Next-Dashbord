import { IconType } from 'react-icons';

export interface MenuLinksItems {
  title: string;
  path: string;
  icon: JSX.Element;
}

export interface Menu {
  title: string;
  list: MenuLinksItems[];
}
