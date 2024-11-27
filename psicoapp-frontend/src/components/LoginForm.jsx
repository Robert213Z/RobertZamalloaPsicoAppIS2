import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

function LoginForm({ onSubmit }) {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.email) newErrors.email = 'El correo electrónico es obligatorio';
        if (!formData.password) newErrors.password = 'La contraseña es obligatoria';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            onSubmit(formData); // Pasamos los datos al padre (LoginPage)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                label="Correo Electrónico"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
            />
            <Input
                label="Contraseña"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
            />
            <Button type="submit" variant="primary">
                Iniciar Sesión
            </Button>
        </form>
    );
}

export default LoginForm;
