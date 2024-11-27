import React, { useState, useEffect } from 'react';
import SesionesList from '../components/SesionesList';
import Heading from '../components/Heading';
import Alert from '../components/Alert';
import Loader from '../components/Loader';

function SesionesPage() {
  const [sesiones, setSesiones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  useEffect(() => {
    // Simulación de obtención de sesiones desde el backend
    const fetchSesiones = async () => {
      try {
        console.log('Obteniendo sesiones virtuales...');
        const response = [
          { id: 1, title: 'Sesión 1', date: '2024-11-20', link: 'https://zoom.us/j/123456789' },
          { id: 2, title: 'Sesión 2', date: '2024-11-25', link: 'https://zoom.us/j/987654321' },
        ]; // Simulación de datos

        setSesiones(response);
        setLoading(false);
      } catch (error) {
        setMessage('Error al cargar las sesiones');
        setAlertType('error');
        setLoading(false);
      }
    };
    fetchSesiones();
  }, []);

  return (
    <div>
      <Heading level={1}>Sesiones Virtuales</Heading>
      {message && <Alert type={alertType}>{message}</Alert>}
      {loading ? <Loader /> : <SesionesList sesiones={sesiones} />}
    </div>
  );
}

export default SesionesPage;
