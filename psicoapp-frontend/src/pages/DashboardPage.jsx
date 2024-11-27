import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Heading from '../components/Heading';
import Card from '../components/Card';
import Loader from '../components/Loader';

function DashboardPage() {
  const [userType, setUserType] = useState('Paciente'); // Cambiar según el usuario (Paciente, Psicólogo, Administrador)
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de obtención de estadísticas desde el backend
    const fetchStats = async () => {
      try {
        console.log('Obteniendo estadísticas para:', userType);
        const response = {
          Paciente: { citas: 3, testsPendientes: 1 },
          Psicólogo: { pacientes: 10, reportesPendientes: 2 },
          Administrador: { usuariosRegistrados: 50, reportesSubidos: 20 },
        }; // Simulación de datos

        setStats(response[userType]);
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar estadísticas:', error);
        setLoading(false);
      }
    };
    fetchStats();
  }, [userType]);

  const menuItems = [
    { path: '/perfil', label: 'Perfil' },
    { path: '/citas', label: 'Citas' },
    { path: '/reportes', label: 'Reportes' },
    { path: '/sesiones', label: 'Sesiones' },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar menuItems={menuItems} />
      <div style={{ marginLeft: '260px', padding: '20px' }}>
        <Heading level={1}>Dashboard - {userType}</Heading>
        {loading ? (
          <Loader />
        ) : (
          <div>
            <Card>
              <p>Estadísticas:</p>
              <ul>
                {Object.entries(stats).map(([key, value]) => (
                  <li key={key}>
                    {key}: {value}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardPage;
