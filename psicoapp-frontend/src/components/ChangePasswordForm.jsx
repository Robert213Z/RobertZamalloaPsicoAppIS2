import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

function ChangePasswordForm({ onSubmit }) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ currentPassword, newPassword });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input 
        type="password" 
        placeholder="Contraseña actual" 
        value={currentPassword} 
        onChange={(e) => setCurrentPassword(e.target.value)} 
      />
      <Input 
        type="password" 
        placeholder="Nueva contraseña" 
        value={newPassword} 
        onChange={(e) => setNewPassword(e.target.value)} 
      />
      <Button type="submit" variant="primary">Cambiar Contraseña</Button>
    </form>
  );
}

export default ChangePasswordForm;
