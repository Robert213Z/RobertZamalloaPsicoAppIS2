import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

function PerfilForm({ user, onSubmit }) {
    const [formData, setFormData] = useState(user);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input label="Nombre Completo" name="nombreCompleto" value={formData.nombreCompleto} onChange={handleChange} />
            <Input label="Apellido" name="apellido" value={formData.apellido} onChange={handleChange} />
            <Input label="Correo Electrónico" name="email" value={formData.email} onChange={handleChange} />
            <Input label="DNI" name="dni" value={formData.dni} onChange={handleChange} />
            <Input label="Fecha de Nacimiento" name="fechaNac" type="date" value={formData.fechaNac} onChange={handleChange} />
            <Input label="Número de Celular" name="numeroCelular" value={formData.numeroCelular} onChange={handleChange} />
            <Button type="submit" variant="primary">Actualizar Perfil</Button>
        </form>
    );
}

export default PerfilForm;
