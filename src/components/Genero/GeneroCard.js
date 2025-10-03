// src/components/Genero/GeneroCard.js

import React from 'react';

const GeneroCard = ({ genero, onEdit, onDelete }) => {
  return (
    <div className="genero-card">
      <h3>{genero.nombre}</h3>
      <p><strong>Descripción:</strong> {genero.descripcion}</p>
      <p><strong>Estado:</strong> {genero.estado}</p>
      <p><strong>Fecha de Creación:</strong> {new Date(genero.fechaCreacion).toLocaleDateString()}</p>
      <p><strong>Fecha de Actualización:</strong> {new Date(genero.fechaActualizacion).toLocaleDateString()}</p>
      <div className="card-actions">
        {/* Usamos el ID del género para saber cuál vamos a editar. */}
        <button onClick={() => onEdit(genero._id)}>Editar</button>
        {/* Usamos el ID del género para saber cuál vamos a borrar. */}
        <button onClick={() => onDelete(genero._id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default GeneroCard;