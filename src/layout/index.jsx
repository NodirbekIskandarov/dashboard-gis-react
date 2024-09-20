import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss'
import gerb from '../assets/images/gerb.png'
import logo from '../assets/images/logo.png'
const Layout = () => {
  const defaultMenuItems = [
    { id: 0, label: 'Bosh sahifa', icon: '🏠' },
    { id: 1, label: 'Statistika', icon: '📊' },
    { id: 2, label: 'Hujjatlar', icon: '📄' },
    { id: 3, label: 'Loyihalar', icon: '💼' },
    { id: 4, label: 'Xabarlar', icon: '📧' },
    { id: 5, label: 'Sozlamalar', icon: '⚙️' },
  ];

  const [menuList, setMenuList] = useState(defaultMenuItems);
  const [previousSelectedItem, setPreviousSelectedItem] = useState(null);

  const handleMenuClick = (item) => {
    // If the same item is clicked, do nothing
    if (previousSelectedItem && previousSelectedItem.id === item.id) return;

    const newMenuList = [...menuList];

    if (previousSelectedItem) {
      // Restore the previous selected item to its original position
      const prevIndex = defaultMenuItems.findIndex(i => i.id === previousSelectedItem.id);
      const prevItem = newMenuList.splice(newMenuList.findIndex(i => i.id === previousSelectedItem.id), 1)[0];
      newMenuList.splice(prevIndex, 0, prevItem);
    }

    // Move the currently clicked item to the top
    const selectedIndex = newMenuList.findIndex(i => i.id === item.id);
    const selectedItem = newMenuList.splice(selectedIndex, 1)[0];
    newMenuList.unshift(selectedItem);

    setMenuList(newMenuList);
    setPreviousSelectedItem(item);
  };

  return (
    <div className="body">
      <div className={styles.header}>
        <div className={styles.gerb_part}>
          <img src={gerb} alt="gerb" />
          <div className={styles.title}>
            <span className={styles.span1}>O‘ZBEKISTON RESPUBLIKASI PREZIDENTI HUZURIDAGI</span>
            <br />
            <span className={styles.span2}>STATISTIKA AGENTLIGI</span>
          </div>
        </div>
        <div className={styles.logo}>
          <img src={logo} alt="lgotip" />
        </div>
      </div>
      <div className="container">
        <div className="sidebar">
          <ul id="menu-list">
            {menuList.map(item => (
              <li
                key={item.id}
                className="menu-item"
                onClick={() => handleMenuClick(item)}
              >
                <span className="icon">{item.icon}</span>
                <span className="menu-text">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
      <div className={styles.footer}>
        <p>&copy; 2024 O’zbekiston Respublikasi Prezidenti huzuridagi Statistika agentligi materiallardan foydalanganda, havolani keltirish majburiy</p>
      </div>
    </div>
  );
};

export default Layout;