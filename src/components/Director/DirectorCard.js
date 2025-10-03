import React from 'react';

const DirectorCard = ({ director, onEdit, onDelete }) => {
  return (
    <div className="card director-card">
      <h3>{director.nombres}</h3>
      <p><strong>Estado:</strong> {director.estado}</p>
      <p><strong>Fecha de Creación:</strong> {new Date(director.fechaCreacion).toLocaleDateString()}</p>
      <p><strong>Fecha de Actualización:</strong> {new Date(director.fechaActualizacion).toLocaleDateString()}</p>
      <div className="card-actions">
        <button onClick={() => onEdit(director._id)}>Editar</button>
        <button onClick={() => onDelete(director._id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default DirectorCard;