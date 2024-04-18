import * as React from 'react';
import { DashboardContext } from '../../../contexts/DashboardContext';
import { useLocation } from 'react-router-dom';
import { Incidence } from '../../../types/Incidence';
import styles from './Incidences.module.css';
import { formatDateTime } from './helpers';
import { Circles } from 'react-loader-spinner';

import IncidencesTable from './IncidencesTable';

function Incidences({ setSelectedIncidence }) {
  // @ts-expect-error data is possibly undefined
  const { data, error, isLoading } = React.useContext(DashboardContext);
  const location = useLocation() as { pathname: string };
  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Circles color="var(--brand-color-main)" height={250} width={100} />;
      </div>
    ) 
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Format the data to be used in the table
  const incidences: Array<Incidence> = data.buildingData.incidences.map(
    (incidence) => {
      return {
        id: incidence.id,
        title: incidence.title,
        description: incidence.description,
        date: formatDateTime(incidence.date, incidence.time),
        category: incidence.category,
        user: incidence.users.people.forename,
        status: incidence.status,
      };
    }
  );
  const showTitle = location.pathname === '/dashboard';
  return (
    <div className={styles.wrapper}>
<<<<<<< HEAD
      {showTitle && <h2 className={styles.title}>Incidencias</h2>} 
      <IncidencesTable data={incidences} />
=======
      <IncidencesTable data={incidences} setSelectedIncidence={setSelectedIncidence} />
>>>>>>> develop
    </div>
  );
}

export default Incidences;
