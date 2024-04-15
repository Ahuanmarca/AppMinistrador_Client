import { Navigate, useLocation } from 'react-router-dom';

function RequireLogin({ children }) {
  const token = localStorage.getItem('token');
  const location = useLocation();

  if (!token) {
    return <Navigate to={`/login?redirect=${encodeURIComponent(location.pathname)}`} />;
  }

  return (
    <>
      {children}
    </>
  )
}

export default RequireLogin;
