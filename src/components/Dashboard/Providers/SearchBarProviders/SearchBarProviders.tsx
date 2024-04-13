// import * as React from 'react';
import GlassIcon from './../../../Appbar/Searchbar/MagnifyingGlassIconV2';
import styles from './SearchBarProviders.module.css';

function SearchBarProviders({placeholder, width, height, onChange}) {
  function handleChange(event){
    if (onChange) {
      onChange(event.target.value);
    }
  }

  return (
  <div className={styles.container} style={{ width: width, height: height }}>
      <div className={styles.icon}>
        <GlassIcon />
      </div>
    <input
      className={styles.search}
      type="text"
      placeholder={placeholder}
      onChange={handleChange}
      //"Busca una finca"
    />
  </div>
  );
}

export default SearchBarProviders;
