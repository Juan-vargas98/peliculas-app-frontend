import React from 'react';
import DirectorCard from './DirectorCard';

const DirectorList = ({ directores, onEdit, onDelete }) => {
  return (
    <div className="list-container">
      {directores.length > 0 ? (
        directores.map((director) => (
          <DirectorCard
            key={director._id}
            director={director}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p>No hay directores para mostrar.</p>
      )}
    </div>
  );
};

export default DirectorList;