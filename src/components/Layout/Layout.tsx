import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import style from './Layout.module.css';
import { DashboardContext } from '../../contexts/DashboardContext';

import Dashboard from '../Dashboard';
import Appbar from '../Appbar';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

import IncidenciasPage from '../../pages/IncidenciasPage';
import ContabilidadPage from '../../pages/ContabilidadPage';
import MensajesPage from '../../pages/MensajesPage';
import ConfiguracionPage from '../../pages/ConfiguracionPage';
import AyudaPage from '../../pages/AyudaPage';
import PerfilPage from '../../pages/PerfilPage';
import TestPageRenzo from '../../pages/TestPageRenzo';

function Layout() {
  // @ts-expect-error -- Property 'isLoading' does not exist on type '{}'.ts(2339)
  const { data, error, isLoading } = React.useContext(DashboardContext);
  console.debug({ context: { data, error, isLoading } });

  return (
    <div className={style.layoutContainer}>
      <header className={style.headerContainer}>
        <Appbar />
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
          <Route path="/renzo"          element={<TestPageRenzo />} />
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
