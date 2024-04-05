import { Responsive, WidthProvider } from 'react-grid-layout';
const ResponsiveGridLayout = WidthProvider(Responsive);
import styled from 'styled-components';

const layout = [
  { i: "dashboard",           x: 0, y: 0, w: 9, h: 6 },
  { i: "total-inquilinos",    x: 0, y: 1, w: 2, h: 8 },
  { i: "total-propietarios",  x: 2, y: 1, w: 2, h: 8 },
  { i: "presidente",          x: 4, y: 1, w: 2, h: 8 },
  { i: "cuotas-del-mes",      x: 6, y: 1, w: 3, h: 16},
  { i: "ingresos-gastos",     x: 0, y: 2, w: 6, h: 16},
  { i: "incidencias",         x: 0, y: 3, w: 6, h: 14},
  { i: "proveedores",         x: 6, y: 2, w: 3, h: 22},
];

const GridItemWrapper = styled.div`
  background: #f5f5f5;
  border-radius: 10px;
  border: 1px solid hotpink;
`;

const GridItemContent = styled.div`
  padding: 8px;
`;

const Root = styled.div`
  padding: 16px;
`;

const GridLayout = () => {
  return (
    <Root>
      <ResponsiveGridLayout
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 9, md: 4, sm: 3, xs: 2, xxs: 1 }}
        rowHeight={10}
        width={1000}
      >
        <GridItemWrapper key="dashboard">
          <GridItemContent>Dashboard</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="total-inquilinos">
          <GridItemContent>Total Inquilinos</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="total-propietarios">
          <GridItemContent>Total Propietarios</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="presidente">
          <GridItemContent>Presidente</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="cuotas-del-mes">
          <GridItemContent>Cuotas del mes</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="ingresos-gastos">
          <GridItemContent>Ingresos vs. gastos</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="incidencias">
          <GridItemContent>Incidencias</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="proveedores">
          <GridItemContent>Proveedores</GridItemContent>
        </GridItemWrapper>
      </ResponsiveGridLayout>
    </Root>
  );
};

export default GridLayout;
