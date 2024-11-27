import React from 'react';
import Card from './Card';
import Button from './Button';

function ReporteItem({ reporte }) {
    const handleDescargar = () => {
        // Implementar la funcionalidad para descargar el reporte
        console.log('Descargar reporte', reporte.id);
    };

    return (
        <Card>
            <h3>{reporte.title}</h3>
            <p>Fecha: {reporte.date}</p>
            <Button variant="primary" onClick={handleDescargar}>
                Descargar
            </Button>
        </Card>
    );
}

export default ReporteItem;
