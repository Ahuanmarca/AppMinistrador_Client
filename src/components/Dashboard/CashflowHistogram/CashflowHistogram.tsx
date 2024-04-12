import * as React from 'react';
// import DashboardPlaceholder from "../DashboardPlaceholder";
import CashFlowDiagram from "./CashFlowDiagram";
import styles from './CashFlowHistogram.module.css';
import { DashboardContext } from "../../../contexts/DashboardContext";
// import {Circles} from 'react-loader-spinner';

function CashflowHistogram() {

  // @ts-expect-error -- Property 'isLoading' does not exist on type '{}'.ts(2339)
  const {data, isLoading, error} = React.useContext(DashboardContext);

  if (isLoading) {
    // return <div className={styles.loading}><Circles color='var(--brand-color-main)'></Circles></div>
    return <div className={styles.container}>
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>Ingresos vs. Gastos</h1>
            </div>
            <div className={styles.chartContainer}>
              <CashFlowDiagram data={data}></CashFlowDiagram>
            </div>
          </div>


  }

  if (error) {
    return <h1>Error</h1>;
  }
  const cashFlow = data.cashFlow;

  const cashFlowData = cashFlow.map(item => ({
    Mes: Number(item.month),
    Gastos: Math.abs(Number(item.outcome)),
    Ingresos: Number(item.income)
  }));

 console.log('cashFlowDataMapped', cashFlowData);

  
  return (
    // <DashboardPlaceholder placeholderText={"Ingresos vs. gastos"} /> 
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Ingresos vs. Gastos</h1>
      </div>
      <div className={styles.chartContainer}>
      <CashFlowDiagram data={cashFlowData}></CashFlowDiagram>
      </div>
    </div>
  );
}

export default CashflowHistogram;
