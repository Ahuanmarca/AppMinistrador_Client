// import * as React from 'react';

function IncidencesTable({ incidences }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Usuario</th>
            <th>Edificio</th>
            <th>Estado</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {incidences.map((incidence) => (
            <tr key={incidence.id}>
              <td>{incidence.date}</td>
              <td>{incidence.user}</td>
              <td>{incidence.building}</td>
              <td>{incidence.state}</td>
              <td>{incidence.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IncidencesTable;
