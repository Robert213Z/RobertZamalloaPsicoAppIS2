import React, { useState, useEffect } from 'react';
import ReporteList from '../components/ReporteList';
import Heading from '../components/Heading';
import Alert from '../components/Alert';
import Loader from '../components/Loader';
import { getReportes } from '../services/api';

function ReportesPage() {
  const [reportes, setReportes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  useEffect(() => {
    // Simulación de obtención de reportes desde el backend
    const fetchReportes = async () => {
      try {
        console.log('Obteniendo reportes...');
        const response = [
          { id: 1, title: 'Reporte de Ansiedad', date: '2024-11-15' },
          { id: 2, title: 'Reporte de Depresión', date: '2024-11-10' },
        ]; // Simulación de datos

        setReportes(response);
        setLoading(false);
      } catch (error) {
        setMessage('Error al cargar los reportes');
        setAlertType('error');
        setLoading(false);
      }
    };
    fetchReportes();
  }, []);

  return (
    <div>
      <Heading level={1}>Reportes</Heading>
      {message && <Alert type={alertType}>{message}</Alert>}
      {loading ? <Loader /> : <ReporteList reportes={reportes} />}
    </div>
  );
}

export default ReportesPage;
