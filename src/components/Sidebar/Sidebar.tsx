import * as React from 'react';
import styles from './Sidebar.module.css';
import { useNavigate } from 'react-router-dom';

import DashboardIcon from './icons/DashboardIcon';
import IncidentIcon from './icons/IncidentIcon';
import FinanceIcon from './icons/FinanceIcon';
import MessageIcon from './icons/MessageIcon';
import SettingsIcon from './icons/SettingsIcon';
import HelpIcon from './icons/HelpIcon';
import Brand from './Brand';
import Tab from './Tab';

function Sidebar() {
  const [activeTab, setActiveTab] = React.useState(0);
  const navigate = useNavigate();

  const TABS = [
    { to: '/dashboard',     icon: DashboardIcon,  title: 'Dashboard',     isActive: true },
    { to: '/incidencias',   icon: IncidentIcon,   title: 'Incidencias',   isActive: false },
    { to: '/contabilidad',  icon: FinanceIcon,    title: 'Contabilidad',  isActive: false },
    { to: '/mensajes',      icon: MessageIcon,    title: 'Mensajes',      isActive: false },
  ];

  const MENU_ITEMS = [
    { to: '/configuracion', icon: SettingsIcon,   title: 'Configuración', isActive: false },
    { to: '/ayuda',         icon: HelpIcon,       title: 'Ayuda',         isActive: false },
  ]

  function handleTabClick(index: number, to: string) {
    navigate(to);
    setActiveTab(index);
  }

  function handleMenuItemClick(to: string) {
    setActiveTab(-1);
    navigate(to);
  }

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
                isActive={activeTab === index}
                handleClick={() => handleTabClick(index, tab.to)}
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
                isActive={false}
                handleClick={() => handleMenuItemClick(item.to)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
