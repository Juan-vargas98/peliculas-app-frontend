import React, { useState, useEffect } from 'react';

const ProductoraForm = ({ initialData, onSave }) => {
  const [formData, setFormData] = useState({
    nombreProductora: '',
    slogan: '',
    descripcion: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({ nombreProductora: '', slogan: '', descripcion: '' });
    }
  }, [initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{initialData ? 'Editar Productora' : 'Crear Productora'}</h2>
      <div>
        <label htmlFor="nombreProductora">Nombre:</label>
        <input
          type="text"
          id="nombreProductora"
          name="nombreProductora"
          value={formData.nombreProductora}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="slogan">Slogan:</label>
        <input
          type="text"
          id="slogan"
          name="slogan"
          value={formData.slogan}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="descripcion">Descripción:</label>
        <textarea
          id="descripcion"
          name="descripcion"
          value={formData.descripcion}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">{initialData ? 'Actualizar' : 'Guardar'}</button>
    </form>
  );
};

export default ProductoraForm;