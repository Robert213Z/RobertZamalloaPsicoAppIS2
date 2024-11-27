import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/perfil">Perfil</NavLink></li>
          <li><NavLink to="/citas">Citas</NavLink></li>
          <li><NavLink to="/solicitar-cita">Solicitar Cita</NavLink></li>
          <li><NavLink to="/reportes">Reportes</NavLink></li>
          <li><NavLink to="/subir-reporte">Subir Reporte</NavLink></li>
          <li><NavLink to="/sesiones-virtuales">Sesiones Virtuales</NavLink></li>
          <li><NavLink to="/completar-test">Completar Test</NavLink></li>
          <li><NavLink to="/enviar-test">Enviar Test</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;


