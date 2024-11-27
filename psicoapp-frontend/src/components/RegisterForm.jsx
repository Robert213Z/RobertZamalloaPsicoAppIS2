import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

function RegisterForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        nombreCompleto: '',
        apellido: '',
        email: '',
        password: '',
        dni: '',
        fechaNac: '',
        numeroCelular: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const dniRegex = /^\d{8}$/;
        const celularRegex = /^\d{9}$/;

        // Validación de nombre completo
        if (!formData.nombreCompleto) newErrors.nombreCompleto = 'El nombre completo es obligatorio';

        // Validación de apellido
        if (!formData.apellido) newErrors.apellido = 'El apellido es obligatorio';

        // Validación de correo electrónico
        if (!formData.email) {
            newErrors.email = 'El correo electrónico es obligatorio';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'El correo electrónico no es válido';
        }

        // Validación de contraseña
        if (!formData.password) newErrors.password = 'La contraseña es obligatoria';

        // Validación de DNI
        if (!formData.dni) {
            newErrors.dni = 'El DNI es obligatorio';
        } else if (!dniRegex.test(formData.dni)) {
            newErrors.dni = 'El DNI debe tener exactamente 8 números';
        }

        // Validación de fecha de nacimiento
        if (!formData.fechaNac) newErrors.fechaNac = 'La fecha de nacimiento es obligatoria';

        // Validación de número de celular
        if (!formData.numeroCelular) {
            newErrors.numeroCelular = 'El número de celular es obligatorio';
        } else if (!celularRegex.test(formData.numeroCelular)) {
            newErrors.numeroCelular = 'El número de celular debe tener exactamente 9 dígitos';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            onSubmit(formData); // Pasar los datos validados al componente padre
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                label="Nombre Completo"
                name="nombreCompleto"
                type="text"
                value={formData.nombreCompleto}
                onChange={handleChange}
                error={errors.nombreCompleto}
            />
            <Input
                label="Apellido"
                name="apellido"
                type="text"
                value={formData.apellido}
                onChange={handleChange}
                error={errors.apellido}
            />
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
            <Input
                label="DNI"
                name="dni"
                type="text"
                value={formData.dni}
                onChange={handleChange}
                error={errors.dni}
            />
            <Input
                label="Fecha de Nacimiento"
                name="fechaNac"
                type="date"
                value={formData.fechaNac}
                onChange={handleChange}
                error={errors.fechaNac}
            />
            <Input
                label="Número de Celular"
                name="numeroCelular"
                type="text"
                value={formData.numeroCelular}
                onChange={handleChange}
                error={errors.numeroCelular}
            />
            <Button type="submit" variant="primary">
                Registrarse
            </Button>
        </form>
    );
}

export default RegisterForm;
