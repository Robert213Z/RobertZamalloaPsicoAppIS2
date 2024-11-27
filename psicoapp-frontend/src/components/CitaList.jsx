import React from 'react';
import CitaItem from './CitaItem';

function CitaList({ citas }) {
    return (
        <div>
            {citas.map((cita) => (
                <CitaItem key={cita.id} cita={cita} />
            ))}
        </div>
    );
}

export default CitaList;
