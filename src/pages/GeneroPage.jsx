// src/pages/GeneroPage.jsx

import React, { useState, useEffect } from 'react';
import GeneroForm from '../components/Genero/GeneroForm';
import GeneroList from '../components/Genero/GeneroList';
import { getGeneros, createGenero, updateGenero, deleteGenero } from '../services/generoService';

const GeneroPage = () => {
  const [generos, setGeneros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingGenero, setEditingGenero] = useState(null); // Estado para guardar el género que se está editando.

  const fetchGeneros = async () => {
    try {
      setLoading(true);
      const data = await getGeneros();
      setGeneros(data);
    } catch (err) {
      setError('No se pudo cargar la lista de géneros.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGeneros();
  }, []);

  // Maneja la creación de un nuevo género.
  const handleCreateOrUpdate = async (generoData) => {
    try {
      if (editingGenero) {
        // Lógica de edición
        const updatedGenero = await updateGenero(editingGenero._id, generoData);
        // Actualizamos la lista de géneros sin recargar la página.
        setGeneros(generos.map(g => (g._id === updatedGenero._id ? updatedGenero : g)));
        setEditingGenero(null); // Limpiamos el estado de edición.
      } else {
        // Lógica de creación
        const newGenero = await createGenero(generoData);
        setGeneros([...generos, newGenero]);
      }
      // Volvemos a obtener la lista para asegurar que esté actualizada.
      await fetchGeneros();
    } catch (err) {
      setError(`No se pudo ${editingGenero ? 'actualizar' : 'crear'} el género.`);
      console.error(err);
    }
  };

  // Prepara el formulario para la edición.
  const handleEdit = (generoId) => {
    const generoToEdit = generos.find(g => g._id === generoId);
    setEditingGenero(generoToEdit);
  };

  // Maneja el borrado de un género.
  const handleDelete = async (generoId) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este género?')) {
      try {
        await deleteGenero(generoId);
        // Filtramos la lista para remover el género borrado.
        setGeneros(generos.filter(g => g._id !== generoId));
      } catch (err) {
        setError('No se pudo eliminar el género.');
        console.error(err);
      }
    }
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Módulo de Géneros</h1>
      {/* Le pasamos el género a editar al formulario. */}
      <GeneroForm
        initialData={editingGenero}
        onSave={handleCreateOrUpdate}
      />
      <hr />
      <h2>Lista de Géneros</h2>
      {/* Le pasamos las funciones de editar y borrar a la lista. */}
      <GeneroList
        generos={generos}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default GeneroPage;