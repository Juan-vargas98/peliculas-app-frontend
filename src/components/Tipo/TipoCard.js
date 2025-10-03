import React from 'react';

const TipoCard = ({ tipo, onEdit, onDelete }) => {
  return (
    <div className="card tipo-card">
      <h3>{tipo.nombre}</h3>
      <p><strong>Descripción:</strong> {tipo.descripcion}</p>
      <p><strong>Fecha de Creación:</strong> {new Date(tipo.fechaCreacion).toLocaleDateString()}</p>
      <p><strong>Fecha de Actualización:</strong> {new Date(tipo.fechaActualizacion).toLocaleDateString()}</p>
      <div className="card-actions">
        <button onClick={() => onEdit(tipo._id)}>Editar</button>
        <button onClick={() => onDelete(tipo._id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default TipoCard;