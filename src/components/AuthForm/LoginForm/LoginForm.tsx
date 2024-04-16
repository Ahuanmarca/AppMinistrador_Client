import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as Form from '@radix-ui/react-form';
import useToggle from '../../../hooks/use-toggle.hook';
import styles from './LoginForm.module.css';
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';

const ENDPOINT = 'https://appministrador-server-tob7.onrender.com/auth/login';

function LoginForm() {
  const [formValues, setFormValues] = React.useState(() => ({
    username: '',
    password: '',
  }));
  const navigate = useNavigate();
  const location = useLocation(); // remember location to redirect after login

  type Status = 'idle' | 'loading' | 'success' | 'error';
  const [status, setStatus] = React.useState<Status>('idle');
  const [showPassword, toggleShowPassword] = useToggle(false);

  function handleChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formValues.username,
          password: formValues.password,
        }),
      });
      const json = await response.json();

      if (json.token) {
        localStorage.token = json.token;
        localStorage.user = JSON.stringify(json.user);
        setStatus('success');
        setFormValues({ username: '', password: '' });

        // redirect to the path stored in the query string
        const queryParams = new URLSearchParams(location.search);
        const redirectPath = queryParams.get('redirect') || '/';
        navigate(redirectPath);
      } else {
        delete localStorage.token;
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <div className={styles.wrapper}>
      <Form.Root className={styles.FormRoot} onSubmit={handleSubmit}>
        <Form.Field className={styles.FormField} name={'username'}>
          <Form.Label>Username</Form.Label>
          <Form.Control
            asChild
            autoComplete={"off"}
            disabled={status === 'loading'}
            className={styles.TextInput}
            value={formValues.username}
            onChange={handleChange}
          >
            <input type="text" required />
          </Form.Control>
          <Form.Message
            className={styles.ErrorMessage}
            match={'valueMissing'}
          >
            Por favor introduzca un nombre de usuario
          </Form.Message>
        </Form.Field>

        <Form.Field className={styles.FormField} name={'password'}>
          <Form.Label>Password</Form.Label>
          <div className={styles.PasswordInput}>
            <Form.Control
              // asChild
              autoComplete={"off"}
              type={showPassword ? 'text' : 'password'}
              disabled={status === 'loading'}
              required={true}
              value={formValues.password}
              onChange={handleChange}
            />
            {/* @ts-expect-error - can't assing toggleShowPassword to onClick */}
            <button type="button" onClick={toggleShowPassword}>
              {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
            </button>
          </div>
          <Form.Message
            className={styles.ErrorMessage}
            match={'valueMissing'}
          >
            Por favor introduzca una contraseña
          </Form.Message>
        </Form.Field>

        <Form.Submit asChild className={styles.Submit}>
          <button type="submit">Login</button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
}

export default LoginForm;
