import * as React from 'react';
import { DashboardContext } from '../../contexts/DashboardContext';
import { Circles } from 'react-loader-spinner';
import _ from 'lodash';
import { format } from 'date-fns';
import styles from './IncidenceDetails.module.css';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';

// TODO: Refactor StatusButton to be a component that can be used in any page
import StatusButton from '../Dashboard/Incidences/IncidencesTable/StatusButton';

// TODO: Refactor formatDateTime to be a helper function that can be used in any page
function formatDateTime(date: string, time: string) {
  const formattedTime = format(new Date(time), 'HH:mm');
  const formattedDate = format(new Date(date), 'yyyy-MM-dd');
  return formattedDate + ' ' + formattedTime;
}

function IncidenceDetails({ selectedIncidence }) {
  // @ts-expect-error data is possibly undefined
  const { data, error, isLoading } = React.useContext(DashboardContext);

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
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Format the data to be used in the table

  // Building
  const building = data.buildingData;
  const { address_type, street_address, number } = building;
  const address = `${address_type} ${street_address} ${number}`;

  // Deep cloning incidences to prevent mutation on the context
  const incidences = _.cloneDeep(building.incidences);

  let incidence;

  // If no incidence is selected, show the most recent
  // ...else show the selected incidence
  if (Boolean(selectedIncidence) === false) {
    const sorted = _.orderBy(incidences, ['date', 'time'], ['desc', 'desc']);
    incidence = sorted[0];
  } else {
    incidence = incidences.find((incidence) => incidence.id === selectedIncidence);
  }

  // Incidence data to display
  const { title, description, date, time, category, status, image_url } =
    incidence;
  const { forename, surname } = incidence.users.people;

  return (
    <div className={styles.Container}>
      <div>
        <p className={styles.Address}>{address}</p>
      </div>

      {image_url && <div className={styles.ImageContainer}>
        <AspectRatio.Root ratio={16 / 9}>
          <img className={styles.Image} src={image_url} alt={title} />
        </AspectRatio.Root>
      </div>}

      <div>
        <h2 className={styles.Tittle}>{title}</h2>
      </div>

      <div className={styles.StatusButton}>
        <StatusButton id={selectedIncidence} status={status} />
      </div>

      <div>
        <p className={styles.Description}>{description}</p>
      </div>

      <div>
        <h3 className={styles.FieldLabel}>Publicada por</h3>
        <p className={styles.FieldValue}>
          {forename} {surname}
        </p>
      </div>

      <div>
        <h3 className={styles.FieldLabel}>Fecha y hora de incidencia</h3>
        <p className={styles.FieldValue}>{formatDateTime(date, time)}</p>
      </div>

      <div>
        <h3 className={styles.FieldLabel}>Categoría</h3>
        <p className={styles.FieldValue}>{category}</p>
      </div>
    </div>
  );
}

export default IncidenceDetails;
