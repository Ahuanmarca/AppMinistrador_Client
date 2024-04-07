// import * as React from 'react';
import logo from './Logo.svg';
import styles from './Brand.module.css';

function Brand() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img className={styles.brandLogo} src={logo} alt="" />
        <p className={styles.brandText}>AppMinistrador</p>
      </div>
    </div>
  );
}

export default Brand;
