import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './Layout.css';

function Layout({ children }) {
  const menuItems = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/perfil', label: 'Perfil' },
    { path: '/citas', label: 'Citas' },
    { path: '/reportes', label: 'Reportes' },
  ];

  return (
    <>
      <Header />
      <div className="layout-container">
        <Sidebar menuItems={menuItems} />
        <main className="main-content">{children}</main>
      </div>
      <Footer />
    </>

  );
}

export default Layout;
