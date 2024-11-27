import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

function SolicitarCitaForm({ onSubmit }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [pacienteId, setPacienteId] = useState('');
    const [psicologoId, setPsicologoId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ date, time, pacienteId, psicologoId }); // Enviar los datos al padre
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                label="Fecha"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <Input
                label="Hora"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
            />
            <Input
                label="ID del Paciente"
                type="text"
                value={pacienteId}
                onChange={(e) => setPacienteId(e.target.value)}
            />
            <Input
                label="ID del Psicólogo"
                type="text"
                value={psicologoId}
                onChange={(e) => setPsicologoId(e.target.value)}
            />
            <Button type="submit" variant="primary">Solicitar Cita</Button>
        </form>
    );
}

export default SolicitarCitaForm;
