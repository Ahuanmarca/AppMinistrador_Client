/**
 * Problem:
 * The "category" field is uncontrolled (?)
 * If I try to set it's value, I can't change it's value
 * ...uncomment "value={formValues.category}" on the select
 * input to reproduce the problem
 */

import React from 'react';
import * as Form from '@radix-ui/react-form';
import styles from './ReportIncidence.module.css';

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

function ReportIncidence() {
  const [formValues, setFormValues] = React.useState(() => ({
    title: '',
    description: '',
    category: '',
  }));

  function handleChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  return (
    <div className={styles.wrapper}>
      <Form.Root className={styles.FormRoot}>
        <Form.Field className={styles.FormField} name="title">
          <Form.Label>Título</Form.Label>
          <Form.Message match="valueMissing">
            Por favor introduzca un título
          </Form.Message>
          <Form.Control
            className={styles.TextInput}
            asChild
            value={formValues.title}
            onChange={handleChange}
          >
            <input type="text" required />
          </Form.Control>
        </Form.Field>

        <Form.Field className={styles.FormField} name="description">
          <Form.Label>Descripción</Form.Label>
          <Form.Message match="valueMissing">
            Por favor introduzca una descripción
          </Form.Message>
          <Form.Control
            className={styles.TextInput}
            asChild
            value={formValues.description}
            onChange={handleChange}
          >
            <textarea rows={4} required />
          </Form.Control>
        </Form.Field>

        <Form.Field className={styles.FormField} name="category">
          <Form.Label>Categoría</Form.Label>
          <Form.Message match="valueMissing">
            Por favor seleccione una categoría
          </Form.Message>
          <Form.Control
            className={styles.TextInput}
            required
            asChild
            onChange={handleChange}
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
        </Form.Field>

        <Form.Submit className={styles.Submit} asChild>
          <button>Reportar</button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
}

export default ReportIncidence;
