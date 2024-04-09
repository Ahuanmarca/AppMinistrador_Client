import styles from "./CashFlowDiagram.module.css";
// import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import data from "./data"
import CustomTooltipCashFlow from './CustomTooltipCashFlow'

function CashFlowDiagram() {
  return (
    <BarChart className={styles.App}
      width={640}
      height={200}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false} strokeWidth={0.5} />
      <XAxis dataKey="name" tick={{ fill: '#BCBCBC', fontSize: 12  }} tickLine={false} axisLine={{ stroke: 'transparent' }}/>
      <YAxis axisLine={false} tick={{ fill: '#BCBCBC', fontSize: 12 }} tickLine={false} domain={['dataMin', 'dataMax']}/>
      <Tooltip content={CustomTooltipCashFlow} /> 
      <Legend  payload={[
      { value: 'Ingresos', type: 'rect', color: 'var(--cashflow-income)' },
      { value: 'Gastos', type: 'rect', color: 'var(--cashflow-expenses)' }
    ]}
    wrapperStyle={{ fontSize: "10px",  padding: "6px"  }} 
    layout="horizontal"
        verticalAlign="top"
        align="right"
  />
      <Bar dataKey="Ingresos" stackId="a" fill="var(--cashflow-expenses)" radius={[1, 1, 3, 3]}/>
      <Bar dataKey="Gastos" stackId="a" fill="var(--cashflow-income)" radius={[6, 6, 0, 0]} />
    </BarChart>
  );
}

export default CashFlowDiagram;