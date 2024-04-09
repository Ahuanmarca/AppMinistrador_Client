// import * as React from 'react';
// import DashboardPlaceholder from "../DashboardPlaceholder";
import CashFlowDiagram from "./CashFlowDiagram";
import styles from './CashFlowHistogram.module.css';

function CashflowHistogram() {
  return (
    // <DashboardPlaceholder placeholderText={"Ingresos vs. gastos"} /> 
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Ingresos vs. Gastos</h1>
      </div>
      <div className={styles.chartContainer}>
      <CashFlowDiagram></CashFlowDiagram>
      </div>
    </div>
  );
}

export default CashflowHistogram;
