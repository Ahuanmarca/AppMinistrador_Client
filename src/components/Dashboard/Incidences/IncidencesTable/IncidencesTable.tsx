// import * as React from 'react';
import styles from './IncidencesTable.module.css';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import StatusButton from './StatusButton';
import * as _ from 'lodash';

function IncidencesTable({ data }) {

  const incidences = _.orderBy(data, ['date'], ['desc']);

  return (
    <ScrollArea.Root className={styles.ScrollAreaRoot}>
      <ScrollArea.Viewport className={styles.ScrollAreaViewport}>
        <table className={styles.Table}>
          <colgroup>
            <col style={{ width: '20%' }} />
            <col style={{ width: '32%' }} />
            <col style={{ width: '12%' }} />
            <col style={{ width: '12%' }} />
            <col style={{ width: '12%' }} />
            <col style={{ width: '12%' }} />
          </colgroup>
          <thead className={styles.TableHead}>
            <tr>
              <th>Título</th>
              <th>Descripción</th>
              <th>Fecha</th>
              <th>Tipo</th>
              <th>Usuario</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody className={styles.TableBody}>
            {incidences.map((incidence) => (
              <tr key={incidence.id}>
                <td>{incidence.title}</td>
                <td>{incidence.description}</td>
                <td>{incidence.date}</td>
                <td>{incidence.category}</td>
                <td>{incidence.user}</td>
                <td>
                  <StatusButton id={incidence.id} status={incidence.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className={styles.ScrollAreaScrollbar}
        orientation="vertical"
      >
        <ScrollArea.Thumb className={styles.ScrollAreaThumb} />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
}

export default IncidencesTable;
