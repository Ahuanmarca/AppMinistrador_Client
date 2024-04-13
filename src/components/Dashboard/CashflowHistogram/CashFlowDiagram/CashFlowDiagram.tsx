import styles from "./CashFlowDiagram.module.css";
// import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend, 
  ResponsiveContainer
} from "recharts";
import CustomTooltipCashFlow from './CustomTooltipCashFlow'

const monthNames = {
  1: 'Ene',
  2: 'Feb',
  3: 'Mar',
  4: 'Abr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Ago',
  9: 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dic'
};

function CashFlowDiagram({data}) {
  // console.log('data CashflowDiagram', data);

  const mapMonthName = (monthNumber) => {
    return monthNames[monthNumber];
  };
  return (
    <ResponsiveContainer height="100%" width="90%">
    <BarChart className={styles.App}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false} strokeWidth={0.5} />
      <XAxis 
        dataKey="Mes"
        tickFormatter={mapMonthName}
        tick={{ fill: '#BCBCBC', fontSize: 12  }}
        tickLine={false}
        axisLine={{ stroke: 'transparent' }}/>
      <YAxis
        axisLine={false}
        tick={{ fill: '#BCBCBC', fontSize: 12 }}
        tickLine={false}
        tickCount={7}
        domain={['dataMin', 'dataMax']}/>
      <Tooltip content={CustomTooltipCashFlow} /> 
      <Legend  payload={[
      { value: 'Ingresos', type: 'rect', color: 'var(--cashflow-income)' },
      { value: 'Gastos', type: 'rect', color: 'var(--cashflow-expenses)' }
    ]}
    wrapperStyle={{ fontSize: "10px",  padding: "6px" }} 
    layout="horizontal"
        verticalAlign="top"
        align="right"
  />
      <Bar
        dataKey="Ingresos"
        stackId="a"
        fill="var(--cashflow-expenses)"
        radius={[1, 1, 3, 3]}/>
      <Bar
        dataKey="Gastos"
        stackId="a" 
        fill="var(--cashflow-income)"radius={[6, 6, 0, 0]} />
    </BarChart>
    </ResponsiveContainer>
  );
}

export default CashFlowDiagram;