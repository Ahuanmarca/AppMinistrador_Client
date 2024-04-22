import React from 'react';
import * as Form from '@radix-ui/react-form';
import styles from './ReportIncidence.module.css';
import { DashboardContext } from '../../contexts/DashboardContext';

const ENDPOINT = 'https://appministrador-server-tob7.onrender.com/incidences/create';
// const ENDPOINT = 'http://localhost:8000/incidences/create';

const CATEGORIES = [
  'Ascensor',
  'Calefacción',
  'Comunidad',
  'Electricidad',
  'Escalera',
  'Limpieza',
  'Mantenimiento',
  'Reparaciones',
];

const IMAGES = {
  Ascensor: "https://firebasestorage.googleapis.com/v0/b/appministrador-2024.appspot.com/o/ascensor.jpeg?alt=media&token=ce7c27eb-6250-41a1-909a-e31a2bff4431",
  Calefacción: "https://firebasestorage.googleapis.com/v0/b/appministrador-2024.appspot.com/o/calefaccion.jpeg?alt=media&token=8bbe513f-4254-4674-b8ab-1a31322d06ce",
  Comunidad: "https://firebasestorage.googleapis.com/v0/b/appministrador-2024.appspot.com/o/comunidad.jpeg?alt=media&token=e269123b-5738-412f-8a9a-21107dbedfe3",
  Electricidad: "https://firebasestorage.googleapis.com/v0/b/appministrador-2024.appspot.com/o/electricidad.jpeg?alt=media&token=fcfd39ca-8805-4f6d-8a56-aed960413cc4",
  Escalera: "https://firebasestorage.googleapis.com/v0/b/appministrador-2024.appspot.com/o/escalera.jpeg?alt=media&token=7798b336-253f-4f9d-b158-d5d319eee59b",
  Limpieza: "https://firebasestorage.googleapis.com/v0/b/appministrador-2024.appspot.com/o/limpieza.jpeg?alt=media&token=9ea821b0-2afa-4989-be49-b89a4304aafa",
  Mantenimiento: "https://firebasestorage.googleapis.com/v0/b/appministrador-2024.appspot.com/o/mantenimiento.jpeg?alt=media&token=751c0d07-0b6a-4380-8871-3b950f3d3f1e",
  Reparaciones: "https://firebasestorage.googleapis.com/v0/b/appministrador-2024.appspot.com/o/reparaciones.jpeg?alt=media&token=bd09fff2-8f4c-4e84-b221-5a1526fe04a8",
}

function ReportIncidence({ handleDismiss }) {
  // @ts-expect-error - What is the type of the context value?
  const { data, error, isLoading, updateDashboardData } = React.useContext(DashboardContext);

  const [formValues, setFormValues] = React.useState(() => ({
    title: '',
    description: '',
    category: '',
  }));

  type Status = 'idle' | 'loading' | 'success' | 'error';
  const [status, setStatus] = React.useState<Status>('idle');

  if (isLoading) { return <div>Loading...</div>; }
  if (error) { return <div>Error!</div>; }

  function handleChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  const token = localStorage.token;
  const user = JSON.parse(localStorage.user);
  const buildingId = data.buildingData.id;

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: token,
        },

        body: JSON.stringify({
          title: formValues.title,
          description: formValues.description,
          image_url: IMAGES[formValues.category] || 'https://picsum.photos/200/300',
          user_dni: user.dni,
          building_id: 1,
          category: formValues.category,
        }),
      });
      // TODO: Check for errors on the response / json
      await response.json(); // I don't need the response, just the status code?

      updateDashboardData({ buildingId: buildingId, accountId: buildingId}); // Manually trigger a re-fetch by swr
      handleDismiss();
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
    setFormValues({ title: '', description: '', category: '' });
  }

  return (
    <Form.Root onSubmit={handleSubmit} className={styles.FormRoot}>
      <Form.Field
        className={`${styles.FormField} ${styles.Title}`}
        name="title"
      >
        <Form.Label>Título</Form.Label>
        <Form.Control
          className={styles.TextInput}
          disabled={status === 'loading'}
          asChild
          value={formValues.title}
          onChange={handleChange}
        >
          <input type="text" required />
        </Form.Control>
        <Form.Message className={styles.ErrorMessage} match="valueMissing">
          Por favor introduzca un título
        </Form.Message>
      </Form.Field>

      <Form.Field
        className={`${styles.FormField} ${styles.Description}`}
        name="description"
      >
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          className={styles.TextInput}
          asChild
          disabled={status === 'loading'}
          value={formValues.description}
          onChange={handleChange}
        >
          <textarea rows={4} required />
        </Form.Control>
        <Form.Message className={styles.ErrorMessage} match="valueMissing">
          Por favor introduzca una descripción
        </Form.Message>
      </Form.Field>

      <Form.Field
        className={`${styles.FormField} ${styles.Category}`}
        name="category"
      >
        <Form.Label>Categoría</Form.Label>
        <Form.Control
          className={styles.Dropdown}
          required
          asChild
          onChange={handleChange}
          disabled={status === 'loading'}
          // value={formValues.category}
        >
          <select>
            <option value="">- Selecciona una categoría -</option>
            <optgroup label="Categorías">
              {CATEGORIES.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </optgroup>
          </select>
        </Form.Control>
        <Form.Message className={styles.ErrorMessage} match="valueMissing">
          Por favor seleccione una categoría
        </Form.Message>
      </Form.Field>

      <Form.Submit className={styles.Submit} asChild>
        <button>Reportar</button>
      </Form.Submit>
    </Form.Root>
  );
}

export default ReportIncidence;

/**
 * Problem:
 * The "category" field is uncontrolled (?)
 * If I try to set it's value, I can't change it's value
 * ...uncomment "value={formValues.category}" on the select
 * input to reproduce the problem
 */
