import React from 'react';
import MenuLink from './menuLink/menuLink';
import Image from 'next/image';
import { menuItems } from './utils';
import styles from './sidebar.module.css';
import { MdLogout } from 'react-icons/md';

export const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image src="/avatar.png" alt="avatar" width={50} height={50} className={styles.userImage} />
        <div className={styles.userDetail}>
          <span className={styles.userName}>John Joe</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((menu) => (
          <li key={menu.title}>
            <span className={styles.category}> {menu.title}</span>
            {menu.list.map((item) => (
              <MenuLink key={item.title} item={item} />
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <MdLogout />
        Logout
      </button>
    </div>
  );
};
