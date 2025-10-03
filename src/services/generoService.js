import api from './api';

const GENERO_URL = '/generos';

export const getGeneros = async () => {
  const response = await api.get(GENERO_URL);
  return response.data;
};

export const createGenero = async (generoData) => {
  const response = await api.post(GENERO_URL, generoData);
  return response.data;
};

export const updateGenero = async (generoId, generoData) => {
  const response = await api.put(`${GENERO_URL}/${generoId}`, generoData);
  return response.data;
};

export const deleteGenero = async (generoId) => {
  await api.delete(`${GENERO_URL}/${generoId}`);
};