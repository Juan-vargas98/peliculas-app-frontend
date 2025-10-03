import React from 'react';
import MediaCard from './MediaCard';

const MediaList = ({ mediaList, onEdit, onDelete }) => {
  return (
    <div className="list-container">
      {mediaList.length > 0 ? (
        mediaList.map((media) => (
          <MediaCard
            key={media._id}
            media={media}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p>No hay media (películas/series) para mostrar.</p>
      )}
    </div>
  );
};

export default MediaList;