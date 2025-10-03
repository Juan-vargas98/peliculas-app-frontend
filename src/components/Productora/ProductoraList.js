import React from 'react';
import ProductoraCard from './ProductoraCard';

const ProductoraList = ({ productoras, onEdit, onDelete }) => {
  return (
    <div className="list-container">
      {productoras.length > 0 ? (
        productoras.map((productora) => (
          <ProductoraCard
            key={productora._id}
            productora={productora}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p>No hay productoras para mostrar.</p>
      )}
    </div>
  );
};

export default ProductoraList;