// import React from 'react';
import styles from './CustomTooltipCashFlow.module.css';

function CustomTooltipCashFlow({ active, payload, label }) {
  if (active && payload && payload.length){
    return (
      <div className={styles['custom']}>
        <p className="label">{`${label}`}</p>
        <p className="intro">{`Ingresos : ${payload[0].value}€`}</p>
        <p className="intro">{`Gastos : ${payload[1].value}€`}</p>
      </div>
    )
  }
  return null;
}

export default CustomTooltipCashFlow;
