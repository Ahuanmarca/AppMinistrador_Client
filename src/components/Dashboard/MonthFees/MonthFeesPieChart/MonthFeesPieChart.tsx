import { useCallback, useState } from "react";
import { Cell, PieChart, Pie, ResponsiveContainer } from "recharts";
import styles from './MonthFeesPieChart.module.css'

/* RECHART'S PIECHART SHAPE*/
import renderActiveShape from './renderActiveShape.jsx';

const COLORS = ['var(--brand-color-main)', '#743043']

function MonthFeesPieChart({data}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          className={styles.pie}
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          innerRadius="30%"
          outerRadius="50%"
          fill="var(--brand-color-main)"
          dataKey="value"
          onMouseEnter={onPieEnter}
          startAngle={90}
          endAngle={450}
        >
          {data.map((_entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index]}
              className={index === 1 ? styles.widerSegment : undefined}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default MonthFeesPieChart;
