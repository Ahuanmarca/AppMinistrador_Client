// import * as React from 'react';
import style from './Layout.module.css';

function Layout() {
  return (
    <div className={style.layoutContainer}>
      <header className={style.headerContainer}>
        <div className={style.box}>
          Appbar
        </div>
      </header>
      <main className={style.dashboardContainer}>
        <div className={style.box}>
          Dashboard
        </div>
      </main>
      <aside className={style.sidebarContainer}>
        <div className={style.box}>
          Sidebar
        </div>
      </aside>
      <footer className={style.footerContainer}>
        <div className={style.box}>
          Footer
        </div>
      </footer>
    </div>
  );
}

export default Layout;
