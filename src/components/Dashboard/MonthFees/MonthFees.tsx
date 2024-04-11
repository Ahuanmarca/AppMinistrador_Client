import * as React from 'react';
// import DashboardPlaceholder from "../DashboardPlaceholder";
import MonthFeesPieChart from "./MonthFeesPieChart";
import styles from './MonthFees.module.css'
import { DashboardContext } from "../../../contexts/DashboardContext";
function MonthFees() {

  // @ts-expect-error -- Property 'isLoading' does not exist on type '{}'.ts(2339)
  const { data, error, isLoading } = React.useContext(DashboardContext);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  const chartData = [
    { name: 'Pagado', value: Number(data.currentMonthFees.paid)},
    { name: 'Gastos', value: Number(data.currentMonthFees.fees)}
  ]

  const totalExpenses = chartData[0].value + chartData[1].value

  return (
    // <DashboardPlaceholder placeholderText={"Cuotas del mes"} />
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Cuotas del mes</h1>
        <h1 className={styles.expenses}>Total: {totalExpenses}€</h1>
      </div>
      <MonthFeesPieChart data={chartData}></MonthFeesPieChart>
    </div>

  );
}

export default MonthFees;
