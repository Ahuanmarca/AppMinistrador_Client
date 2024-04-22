// import React from 'react';
import styles from './CustomTooltipCashFlow.module.css';

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

function CustomTooltipCashFlow({ active, payload, label }) {
  if (active && payload && payload.length){
    // console.log('label:', label);
    
    const monthName = monthNames[label]; 

    return (
      <div className={styles['custom']}>
        <p className="label">{`Mes: ${monthName}`}</p>
        <p className="intro">{`Ingresos : ${payload[0].value}€`}</p>
        <p className="intro">{`Gastos : ${payload[1].value}€`}</p>
      </div>
    )
  }
  return null;
}

export default CustomTooltipCashFlow;
