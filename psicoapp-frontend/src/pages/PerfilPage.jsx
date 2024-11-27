import React, { useState, useEffect } from 'react';
import PerfilForm from '../components/PerfilForm';
import Heading from '../components/Heading';
import Alert from '../components/Alert';
import { getPerfil, updatePerfil } from '../services/api';

function PerfilPage() {
    const [message, setMessage] = useState('');
    const [alertType, setAlertType] = useState('');
    const [user, setUser] = useState(null); // Inicializa como null

    const userId = 1; // Cambia este valor según el usuario autenticado

    useEffect(() => {
        const fetchPerfil = async () => {
            try {
                const perfil = await getPerfil(userId);
                setUser(perfil); // Establece los datos del perfil
            } catch (error) {
                setMessage('Error al cargar el perfil');
                setAlertType('error');
            }
        };

        fetchPerfil();
    }, [userId]);

    const handleUpdatePerfil = async (updatedData) => {
        try {
            const response = await updatePerfil(userId, updatedData);
            setMessage(response.message || 'Perfil actualizado exitosamente');
            setAlertType('success');
            setUser(updatedData); // Actualiza los datos locales
        } catch (error) {
            setMessage('Error al actualizar el perfil');
            setAlertType('error');
        }
    };

    if (!user) {
        return <p>Cargando perfil...</p>; // Muestra un mensaje mientras se carga el perfil
    }

    return (
        <div>
            <Heading level={1}>Perfil de Usuario</Heading>
            {message && <Alert type={alertType}>{message}</Alert>}
            <PerfilForm user={user} onSubmit={handleUpdatePerfil} />
        </div>
    );
}

export default PerfilPage;
