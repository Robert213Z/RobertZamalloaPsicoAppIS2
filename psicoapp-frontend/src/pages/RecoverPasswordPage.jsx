import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RecoverPasswordForm from '../components/RecoverPasswordForm';
import Heading from '../components/Heading';
import Alert from '../components/Alert';

function RecoverPasswordPage() {
  const [message, setMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleRecoverPassword = async (emailData) => {
    try {
      console.log('Solicitando recuperación de contraseña para:', emailData);
      const response = { success: true, message: 'Enlace enviado a su correo' };

      if (response.success) {
        setMessage(response.message);
        setAlertType('success');
      } else {
        setMessage('Hubo un error al enviar el enlace');
        setAlertType('error');
      }
    } catch (error) {
      setMessage('Error de red o servidor');
      setAlertType('error');
    }
  };

  return (
    <div>
      <Heading level={1}>Recuperar Contraseña</Heading>
      {message && <Alert type={alertType}>{message}</Alert>}
      <RecoverPasswordForm onSubmit={handleRecoverPassword} />
      <div style={{ marginTop: '10px' }}>
        <p>
          ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link>
        </p>
        <p>
          ¿Ya tienes un código de recuperación? <Link to="/change-password">Cambiar contraseña aquí</Link>
        </p>
      </div>
    </div>
  );
}

export default RecoverPasswordPage;
