import React, { useState } from 'react';
import SubirReporteForm from '../components/SubirReporteForm';
import Heading from '../components/Heading';
import Alert from '../components/Alert';
import { createReporte } from '../services/api';

function SubirReportePage() {
    const [message, setMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const handleUploadReport = async (file) => {
        if (!file) {
            setMessage('Por favor, seleccione un archivo para subir.');
            setAlertType('error');
            return;
        }

        try {
            const response = await createReporte({ contenido: file, psicologoId: 1, pacienteId: 1 });
            if (response.success) {
                setMessage(response.message);
                setAlertType('success');
            } else {
                setMessage(response.message || 'Hubo un error al subir el reporte');
                setAlertType('error');
            }
        } catch (error) {
            setMessage('Error de red o servidor');
            setAlertType('error');
        }
    };

    return (
        <div>
            <Heading level={1}>Subir Reporte</Heading>
            {message && <Alert type={alertType}>{message}</Alert>}
            <SubirReporteForm onSubmit={handleUploadReport} />
        </div>
    );
}

export default SubirReportePage;
