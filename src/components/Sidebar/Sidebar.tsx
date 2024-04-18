// import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.css';

import DashboardIcon from './icons/DashboardIcon';
import IncidentIcon from './icons/IncidentIcon';
import FinanceIcon from './icons/FinanceIcon';
import MessageIcon from './icons/MessageIcon';
import SettingsIcon from './icons/SettingsIcon';
import HelpIcon from './icons/HelpIcon';
import Brand from './Brand';
import Tab from './Tab';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const TABS = [
    { to: '/dashboard',     icon: DashboardIcon,  title: 'Dashboard' },
    { to: '/incidencias',   icon: IncidentIcon,   title: 'Incidencias' },
    { to: '/contabilidad',  icon: FinanceIcon,    title: 'Contabilidad' },
    { to: '/mensajes',      icon: MessageIcon,    title: 'Mensajes' },
  ];

  const MENU_ITEMS = [
    { to: '/configuracion', icon: SettingsIcon,   title: 'Configuración' },
    { to: '/ayuda',         icon: HelpIcon,       title: 'Ayuda' },
  ]

  function handleTabClick( to: string) {
    navigate(to);
  }

  // function handleMenuItemClick(to: string) {
  //   navigate(to);
  // }

  return (
    <div className={styles.container}>
      <Brand />
      <div className={styles.tabGroupWrapper}>
        <div className={styles.tabGroup}>
          {TABS.map((tab, index) => {
            return (
              <Tab
                key={index}
                icon={tab.icon}
                title={tab.title}
                isActive={location.pathname === tab.to}
                handleClick={() => handleTabClick(tab.to)}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.bottomMenuWrapper}>
        <div className={styles.bottomMenuGroup}>
          {MENU_ITEMS.map((item, index) => {
            return (
              <Tab
                key={index}
                icon={item.icon}
                title={item.title}
                // isActive={location.pathname === item.to}
                handleClick={''}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
