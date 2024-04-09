import { useCallback, useState } from "react";
import { Cell, PieChart, Pie, Sector } from "recharts";
import styles from './MonthFeesPieChart.module.css'

const data = [
  { name: "Pagado", value: 270.30 },
  { name: "Gastos", value: 923.28 }
];
const COLORS = ['var(--brand-color-main)', '#743043']
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g className={styles.chart}>
      <text style={{fontSize:'15px', fontWeight:'bold'}} x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} >
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      ><tspan style={{ fontWeight: 'bold', fontSize: '19px', fill: 'var(--cashflow-expenses)' }}>€</tspan> {`${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(${(percent * 100).toFixed(0)}%)`}
      </text>
    </g>
  );
};

function MonthFeesPieChart() {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <div className={styles.containerDiv}>
      <div className={styles.pieChartContainer}>
    <PieChart className={styles.container} width={500} height={300}>
      <Pie className={styles.pie}
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={data}
        cx={250}
        cy={150}
        innerRadius={40}
        outerRadius={60}
        fill="var(--brand-color-main)"
        dataKey="value"
        onMouseEnter={onPieEnter}
        startAngle={90}
        endAngle={450}
      >
        {data.map((entry, index) => (
          <Cell
          key={`cell-${index}`}
          fill={COLORS[index]}
          className={index === 1 ? styles.widerSegment : undefined}
          />
        ))}
      </Pie>
    </PieChart>
    </div>
    </div>
  );
}

export default MonthFeesPieChart;
