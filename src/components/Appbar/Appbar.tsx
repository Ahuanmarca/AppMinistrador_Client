// import * as React from 'react';
import SearchBar from "./SearchBar";
import Avatar from "./Avatar";
import Bell from "./Bell";
import styles from "./Appbar.module.css";


function Appbar() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.searchBarWrapper}>
            <SearchBar></SearchBar>
        </div>
        <div className={styles.wrapper}>
          <Bell></Bell>
          <Avatar></Avatar>
        </div>
      </div>
    </>
  );
}

export default Appbar;
