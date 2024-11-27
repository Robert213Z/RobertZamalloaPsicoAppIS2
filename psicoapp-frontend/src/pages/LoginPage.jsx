import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import Heading from '../components/Heading';
import Alert from '../components/Alert';
import { loginUser } from '../services/api'; // Importa la API

function LoginPage() {
    const [message, setMessage] = useState('');
    const [alertType, setAlertType] = useState('');
    const navigate = useNavigate(); // Hook para redirección

    const handleLogin = async (credentials) => {
        try {
            const response = await loginUser(credentials.email, credentials.password);
            setAlertType('success');
            setMessage('Inicio de sesión exitoso');
            localStorage.setItem('token', response.token); // Guardar token en localStorage
            navigate('/dashboard'); // Redirigir al dashboard
        } catch (error) {
            setAlertType('error');
            setMessage(error.message || 'Error al iniciar sesión');
        }
    };

    return (
        <div>
            <Heading level={1}>Iniciar Sesión</Heading>
            {message && <Alert type={alertType}>{message}</Alert>}
            <LoginForm onSubmit={handleLogin} />
            <div style={{ marginTop: '10px' }}>
                <p>
                    ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
                </p>
                <p>
                    ¿Olvidaste tu contraseña? <Link to="/recover-password">Recupérala aquí</Link>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;
