// import * as React from 'react';
// import DashboardPlaceholder from "../DashboardPlaceholder";
import styles from "./dashboard.module.css";
import BuildingDropdown from "..//BuildingDropdown/BuildingDropdown.jsx";

function DashboardHeader() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.wrapperTitle}>
        <h1 className={styles.title}>Dashboard</h1>
      </div>
      <div className={styles.wrapperDropdown}>
        <BuildingDropdown></BuildingDropdown>
      </div>
    </div>
    </>
  );
}

export default DashboardHeader;
