import { BrowserRouter } from 'react-router-dom';
import { DashboardProvider } from '../../contexts/DashboardContext';

import Layout from '../Layout';

function App() {
  return (
    <BrowserRouter>
      <DashboardProvider>
        <Layout />
      </DashboardProvider>
    </BrowserRouter>
  );
}

export default App;
