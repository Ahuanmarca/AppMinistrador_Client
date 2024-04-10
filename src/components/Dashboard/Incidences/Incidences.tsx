import * as React from 'react';
import { DashboardContext } from '../../../contexts/DashboardContext';
// import { useReactTable } from '@tanstack/react-table';

import styles from './Incidences.module.css';
import IncidencesTable from './IncidencesTable';

function Incidences() {
  // @ts-expect-error -- Property 'isLoading' does not exist on type '{}'.ts(2339)
  const { data, error, isLoading } = React.useContext(DashboardContext);
 
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <IncidencesTable incidences={data.buildingData.incidences} />
      </div>
    </div>
  );
}

export default Incidences;
