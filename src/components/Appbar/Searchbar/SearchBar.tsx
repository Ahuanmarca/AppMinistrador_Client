// import * as React from 'react';
import GlassIcon from "./magnifyingGlassIcon";
import styles from './SearchBar.module.css';

function SearchBar() {
  return (
    <div className={styles.container}>
        <div className={styles.icon}>
          <GlassIcon></GlassIcon>
        </div>
      <input
        className={styles.search}
        type="text"
        placeholder="Busca una finca"
      />
    </div>
  );
}

export default SearchBar;
