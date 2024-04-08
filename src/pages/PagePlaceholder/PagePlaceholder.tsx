// import * as React from 'react';
import styles from './PagePlaceholder.module.css';

function PagePlaceholder({ placeholderText }: { placeholderText: string }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.placeholderText}>
          {placeholderText}
        </p>
      </div>
    </div>
  );
}

export default PagePlaceholder;
