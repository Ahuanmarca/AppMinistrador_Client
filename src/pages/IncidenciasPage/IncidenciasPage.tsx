import * as React from 'react';
import Incidences from '../../components/Dashboard/Incidences';
import styles from './IncidenciasPage.module.css';
import { PanelGroup, Panel } from 'react-resizable-panels';
// TODO: Refactor ResizeHandle to be a component that can be used in any page
import ResizeHandle from '../../components/Dashboard/ResizeHandle';
// TODO: Refactor IncidentIcon to be a component that can be used in any page
import IncidentIcon from '../../components/Sidebar/icons/IncidentIcon';
import useToggle from '../../hooks/use-toggle.hook';
import Modal from '../../components/Modal';
import IncidenceDetails from '../../components/IncidenceDetails';
import ReportIncidence from '../../components/ReportIncidence';

function IncidenciasPage() {
  const [isReportModalVisible, toggleIsReportModalVisible] = useToggle(false);
  const [selectedIncidence, setSelectedIncidence] = React.useState("");

  return (
    <div className={styles.Wrapper}>
      <PanelGroup direction={'horizontal'}>
          {/* <h2>Incidencias</h2> */}
        <Panel defaultSize={60} className={styles.IncidencesPanel}>
          <Incidences setSelectedIncidence={setSelectedIncidence} />
        </Panel>
        <ResizeHandle />
        <Panel defaultSize={40}>
          <div className={styles.container}>
            {/* <div style={{ height: '80%', maxHeight: '80%' }}> */}
            <div>
              <div className={styles.PanelContent}>
                <IncidenceDetails selectedIncidence={selectedIncidence} />
              </div>
            </div>
            <div style={{ height: '15%' }}>
              <div className={styles.PanelContent}>
                <div className={styles.TabGroup}>
                  <button
                    className={styles.ReportButton}
                    // @ts-expect-error -- Type 'boolean | (() => void)' is not assignable to type '() => void'.
                    onClick={toggleIsReportModalVisible}
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
      {isReportModalVisible && <Modal
        title="Reportar Incidencia" 
        handleDismiss={toggleIsReportModalVisible}
      >
        <ReportIncidence
          handleDismiss={toggleIsReportModalVisible} 
        />
      </Modal>}
    </div>
  );
}

export default IncidenciasPage;
