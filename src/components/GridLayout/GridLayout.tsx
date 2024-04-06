import { Responsive, WidthProvider } from 'react-grid-layout';
const ResponsiveGridLayout = WidthProvider(Responsive);
import styled from 'styled-components';

const layout = [
  { i: 'dashboard-header', x: 0, y: 0, w: 9, h: 12, static: true },
  { i: 'total-inquilinos', x: 0, y: 12, w: 2, h: 16 },
  { i: 'total-propietarios', x: 2, y: 12, w: 2, h: 16 },
  { i: 'presidente', x: 4, y: 12, w: 2, h: 16 },
  { i: 'ingresos-gastos', x: 0, y: 28, w: 6, h: 32 },
  { i: 'incidencias', x: 0, y: 60, w: 6, h: 28 },
  { i: 'cuotas-del-mes', x: 6, y: 12, w: 3, h: 32 },
  { i: 'proveedores', x: 6, y: 44, w: 3, h: 44 },
];

const GridItemWrapper = styled.div`
  background: #f5f5f5;
  border: 1px dashed hotpink;
`;

const GridLayout = () => {
  return (
    <ResponsiveGridLayout
      layouts={{ lg: layout }}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 9, md: 4, sm: 3, xs: 2, xxs: 1 }}
      rowHeight={10}
      width={1000}
      margin={{ lg: [0, 0] }}
      containerPadding={{ lg: [0, 0] }}
      useCSSTransforms={true}
      isBounded={true}
      // allowOverlap={true}
      // autoSize={true}
      // compactType="horizontal"
    >
      <GridItemWrapper key="dashboard-header">
        Dashboard
      </GridItemWrapper>
      <GridItemWrapper key="total-inquilinos">
        Total Inquilinos
      </GridItemWrapper>
      <GridItemWrapper key="total-propietarios">
        Total Propietarios
      </GridItemWrapper>
      <GridItemWrapper key="presidente">
        President
      </GridItemWrapper>
      <GridItemWrapper key="cuotas-del-mes">
        Cuotas del mes
      </GridItemWrapper>
      <GridItemWrapper key="ingresos-gastos">
        Ingresos vs. gastos
      </GridItemWrapper>
      <GridItemWrapper key="incidencias">
        Incidencias
      </GridItemWrapper>
      <GridItemWrapper key="proveedores">
        Proveedores
      </GridItemWrapper>
    </ResponsiveGridLayout>
  );
};

export default GridLayout;
