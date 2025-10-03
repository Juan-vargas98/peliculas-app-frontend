import api from './api';

const DIRECTOR_URL = '/directores';

export const getDirectores = async () => {
  const response = await api.get(DIRECTOR_URL);
  return response.data;
};

export const createDirector = async (directorData) => {
  const response = await api.post(DIRECTOR_URL, directorData);
  return response.data;
};

export const updateDirector = async (directorId, directorData) => {
  const response = await api.put(`${DIRECTOR_URL}/${directorId}`, directorData);
  return response.data;
};

export const deleteDirector = async (directorId) => {
  await api.delete(`${DIRECTOR_URL}/${directorId}`);
};