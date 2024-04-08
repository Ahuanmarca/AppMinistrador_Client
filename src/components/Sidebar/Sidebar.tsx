import * as React from 'react';
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
  const [activeTab, setActiveTab] = React.useState(0);

  const tabs = [
    { icon: DashboardIcon, title: 'Dashboard', isActive: true },
    { icon: IncidentIcon, title: 'Incidencias', isActive: false },
    { icon: FinanceIcon, title: 'Contabilidad', isActive: false },
    { icon: MessageIcon, title: 'Mensajes', isActive: false },
  ];

  const menuItems = [
    { icon: SettingsIcon, title: 'Configuración', isActive: false },
    { icon: HelpIcon, title: 'Ayuda', isActive: false },
  ]

  function handleTabClick(index: number) {
    setActiveTab(index);
  }

  return (
    <div className={styles.container}>
      <Brand />
      <div className={styles.tabGroupWrapper}>
        <div className={styles.tabGroup}>
          {tabs.map((tab, index) => {
            return (
              <Tab
                key={index}
                icon={tab.icon}
                title={tab.title}
                isActive={activeTab === index}
                handleClick={() => handleTabClick(index)}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.bottomMenuWrapper}>
        <div className={styles.bottomMenuGroup}>
          {menuItems.map((item, index) => {
            return (
              <Tab
                key={index}
                icon={item.icon}
                title={item.title}
                isActive={false}
                handleClick={() => console.debug('Clicked Menu Item')}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
