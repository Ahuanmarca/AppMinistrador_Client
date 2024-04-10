// import * as React from 'react';
// import DashboardPlaceholder from "../DashboardPlaceholder";
import styles from './Providers.module.css'
import SearchBar from '../../Appbar/Searchbar/SearchBar';
function Providers() {
  return (
    // <DashboardPlaceholder placeholderText={"Proveedores"} />
  <div className={styles.container}>
    <div className={styles.titleWrapper}>
      <h1 className={styles.title}>Proveedores</h1>
    </div>
    <div className={styles.searchWrapper}>
      <h2 className={styles.searchTitle}>Nombre</h2>
      <SearchBar width={'100%'} height={'34px'} placeholder={'Ej: Érika López'}></SearchBar>
    </div>
  </div>);
}

export default Providers;
