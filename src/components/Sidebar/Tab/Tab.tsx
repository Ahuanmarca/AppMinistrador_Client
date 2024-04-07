// import * as React from 'react';
import styles from './Tab.module.css';

function Tab({ icon: Icon, title = 'Title Placeholder', isActive = false, handleClick }) {
  const iconColor = isActive ? 'white' : '#044b59';

  const containerClass = isActive
    ? `${styles.container}`
    : `${styles.container} ${styles.inactiveContainer}`

  const textClass = isActive
    ? `${styles.tabText}`
    : `${styles.tabText} ${styles.inactiveTabText}`

  return (
    <div className={containerClass} onClick={handleClick}>
      <Icon color={iconColor} />
      <p className={textClass}>{title}</p>
    </div>
  );
}

export default Tab;
