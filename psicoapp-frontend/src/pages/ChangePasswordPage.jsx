import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ChangePasswordForm from '../components/ChangePasswordForm';
import Heading from '../components/Heading';
import Alert from '../components/Alert';

function ChangePasswordPage() {
  const [message, setMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleChangePassword = async (passwordData) => {
    try {
      console.log('Cambiando contraseña con:', passwordData);
      const response = { success: true, message: 'Contraseña cambiada exitosamente' };

      if (response.success) {
        setMessage(response.message);
        setAlertType('success');
      } else {
        setMessage('Hubo un error al cambiar la contraseña');
        setAlertType('error');
      }
    } catch (error) {
      setMessage('Error de red o servidor');
      setAlertType('error');
    }
  };

  return (
    <div>
      <Heading level={1}>Cambiar Contraseña</Heading>
      {message && <Alert type={alertType}>{message}</Alert>}
      <ChangePasswordForm onSubmit={handleChangePassword} />
      <div style={{ marginTop: '10px' }}>
        <p>
          ¿Ya cambiaste tu contraseña? <Link to="/login">Inicia sesión aquí</Link>
        </p>
      </div>
    </div>
  );
}

export default ChangePasswordPage;
