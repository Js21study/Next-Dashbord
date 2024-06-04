'use client';
import React, { FC } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { MenuLinksItems } from '@/app/@types/Menu';
import styles from './menuLink.module.css';

type Props = {
  item: MenuLinksItems;
};
const MenuLink: FC<Props> = ({ item }) => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${pathname === item.path && styles.active}`}
    >
      {item.title}
      {item.icon}
    </Link>
  );
};

export default MenuLink;
