// import * as React from 'react';
import ResizeHandle from '../../components/Dashboard/ResizeHandle';
import styles from './ContabilidadPage.module.css';
import MonthFees from "../../components/Dashboard/MonthFees";
import CashflowHistogram from '../../components/Dashboard/CashflowHistogram';
import { PanelGroup, Panel } from 'react-resizable-panels';
//ICONS
import ContratoIcon from '../../components/Icons/ContratoIcon';
import FinanceIcon from '../../components/Sidebar/icons/FinanceIcon';
import FacturaIcon from '../../components/Icons/FacturaIcon';
import InformeIcon from '../../components/Icons/InformeIcon';
import LegalIcon from '../../components/Icons/LegalIcon';
import PagoIcon from '../../components/Icons/PagoIcon';

const BUTTONS = [
  { to: '/dashboard', icon: <ContratoIcon></ContratoIcon>, title: 'Contratos'},
  { to: '/dashboard', icon: <FinanceIcon color={'#044b59'}></FinanceIcon>, title: 'Cuentas'},
  { to: '/dashboard', icon: <FacturaIcon></FacturaIcon>, title: 'Facturas'},
  { to: '/dashboard', icon: <InformeIcon></InformeIcon>, title: 'Informes'},
  { to: '/dashboard', icon: <LegalIcon></LegalIcon>, title: 'Legal' },
  { to: '/dashboard', icon: <PagoIcon></PagoIcon>, title: 'Pagos'},
];

function ContabilidadPage() {
  return(
    <div className={styles.container}>
      <h1 className={styles.title}>Contabilidad</h1>
    <PanelGroup direction={'horizontal'}>
        <Panel defaultSize={50} minSize={30}>
            <MonthFees height={'100%'}></MonthFees>
        </Panel>
        <ResizeHandle></ResizeHandle>
        <Panel defaultSize={50} minSize={40}>
            <CashflowHistogram height={'100%'}></CashflowHistogram>
        </Panel>
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
