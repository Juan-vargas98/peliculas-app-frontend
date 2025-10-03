// src/components/Genero/GeneroList.js

import React from 'react';
import GeneroCard from './GeneroCard';

// Este componente recibe la lista de géneros y las funciones para editar y borrar.
const GeneroList = ({ generos, onEdit, onDelete }) => {
  return (
    <div className="generos-list">
      {generos.length > 0 ? (
        generos.map((genero) => (
          // Por cada género, renderizamos la tarjeta.
          // Le pasamos las funciones de editar y borrar como props.
          <GeneroCard
            key={genero._id}
            genero={genero}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p>No hay géneros para mostrar.</p>
      )}
    </div>
  );
};

export default GeneroList;