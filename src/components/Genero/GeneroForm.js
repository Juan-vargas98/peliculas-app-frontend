// src/components/Genero/GeneroForm.js

import React, { useState, useEffect } from 'react';

const GeneroForm = ({ initialData, onSave }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: ''
  });

  // useEffect para cargar los datos si se está editando un género.
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        nombre: '',
        descripcion: ''
      });
    }
  }, [initialData]); // Se ejecuta cada vez que initialData cambia.

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{initialData ? 'Editar Género' : 'Crear Género'}</h2>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
          required
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

export default GeneroForm;