import React, { useEffect, useState } from 'react';
import { getCitas } from '../services/api';
import Heading from '../components/Heading';
import CitaList from '../components/CitaList';
import Alert from '../components/Alert';

function CitasPage() {
    const [citas, setCitas] = useState([]);
    const [message, setMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    useEffect(() => {
        const fetchCitas = async () => {
            try {
                const userId = 1; // ID del usuario actual (puedes reemplazarlo con un ID dinámico)
                const data = await getCitas(userId);
                setCitas(data);
            } catch (error) {
                setMessage('Error al cargar las citas');
                setAlertType('error');
            }
        };

        fetchCitas();
    }, []);

    return (
        <div>
            <Heading level={1}>Mis Citas</Heading>
            {message && <Alert type={alertType}>{message}</Alert>}
            {citas.length > 0 ? (
                <CitaList citas={citas} />
            ) : (
                <p>No tienes citas programadas.</p>
            )}
        </div>
    );
}

export default CitasPage;
