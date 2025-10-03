import React, { useState, useEffect } from 'react';

const DirectorForm = ({ initialData, onSave }) => {
  const [formData, setFormData] = useState({
    nombres: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({ nombres: '' });
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
      <h2>{initialData ? 'Editar Director' : 'Crear Director'}</h2>
      <div>
        <label htmlFor="nombres">Nombres:</label>
        <input
          type="text"
          id="nombres"
          name="nombres"
          value={formData.nombres}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">{initialData ? 'Actualizar' : 'Guardar'}</button>
    </form>
  );
};

export default DirectorForm;