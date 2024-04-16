// import * as React from 'react';
// import PagePlaceholder from "../PagePlaceholder";
import Incidences from '../../components/Dashboard/Incidences';
import styles from './IncidenciasPage.module.css';
import { PanelGroup, Panel } from 'react-resizable-panels';
// TODO: Refactor ResizeHandle to be a component that can be used in any page
import ResizeHandle from '../../components/Dashboard/ResizeHandle';
// TODO: Refactor IncidentIcon to be a component that can be used in any page
import IncidentIcon from '../../components/Sidebar/icons/IncidentIcon';

function IncidenciasPage() {
  return (
    <div className={styles.Wrapper}>
      <h2>Incidencias</h2>
      <PanelGroup direction={'horizontal'}>
        <Panel defaultSize={60}>
          <Incidences />
        </Panel>
        <ResizeHandle />
        <Panel defaultSize={40}>
          <div style={{ height: "100%" }}>
            <div style={{ height: '70%' }}>
              <div className={styles.PanelContent}>
                <div className="flex-center-within">Details</div>
              </div>
            </div>
            <div style={{ height: '30%' }}>
              <div className={styles.PanelContent}>
                <div className={styles.TabGroup}>
                  <button
                    className={styles.ReportButton}
                  >
                    <IncidentIcon></IncidentIcon>
                    Reportar Incidencia
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
}

export default IncidenciasPage;
