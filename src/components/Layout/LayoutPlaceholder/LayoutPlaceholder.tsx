// import * as React from 'react';
import styles from './LayoutPlaceholder.module.css';

function LayoutPlaceholder({ placeholderText }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {placeholderText}
      </div>
    </div>
  );
}

export default LayoutPlaceholder;
