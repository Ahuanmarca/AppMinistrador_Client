// import * as React from 'react';
// import DashboardPlaceholder from "../DashboardPlaceholder";
import MonthFeesPieChart from "./MonthFeesPieChart";
import styles from './MonthFees.module.css'
// import styles from './MonthFees.module.css';
function MonthFees() {
  return (
    // <DashboardPlaceholder placeholderText={"Cuotas del mes"} />
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Cuotas del mes</h1>
      </div>
      <MonthFeesPieChart></MonthFeesPieChart>
    </div>

  );
}

export default MonthFees;
