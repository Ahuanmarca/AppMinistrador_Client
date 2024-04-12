// import * as React from 'react';
import styles from './IncidencesTable.module.css';
import * as ScrollArea from '@radix-ui/react-scroll-area';



export default function IncidencesTable({ data }) {
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
            {data.map((incidence) => (
              <tr key={incidence.id}>
                <td>{incidence.title}</td>
                <td>{incidence.description}</td>
                <td>{incidence.date}</td>
                <td>{incidence.category}</td>
                <td>{incidence.user}</td>
                <td>
                  <Status status={incidence.status} />
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

function Status({ status = 'pendiente' }) {
  return (
    <div
      style={{
        height: '20px',
        width: '84px',
        borderRadius: '12px',
        backgroundColor: status === 'pendiente' ? '#C33F38' : '#0C6638',
        color: 'white',
        cursor: 'pointer',
        userSelect: 'none',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p>Pendiente</p>
    </div>
  );
}
