import React from 'react';
import Card from './Card';
import Button from './Button';

function SesionItem({ sesion }) {
  return (
    <Card>
      <h3>{sesion.title}</h3>
      <p>Fecha: {sesion.date}</p>
      <p>Link: <a href={sesion.link} target="_blank" rel="noopener noreferrer">{sesion.link}</a></p>
      <Button variant="primary">Unirse</Button>
    </Card>
  );
}

export default SesionItem;
