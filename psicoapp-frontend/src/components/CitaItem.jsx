import React from 'react';
import Card from './Card';
import Button from './Button';

function CitaItem({ cita }) {
    return (
        <Card>
            <p>Fecha: {cita.fecha}</p>
            <p>Hora: {cita.hora}</p>
            <p>Estado: {cita.estado || 'Pendiente'}</p>
        </Card>
    );
}

export default CitaItem;
