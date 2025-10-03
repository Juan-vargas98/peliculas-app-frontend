import React from 'react';
import TipoCard from './TipoCard';

const TipoList = ({ tipos, onEdit, onDelete }) => {
  return (
    <div className="list-container">
      {tipos.length > 0 ? (
        tipos.map((tipo) => (
          <TipoCard
            key={tipo._id}
            tipo={tipo}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p>No hay tipos para mostrar.</p>
      )}
    </div>
  );
};

export default TipoList;