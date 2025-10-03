import React from 'react';

const ProductoraCard = ({ productora, onEdit, onDelete }) => {
  return (
    <div className="card productora-card">
      <h3>{productora.nombreProductora}</h3>
      <p><strong>Slogan:</strong> {productora.slogan}</p>
      <p><strong>Descripción:</strong> {productora.descripcion}</p>
      <p><strong>Estado:</strong> {productora.estado}</p>
      <p><strong>Fecha de Creación:</strong> {new Date(productora.fechaCreacion).toLocaleDateString()}</p>
      <p><strong>Fecha de Actualización:</strong> {new Date(productora.fechaActualizacion).toLocaleDateString()}</p>
      <div className="card-actions">
        <button onClick={() => onEdit(productora._id)}>Editar</button>
        <button onClick={() => onDelete(productora._id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default ProductoraCard;