import React from 'react';

const MediaCard = ({ media, onEdit, onDelete }) => {
  return (
    <div className="card media-card">
      <img src={media.imagen} alt={media.titulo} style={{ maxWidth: '100px' }} />
      <h3>{media.titulo}</h3>
      <p><strong>Serial:</strong> {media.serial}</p>
      <p><strong>Sinopsis:</strong> {media.sinopsis}</p>
      <p><strong>URL:</strong> <a href={media.url} target="_blank" rel="noopener noreferrer">Ver</a></p>
      <p><strong>Año de Estreno:</strong> {media.anioEstreno}</p>
      <p><strong>Género:</strong> {media.generoPrincipal?.nombre}</p>
      <p><strong>Director:</strong> {media.directorPrincipal?.nombres}</p>
      <p><strong>Productora:</strong> {media.productoraPrincipal?.nombreProductora}</p>
      <p><strong>Tipo:</strong> {media.tipo?.nombre}</p>
      <div className="card-actions">
        <button onClick={() => onEdit(media._id)}>Editar</button>
        <button onClick={() => onDelete(media._id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default MediaCard;