import { PanelGroup, Panel } from 'react-resizable-panels';
import ResizeHandle from './ResizeHandle';
import styles from './shared.module.css';

import DashboardHeader from './DashboardHeader';
import CashflowHistogram from './CashflowHistogram';
import PeopleCard from './PeopleCard';
import Incidences from './Incidences';
import MonthFees from './MonthFees';
import Providers from './Providers';

function Dashboard() {
  return (
    <div className={styles.PanelGroupWrapper}>
      <PanelGroup className={styles.PanelGroup} direction="vertical">

        <Panel className={styles.PanelRow} defaultSize={12}>
          <div className={styles.Centered}>
            <DashboardHeader /> {/* // TODO: Dashboard Title & Building Dropdown Menu */}
          </div>
        </Panel>

        <Panel className={styles.PanelRow} defaultSize={88}>
          <PanelGroup className={styles.PanelGroup} direction="horizontal">
            <Panel className={styles.PanelRow} defaultSize={63} minSize={50}>
              <PanelGroup className={styles.PanelGroup} direction="vertical">
                <Panel className={styles.PanelRow} defaultSize={20}>
                  <PanelGroup className={styles.PanelGroup} direction="horizontal">
                    <Panel className={styles.PanelRow}>
                      <div className={styles.Centered}>
                        <PeopleCard placeholderText={"Total Inquilinos"} /> {/* // TODO: Total Inquilinos (Card) */}
                      </div>
                    </Panel>
                    <Panel className={styles.PanelRow}>
                      <div className={styles.Centered}>
                        <PeopleCard placeholderText={"Total Propietarios"} /> {/* // TODO: Total Propietarios (Card) */}
                      </div>
                    </Panel>
                    <Panel className={styles.PanelRow}>
                      <div className={styles.Centered}>
                        <PeopleCard placeholderText={"Presidente"} /> {/* // TODO: Presidente */}
                      </div>
                    </Panel>
                  </PanelGroup>
                </Panel>
                <Panel className={styles.PanelRow} defaultSize={37}>
                  <div className={styles.Centered}>
                    <CashflowHistogram /> {/* // TODO: Ingresos vs. gastos */}
                  </div>
                </Panel>
                <Panel className={styles.PanelRow}>
                  {/* INCIDENCIAS TABLE */}
                  <div className={styles.Centered}>
                    <Incidences /> {/* // TODO: Incidencias */}
                  </div>
                </Panel>
              </PanelGroup> 
            </Panel>
            <ResizeHandle className={styles.ResizeHandle} />
            <Panel className={styles.PanelRow} defaultSize={37} minSize={20}>
              <PanelGroup className={styles.PanelGroup} direction="vertical">
                <Panel className={styles.PanelRow} defaultSize={40}>
                  <div className={styles.Centered}>
                    <MonthFees /> {/* // TODO: Cuotas del mes */}
                  </div>
                </Panel>
                <Panel className={styles.PanelRow} defaultSize={60}>
                  <div className={styles.Centered}>
                    <Providers /> {/* // TODO: Proveedores */}
                  </div>
                </Panel>
              </PanelGroup>
            </Panel>
          </PanelGroup>
        </Panel>
      </PanelGroup>


    </div>
  );
}

export default Dashboard;
