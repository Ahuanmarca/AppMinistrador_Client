import { PanelGroup, Panel } from 'react-resizable-panels';
import ResizeHandle from './ResizeHandle';
import styles from './Dashboard.module.css';

import DashboardHeader from './DashboardHeader';
import CashflowHistogram from './CashflowHistogram';
import PeopleCard from './PeopleCard';
import Incidences from './Incidences';
import MonthFees from './MonthFees';
import Providers from './Providers';

function Dashboard() {
  return (
    <div className={styles.PanelGroupWrapper}>
      <PanelGroup direction="vertical">
        <Panel defaultSize={10}>
          <DashboardHeader />
        </Panel>
        <ResizeHandle />
        <Panel defaultSize={90}>
          <PanelGroup direction="horizontal">
            <Panel defaultSize={63} minSize={50}>
              <PanelGroup direction="vertical">
                <Panel defaultSize={20}>
                  <PanelGroup direction="horizontal">
                    <Panel>
                      <PeopleCard
                        placeholderText={'Total Inquilinos'}
                        isPresident={false}
                      />
                    </Panel>
                    <ResizeHandle />
                    <Panel>
                      <PeopleCard
                        placeholderText={'Total Propietarios'}
                        isPresident={false}
                      />
                    </Panel>
                    <ResizeHandle />
                    <Panel>
                      <PeopleCard
                        placeholderText={'Presidente'}
                        isPresident={true}
                      />
                    </Panel>
                  </PanelGroup>
                </Panel>
                <ResizeHandle />
                <Panel defaultSize={37}>
                  <CashflowHistogram />
                </Panel>
                <ResizeHandle />
                <Panel>
                  {/* INCIDENCIAS TABLE */}
                  <Incidences />
                </Panel>
              </PanelGroup>
            </Panel>
            <ResizeHandle />
            <Panel defaultSize={37} minSize={20}>
              <PanelGroup direction="vertical">
                <Panel defaultSize={40} >
                  <MonthFees />
                </Panel>
                <ResizeHandle />
                <Panel defaultSize={60}>
                  <Providers /> {/* // TODO: Proveedores */}
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
