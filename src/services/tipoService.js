import api from './api';

const TIPO_URL = '/tipos';

export const getTipos = async () => {
  const response = await api.get(TIPO_URL);
  return response.data;
};

export const createTipo = async (tipoData) => {
  const response = await api.post(TIPO_URL, tipoData);
  return response.data;
};

export const updateTipo = async (tipoId, tipoData) => {
  const response = await api.put(`${TIPO_URL}/${tipoId}`, tipoData);
  return response.data;
};

export const deleteTipo = async (tipoId) => {
  await api.delete(`${TIPO_URL}/${tipoId}`);
};