import React, { useState } from 'react';
import SolicitarCitaForm from '../components/SolicitarCitaForm';
import Heading from '../components/Heading';
import Alert from '../components/Alert';
import { createCita } from '../services/api'; // Importa la función de la API

function SolicitarCitaPage() {
    const [message, setMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const handleSolicitarCita = async (citaData) => {
        try {
            console.log('Solicitando cita con:', citaData);

            // Llamada a la API para crear la cita
            const response = await createCita(citaData);

            // Manejo de la respuesta
            setMessage(response.message || 'Cita solicitada exitosamente');
            setAlertType('success');
        } catch (error) {
            setMessage(error.message || 'Hubo un error al solicitar la cita');
            setAlertType('error');
        }
    };

    return (
        <div>
            <Heading level={1}>Solicitar Cita</Heading>
            {message && <Alert type={alertType}>{message}</Alert>}
            <SolicitarCitaForm onSubmit={handleSolicitarCita} />
        </div>
    );
}

export default SolicitarCitaPage;
