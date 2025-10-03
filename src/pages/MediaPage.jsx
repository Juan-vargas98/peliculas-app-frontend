import React, { useState, useEffect } from 'react';
import MediaForm from '../components/Media/MediaForm';
import MediaList from '../components/Media/MediaList';
import { getMedia, createMedia, updateMedia, deleteMedia } from '../services/mediaService';
import { getGeneros } from '../services/generoService';
import { getDirectores } from '../services/directorService';
import { getProductoras } from '../services/productoraService';
import { getTipos } from '../services/tipoService';

const MediaPage = () => {
  const [mediaList, setMediaList] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [directores, setDirectores] = useState([]);
  const [productoras, setProductoras] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingMedia, setEditingMedia] = useState(null);

  const fetchDependencies = async () => {
    try {
      setLoading(true);
      const [mediaData, generosData, directoresData, productorasData, tiposData] = await Promise.all([
        getMedia(),
        getGeneros(),
        getDirectores(),
        getProductoras(),
        getTipos(),
      ]);
      setMediaList(mediaData);
      setGeneros(generosData);
      setDirectores(directoresData);
      setProductoras(productorasData);
      setTipos(tiposData);
    } catch (err) {
      setError('No se pudo cargar los datos necesarios.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDependencies();
  }, []);

  const handleCreateOrUpdate = async (mediaData) => {
    try {
      if (editingMedia) {
        const updatedMedia = await updateMedia(editingMedia._id, mediaData);
        setMediaList(mediaList.map(m => (m._id === updatedMedia._id ? updatedMedia : m)));
        setEditingMedia(null);
      } else {
        const newMedia = await createMedia(mediaData);
        setMediaList([...mediaList, newMedia]);
      }
      await fetchDependencies();
    } catch (err) {
      setError(`No se pudo ${editingMedia ? 'actualizar' : 'crear'} el elemento.`);
      console.error(err);
    }
  };

  const handleEdit = (mediaId) => {
    const mediaToEdit = mediaList.find(m => m._id === mediaId);
    setEditingMedia(mediaToEdit);
  };

  const handleDelete = async (mediaId) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este elemento?')) {
      try {
        await deleteMedia(mediaId);
        setMediaList(mediaList.filter(m => m._id !== mediaId));
      } catch (err) {
        setError('No se pudo eliminar el elemento.');
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
      <h1>Módulo de Media</h1>
      <MediaForm
        initialData={editingMedia}
        onSave={handleCreateOrUpdate}
        generos={generos}
        directores={directores}
        productoras={productoras}
        tipos={tipos}
      />
      <hr />
      <h2>Lista de Media</h2>
      <MediaList
        mediaList={mediaList}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default MediaPage;