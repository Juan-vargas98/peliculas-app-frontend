import React, { useState, useEffect } from 'react';
import DirectorForm from '../components/Director/DirectorForm';
import DirectorList from '../components/Director/DirectorList';
import { getDirectores, createDirector, updateDirector, deleteDirector } from '../services/directorService';

const DirectorPage = () => {
  const [directores, setDirectores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingDirector, setEditingDirector] = useState(null);

  const fetchDirectores = async () => {
    try {
      setLoading(true);
      const data = await getDirectores();
      setDirectores(data);
    } catch (err) {
      setError('No se pudo cargar la lista de directores.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDirectores();
  }, []);

  const handleCreateOrUpdate = async (directorData) => {
    try {
      if (editingDirector) {
        const updatedDirector = await updateDirector(editingDirector._id, directorData);
        setDirectores(directores.map(d => (d._id === updatedDirector._id ? updatedDirector : d)));
        setEditingDirector(null);
      } else {
        const newDirector = await createDirector(directorData);
        setDirectores([...directores, newDirector]);
      }
      await fetchDirectores();
    } catch (err) {
      setError(`No se pudo ${editingDirector ? 'actualizar' : 'crear'} el director.`);
      console.error(err);
    }
  };

  const handleEdit = (directorId) => {
    const directorToEdit = directores.find(d => d._id === directorId);
    setEditingDirector(directorToEdit);
  };

  const handleDelete = async (directorId) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este director?')) {
      try {
        await deleteDirector(directorId);
        setDirectores(directores.filter(d => d._id !== directorId));
      } catch (err) {
        setError('No se pudo eliminar el director.');
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
      <h1>Módulo de Directores</h1>
      <DirectorForm
        initialData={editingDirector}
        onSave={handleCreateOrUpdate}
      />
      <hr />
      <h2>Lista de Directores</h2>
      <DirectorList
        directores={directores}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default DirectorPage;