import React, { useState, useEffect } from 'react';
import TipoForm from '../components/Tipo/TipoForm';
import TipoList from '../components/Tipo/TipoList';
import { getTipos, createTipo, updateTipo, deleteTipo } from '../services/tipoService';

const TipoPage = () => {
  const [tipos, setTipos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingTipo, setEditingTipo] = useState(null);

  const fetchTipos = async () => {
    try {
      setLoading(true);
      const data = await getTipos();
      setTipos(data);
    } catch (err) {
      setError('No se pudo cargar la lista de tipos.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTipos();
  }, []);

  const handleCreateOrUpdate = async (tipoData) => {
    try {
      if (editingTipo) {
        const updatedTipo = await updateTipo(editingTipo._id, tipoData);
        setTipos(tipos.map(t => (t._id === updatedTipo._id ? updatedTipo : t)));
        setEditingTipo(null);
      } else {
        const newTipo = await createTipo(tipoData);
        setTipos([...tipos, newTipo]);
      }
      await fetchTipos();
    } catch (err) {
      setError(`No se pudo ${editingTipo ? 'actualizar' : 'crear'} el tipo.`);
      console.error(err);
    }
  };

  const handleEdit = (tipoId) => {
    const tipoToEdit = tipos.find(t => t._id === tipoId);
    setEditingTipo(tipoToEdit);
  };

  const handleDelete = async (tipoId) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este tipo?')) {
      try {
        await deleteTipo(tipoId);
        setTipos(tipos.filter(t => t._id !== tipoId));
      } catch (err) {
        setError('No se pudo eliminar el tipo.');
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
      <h1>Módulo de Tipos</h1>
      <TipoForm
        initialData={editingTipo}
        onSave={handleCreateOrUpdate}
      />
      <hr />
      <h2>Lista de Tipos</h2>
      <TipoList
        tipos={tipos}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default TipoPage;