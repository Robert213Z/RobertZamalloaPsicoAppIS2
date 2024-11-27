import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 PsicoApp - Todos los derechos reservados</p>
      <nav>
        <ul>
          <li><a href="/contacto">Contacto</a></li>
          <li><a href="/privacidad">Política de Privacidad</a></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
