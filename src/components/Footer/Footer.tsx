// import * as React from 'react';
// import LayoutPlaceholder from "../Layout/LayoutPlaceholder";
import styles from './Footer.module.css'
function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.brand}>AppMinistrador</p>
      <p>Todos los derechos reservados &copy; 2024</p>
    </div>
  );
}

export default Footer;
