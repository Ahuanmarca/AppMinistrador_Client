// import * as React from 'react';
// import PagePlaceholder from "../PagePlaceholder";
import ResizeHandle from '../../components/Dashboard/ResizeHandle';
import styles from './ContabilidadPage.module.css';
import MonthFees from "../../components/Dashboard/MonthFees";
import CashflowHistogram from '../../components/Dashboard/CashflowHistogram';
import { PanelGroup, Panel } from 'react-resizable-panels';

function ContabilidadPage() {
  return(
    <div className={styles.container}>
      <h1 className={styles.title}>Contabilidad</h1>
    <PanelGroup direction={'horizontal'}>
      {/* <div className={styles.container}> */}
        <Panel defaultSize={50} minSize={30}>
          {/* <div className={styles.pieContainer}> */}
            <MonthFees></MonthFees>
          {/* </div> */}
        </Panel>
        <ResizeHandle className={styles.handle}></ResizeHandle>
        <Panel defaultSize={50} minSize={40}>
          {/* <div className={styles.diagramContainer}> */}
            <CashflowHistogram></CashflowHistogram>
          {/* </div> */}
        </Panel>
      {/* </div> */}
    </PanelGroup>
    <div className={styles.data}></div>
    {/* <PanelGroup direction={'horizontal'}>
      
    </PanelGroup> */}
    </div>
  ) 

  
}

export default ContabilidadPage;
