import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import Heading from '../components/Heading';
import Alert from '../components/Alert';
import { registerUser } from '../services/api';

function RegisterPage() {
    const [message, setMessage] = useState('');
    const [alertType, setAlertType] = useState('');
    const navigate = useNavigate(); // Hook para redirigir a otra página

    const handleRegister = async (userData) => {
        try {
            console.log('Datos enviados al registro:', userData);
            const response = await registerUser(userData); // Llama a la API
            setMessage(response.message || 'Registro exitoso. Redirigiendo...');
            setAlertType('success');
            setTimeout(() => navigate('/login'), 3000); // Redirige tras éxito
        } catch (error) {
            console.error('Error durante el registro:', error);
            setMessage(error.message || 'Error al registrar usuario');
            setAlertType('error');
        }
    };

    return (
        <div>
            <Heading level={1}>Registro</Heading>
            {message && <Alert type={alertType}>{message}</Alert>}
            <RegisterForm onSubmit={handleRegister} />
            <div style={{ marginTop: '10px' }}>
                <p>
                    ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link>
                </p>
            </div>
        </div>
    );
}

export default RegisterPage;
