// import * as React from 'react';
import styles from './DashboardPlaceholder.module.css';

function DashboardPlaceholder({ placeholderText }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {placeholderText}
      </div>
    </div>
  );
}

export default DashboardPlaceholder;
