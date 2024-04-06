// import * as React from 'react';
import style from './Layout.module.css';
import Dashboard from '../Dashboard';
import LayoutPlaceholder from './LayoutPlaceholder';

function Layout() {
  return (
    <div className={style.layoutContainer}>
      <header className={style.headerContainer}>
        <LayoutPlaceholder placeholderText={'Appbar'} />
      </header>
      <main className={style.dashboardContainer}>
        <div className={style.box}>
          <Dashboard />
        </div>
      </main>
      <aside className={style.sidebarContainer}>
        <LayoutPlaceholder placeholderText={'Sidebar'} />
      </aside>
      <footer className={style.footerContainer}>
        <LayoutPlaceholder placeholderText={'Footer'} />
      </footer>
    </div>
  );
}

export default Layout;
