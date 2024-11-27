import React from 'react';
import SesionItem from './SesionItem';

function SesionesList({ sesiones }) {
  return (
    <div>
      {sesiones.map((sesion) => (
        <SesionItem key={sesion.id} sesion={sesion} />
      ))}
    </div>
  );
}

export default SesionesList;
