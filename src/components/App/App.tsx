import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashboardProvider } from '../../contexts/DashboardContext';
import RequireLogin from '../RequireLogin';

import Layout from '../Layout';

// Test Pages and Components
import Basic from '../../pages/TestPageRenzo/TanStack/Basic';
import Incidences from '../../pages/TestPageRenzo/TanStack/Incidences';
import Sorting from '../../pages/TestPageRenzo/TanStack/Sorting';
import AuthForm from '../AuthForm';
import ReportIncidence from '../ReportIncidence';

function App() {
  return (
    <BrowserRouter>
      <DashboardProvider>
        <Routes>
          <Route path="/login" element={<AuthForm />} />
          <Route path="/mobile" element={
          
          <div
            style={{
              height: "100svh",
              width: "100%",
              padding: "2rem 1rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ReportIncidence handleDismiss={() => console.log("Reported")}/>
          </div>
        
        } />
          <Route path="/tester">
            <Route path="/tester/basic" element={<Basic />} />
            <Route path="/tester/incidences" element={<Incidences />} />
            <Route path="/tester/sorting" element={<Sorting />} />
          </Route>
          <Route
            path="*"
            element={
              <RequireLogin>
                <Layout />
              </RequireLogin>
            }
          />
        </Routes>
      </DashboardProvider>
    </BrowserRouter>
  );
}

export default App;
