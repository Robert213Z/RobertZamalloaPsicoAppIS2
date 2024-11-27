import React from 'react';
import ReporteItem from './ReporteItem';

function ReporteList({ reportes }) {
    return (
        <div>
            {reportes.map((reporte) => (
                <ReporteItem key={reporte.id} reporte={reporte} />
            ))}
        </div>
    );
}

export default ReporteList;
