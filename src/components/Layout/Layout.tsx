import { Routes, Route, useLocation } from 'react-router-dom';
import style from './Layout.module.css';

import Dashboard from '../Dashboard';
import Appbar from '../Appbar';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

import AppbarChatApp from '../Appbar-ChatApp';
import IncidenciasPage from '../../pages/IncidenciasPage';
import ContabilidadPage from '../../pages/ContabilidadPage';
import MensajesPage from '../../pages/MensajesPage';
import ConfiguracionPage from '../../pages/ConfiguracionPage';
import AyudaPage from '../../pages/AyudaPage';
import PerfilPage from '../../pages/PerfilPage';

function Layout() {
  const location = useLocation();
const showAppBar = location.pathname === '/mensajes';
  return (
    <div className={style.layoutContainer}>
      <header className={style.headerContainer}>
      {showAppBar ? <AppbarChatApp /> : <Appbar />}
      </header>
      <main className={style.dashboardContainer}>
        <Routes>
          <Route path="/"               element={<Dashboard />} />
          <Route path="/dashboard"      element={<Dashboard />} />
          <Route path="/incidencias"    element={<IncidenciasPage />} />
          <Route path="/contabilidad"   element={<ContabilidadPage />} />
          <Route path="/mensajes"       element={<MensajesPage />} />
          <Route path="/configuracion"  element={<ConfiguracionPage />} />
          <Route path="/ayuda"          element={<AyudaPage />} />
          <Route path="/perfil"         element={<PerfilPage />} />
        </Routes>
      </main>
      <aside className={style.sidebarContainer}>
        <Sidebar />
      </aside>
      <footer className={style.footerContainer}>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
