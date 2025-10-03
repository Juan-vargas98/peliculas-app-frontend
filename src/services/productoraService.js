import api from './api';

const PRODUCTORA_URL = '/productoras';

export const getProductoras = async () => {
  const response = await api.get(PRODUCTORA_URL);
  return response.data;
};

export const createProductora = async (productoraData) => {
  const response = await api.post(PRODUCTORA_URL, productoraData);
  return response.data;
};

export const updateProductora = async (productoraId, productoraData) => {
  const response = await api.put(`${PRODUCTORA_URL}/${productoraId}`, productoraData);
  return response.data;
};

export const deleteProductora = async (productoraId) => {
  await api.delete(`${PRODUCTORA_URL}/${productoraId}`);
};