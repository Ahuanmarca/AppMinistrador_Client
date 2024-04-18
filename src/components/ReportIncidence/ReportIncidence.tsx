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


function ReportIncidence({ handleDismiss }) {
  // @ts-expect-error - What is the type of the context value?
  const { data, updateDashboardData } = React.useContext(DashboardContext);

  const [formValues, setFormValues] = React.useState(() => ({
    title: '',
    description: '',
    category: '',
  }));

  type Status = 'idle' | 'loading' | 'success' | 'error';
  const [status, setStatus] = React.useState<Status>('idle');

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
          image_url: 'https://picsum.photos/200/300',
          user_dni: user.dni,
          building_id: 1,
          category: formValues.category,
        }),
      });
      const json = await response.json();

      // TODO: Check for errors on the response / json
      console.log({ createdIncidence: json });
      
      updateDashboardData({ buildingId: buildingId, accountId: buildingId});
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
