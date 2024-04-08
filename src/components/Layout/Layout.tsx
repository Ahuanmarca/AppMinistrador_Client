// import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import style from './Layout.module.css';

import Dashboard from '../Dashboard';
import Appbar from '../Appbar';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

import IncidenciasPage from '../../pages/IncidenciasPage';
import ContabilidadPage from '../../pages/ContabilidadPage';
import MensajesPage from '../../pages/MensajesPage';
import ConfiguracionPage from '../../pages/ConfiguracionPage';
import AyudaPage from '../../pages/AyudaPage';

function Layout() {
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
