import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

function RecoverPasswordForm({ onSubmit }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input 
        type="email" 
        placeholder="Correo electrónico" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <Button type="submit" variant="primary">Recuperar Contraseña</Button>
    </form>
  );
}

export default RecoverPasswordForm;
