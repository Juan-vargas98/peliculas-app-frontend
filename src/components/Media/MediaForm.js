import React, { useState, useEffect } from 'react';

const MediaForm = ({ initialData, onSave, generos, directores, productoras, tipos }) => {
  const [formData, setFormData] = useState({
    serial: '',
    titulo: '',
    sinopsis: '',
    url: '',
    imagen: '',
    anioEstreno: '',
    generoPrincipal: '',
    directorPrincipal: '',
    productoraPrincipal: '',
    tipo: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        serial: '', titulo: '', sinopsis: '', url: '', imagen: '',
        anioEstreno: '', generoPrincipal: '', directorPrincipal: '',
        productoraPrincipal: '', tipo: ''
      });
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
      <h2>{initialData ? 'Editar Media' : 'Crear Media'}</h2>
      <div>
        <label htmlFor="serial">Serial:</label>
        <input type="text" id="serial" name="serial" value={formData.serial} onChange={handleInputChange} required />
      </div>
      <div>
        <label htmlFor="titulo">Título:</label>
        <input type="text" id="titulo" name="titulo" value={formData.titulo} onChange={handleInputChange} required />
      </div>
      <div>
        <label htmlFor="sinopsis">Sinopsis:</label>
        <textarea id="sinopsis" name="sinopsis" value={formData.sinopsis} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="url">URL:</label>
        <input type="url" id="url" name="url" value={formData.url} onChange={handleInputChange} required />
      </div>
      <div>
        <label htmlFor="imagen">Imagen (URL):</label>
        <input type="url" id="imagen" name="imagen" value={formData.imagen} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="anioEstreno">Año de Estreno:</label>
        <input type="number" id="anioEstreno" name="anioEstreno" value={formData.anioEstreno} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="generoPrincipal">Género Principal:</label>
        <select id="generoPrincipal" name="generoPrincipal" value={formData.generoPrincipal} onChange={handleInputChange} required>
          <option value="">Selecciona un Género</option>
          {generos.map((genero) => (
            <option key={genero._id} value={genero._id}>
              {genero.nombre}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="directorPrincipal">Director Principal:</label>
        <select id="directorPrincipal" name="directorPrincipal" value={formData.directorPrincipal} onChange={handleInputChange} required>
          <option value="">Selecciona un Director</option>
          {directores.map((director) => (
            <option key={director._id} value={director._id}>
              {director.nombres}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="productoraPrincipal">Productora Principal:</label>
        <select id="productoraPrincipal" name="productoraPrincipal" value={formData.productoraPrincipal} onChange={handleInputChange} required>
          <option value="">Selecciona una Productora</option>
          {productoras.map((productora) => (
            <option key={productora._id} value={productora._id}>
              {productora.nombreProductora}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="tipo">Tipo:</label>
        <select id="tipo" name="tipo" value={formData.tipo} onChange={handleInputChange} required>
          <option value="">Selecciona un Tipo</option>
          {tipos.map((tipo) => (
            <option key={tipo._id} value={tipo._id}>
              {tipo.nombre}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">{initialData ? 'Actualizar' : 'Guardar'}</button>
    </form>
  );
};

export default MediaForm;