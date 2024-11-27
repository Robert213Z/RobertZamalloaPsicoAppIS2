import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">PsicoApp</div>
      <nav className="header-nav">
        <ul>
          <li><a href="/perfil">Perfil</a></li>
          <li><a href="/citas">Citas</a></li>
          <li><a href="/reportes">Reportes</a></li>
          <li><a href="/login">Cerrar Sesión</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
