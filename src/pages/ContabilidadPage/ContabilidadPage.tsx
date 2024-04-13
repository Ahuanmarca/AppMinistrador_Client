// import * as React from 'react';
// import PagePlaceholder from "../PagePlaceholder";
import ResizeHandle from '../../components/Dashboard/ResizeHandle';
import styles from './ContabilidadPage.module.css';
import MonthFees from "../../components/Dashboard/MonthFees";
import CashflowHistogram from '../../components/Dashboard/CashflowHistogram';
import { PanelGroup, Panel } from 'react-resizable-panels';
import ContratoIcon from '../../components/Icons/ContratoIcon';
// import CuentaIcon from '../../components/Icons/CuentaIcon';
// import FacturaIcon from '../../components/Icons/FacturaIcon';
// import Tab from '../../components/Sidebar/Tab';

const BUTTONS = [
  { to: '/dashboard', icon: <ContratoIcon></ContratoIcon>, title: 'Contratos'},
  { to: '/dashboard', icon: <ContratoIcon></ContratoIcon>, title: 'Cuentas'},
  { to: '/dashboard', icon: <ContratoIcon></ContratoIcon>, title: 'Facturas'},
  { to: '/dashboard', icon: <ContratoIcon></ContratoIcon>, title: 'Informes'},
  { to: '/dashboard', icon: <ContratoIcon></ContratoIcon>, title: 'Legal' },
  { to: '/dashboard', icon: <ContratoIcon></ContratoIcon>, title: 'Pagos'},
];

function ContabilidadPage() {
  return(
    <div className={styles.container}>
      <h1 className={styles.title}>Contabilidad</h1>
    <PanelGroup direction={'horizontal'}>
      {/* <div className={styles.container}> */}
        <Panel defaultSize={50} minSize={30}>
          {/* <div className={styles.pieContainer}> */}
            <MonthFees height={'100%'}></MonthFees>
          {/* </div> */}
        </Panel>
        <ResizeHandle></ResizeHandle>
        <Panel defaultSize={50} minSize={40}>
          {/* <div className={styles.diagramContainer}> */}
            <CashflowHistogram height={'100%'}></CashflowHistogram>
          {/* </div> */}
        </Panel>
      {/* </div> */}
    </PanelGroup>
    <div className={styles.data}>
        <div className={styles.tabGroup}>
          {BUTTONS.map((button, index) => {
            return (
              <button className={styles.button}
                key={index}
              >
                {button.icon}
                {button.title}</button>
            );
          })}
        </div>
      </div>
    </div>
  ) 

  
}

export default ContabilidadPage;
