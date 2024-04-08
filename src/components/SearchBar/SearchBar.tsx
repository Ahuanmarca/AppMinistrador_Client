// import * as React from 'react';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import styles from './SearchBar.module.css';

function SearchBar() {
  return (
    <div>
      <input
        className={styles.search}
        type="text"
        placeholder="Busca una finca…"
      />
        <MagnifyingGlassIcon/>
    </div>
  );
}

export default SearchBar;
