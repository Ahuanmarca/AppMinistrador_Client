function IncidencesTable({ incidences }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Fecha</th>
            <th>Usuario</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {incidences.map((incidence) => (
            <tr key={incidence.id}>
              <td>{incidence.title}</td>
              <td>{incidence.description}</td>
              <td>{incidence.date}</td>
              <td>{incidence.user_dni}</td>
              <td>{incidence.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IncidencesTable;
