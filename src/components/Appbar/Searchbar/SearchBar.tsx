// import * as React from 'react';
import GlassIcon from './MagnifyingGlassIconV2';
import styles from './SearchBar.module.css';

function SearchBar({placeholder, width, height}) {
  return (
    <div className={styles.container} style={{ width: width, height: height }}>
        <div className={styles.icon}>
          <GlassIcon />
        </div>
      <input
        className={styles.search}
        type="text"
        placeholder={placeholder}
        //"Busca una finca"
      />
    </div>
  );
}

export default SearchBar;
