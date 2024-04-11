import * as React from 'react';
import { DashboardContext } from '../../../contexts/DashboardContext';
import { Incidence } from '../../../types/Incidence';
import * as debug from './debugHelper';
import styles from './Incidences.module.css';
import IncidencesTable from './IncidencesTable';
import { formatDateTime } from './helpers';

const DEBUG = false;

function Incidences() {
  // @ts-expect-error -- Property 'isLoading' does not exist on type '{}'.ts(2339)
  const { data, error, isLoading } = React.useContext(DashboardContext);
 
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  // DEBUG && debug.logFirst(data.buildingData.incidences);
  // DEBUG && debug.testTimeFormatting(data.buildingData.incidences);

  const incidences: Array<Incidence> = data.buildingData.incidences.map((incidence) => {
    return {
      id: incidence.id,
      title: incidence.title,
      description: incidence.description,
      date: formatDateTime(incidence.date, incidence.time),
      category: incidence.category,
      user: incidence.users.people.forename,
      status: incidence.status,
    };
  });  

  DEBUG && debug.logBuiltIncidenceObject(incidences);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <IncidencesTable incidences={incidences}/>
      </div>
    </div>
  );
}

export default Incidences;
