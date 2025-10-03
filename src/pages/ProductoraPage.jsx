import React, { useState, useEffect } from 'react';
import ProductoraForm from '../components/Productora/ProductoraForm';
import ProductoraList from '../components/Productora/ProductoraList';
import { getProductoras, createProductora, updateProductora, deleteProductora } from '../services/productoraService';

const ProductoraPage = () => {
  const [productoras, setProductoras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingProductora, setEditingProductora] = useState(null);

  const fetchProductoras = async () => {
    try {
      setLoading(true);
      const data = await getProductoras();
      setProductoras(data);
    } catch (err) {
      setError('No se pudo cargar la lista de productoras.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductoras();
  }, []);

  const handleCreateOrUpdate = async (productoraData) => {
    try {
      if (editingProductora) {
        const updatedProductora = await updateProductora(editingProductora._id, productoraData);
        setProductoras(productoras.map(p => (p._id === updatedProductora._id ? updatedProductora : p)));
        setEditingProductora(null);
      } else {
        const newProductora = await createProductora(productoraData);
        setProductoras([...productoras, newProductora]);
      }
      await fetchProductoras();
    } catch (err) {
      setError(`No se pudo ${editingProductora ? 'actualizar' : 'crear'} la productora.`);
      console.error(err);
    }
  };

  const handleEdit = (productoraId) => {
    const productoraToEdit = productoras.find(p => p._id === productoraId);
    setEditingProductora(productoraToEdit);
  };

  const handleDelete = async (productoraId) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta productora?')) {
      try {
        await deleteProductora(productoraId);
        setProductoras(productoras.filter(p => p._id !== productoraId));
      } catch (err) {
        setError('No se pudo eliminar la productora.');
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
      <h1>Módulo de Productoras</h1>
      <ProductoraForm
        initialData={editingProductora}
        onSave={handleCreateOrUpdate}
      />
      <hr />
      <h2>Lista de Productoras</h2>
      <ProductoraList
        productoras={productoras}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ProductoraPage;