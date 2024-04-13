import * as React from 'react';
import { PanelGroup, Panel } from 'react-resizable-panels';
import ResizeHandle from './ResizeHandle';
import styles from './Dashboard.module.css';

import DashboardHeader from './DashboardHeader';
import CashflowHistogram from './CashflowHistogram';
import PeopleCard from './PeopleCard';
import Incidences from './Incidences';
import MonthFees from './MonthFees';
import Providers from './Providers';
import { DashboardContext } from '../../contexts/DashboardContext';

function Dashboard() {
    // @ts-expect-error -- Property 'isLoading' does not exist on type '{}'.ts(2339)
  const {data, isLoading, error} = React.useContext(DashboardContext);
  
  
  if(isLoading){
    // return <div className={styles.spinner}>  <Circles color='var(--brand-color-main)' height={250} width={100}></Circles> </div>
    return (
      <div className={styles.PanelGroupWrapper}>
        <PanelGroup direction="vertical">
          <Panel defaultSize={12}>
            <DashboardHeader />
          </Panel>
          <ResizeHandle />
          <Panel defaultSize={88}>
            <PanelGroup direction="horizontal">
              <Panel defaultSize={63} minSize={50}>
                <PanelGroup direction="vertical">
                  <Panel defaultSize={20}>
                    <PanelGroup direction="horizontal">
                      <Panel>
                        <PeopleCard
                          placeholderText={'Total Inquilinos'}
                          isPresident={false}
                          data={''}
                        />
                      </Panel>
                      <ResizeHandle />
                      <Panel>
                        <PeopleCard
                          placeholderText={'Total Propietarios'}
                          isPresident={false}
                          data={''}
                        />
                      </Panel>
                      <ResizeHandle />
                      <Panel>
                        <PeopleCard
                          placeholderText={'Presidente'}
                          isPresident={true}
                          data={''}
                        />
                      </Panel>
                    </PanelGroup>
                  </Panel>
                  <ResizeHandle />
                  <Panel defaultSize={37}>
                    <CashflowHistogram height={'100%'} />
                  </Panel>
                  <ResizeHandle />
                  <Panel>
                    {/* INCIDENCIAS TABLE */}
                    <Incidences />
                  </Panel>
                </PanelGroup>
              </Panel>
              <ResizeHandle />
              <Panel >
                <PanelGroup direction="vertical">
                  <Panel defaultSize={40}>
                    <MonthFees height={'100%'} />
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
    )
  }

  if(error) {
    return <div>Error</div>
  }
  const newData = data;
  console.log('allData',data);
  
  const buildingData = {
    owners: Number(newData.ownersCount),
    neighbours: Number(newData.neighboursCount[0].count),
    neighboursCount: newData.neighboursCount,
    president: {
      name: `${newData.buildingData.president.forename} ${newData.buildingData.president.surname}` ,
      phone: Number(newData.buildingData.president.phone_number),
      pic: newData.users[0].portrait_url,
    },
  }

  // console.log('buildingData',buildingData);
  
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
                        data={buildingData}
                        isPresident={false}
                      />
                    </Panel>
                    <ResizeHandle />
                    <Panel>
                      <PeopleCard
                        placeholderText={'Total Propietarios'}
                        data={buildingData}
                        isPresident={false}
                      />
                    </Panel>
                    <ResizeHandle />
                    <Panel>
                      <PeopleCard
                        placeholderText={'Presidente'}
                        data={buildingData}
                        isPresident={true}
                      />
                    </Panel>
                  </PanelGroup>
                </Panel>
                <ResizeHandle />
                <Panel defaultSize={37}>
                  <CashflowHistogram height={'100%'} />
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
                  <MonthFees height={'100%'} />
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
