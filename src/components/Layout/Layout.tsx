// import * as React from 'react';
import style from './Layout.module.css';

import Dashboard from '../Dashboard';
import Appbar from '../Appbar';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

function Layout() {
  return (
    <div className={style.layoutContainer}>
      <header className={style.headerContainer}>
        <Appbar />
      </header>
      <main className={style.dashboardContainer}>
        <Dashboard />
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
