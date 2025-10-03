import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const MEDIA_URL = '/media';

export const getMedia = async () => {
  const response = await api.get(MEDIA_URL);
  return response.data;
};

export const createMedia = async (mediaData) => {
  const response = await api.post(MEDIA_URL, mediaData);
  return response.data;
};

export const updateMedia = async (mediaId, mediaData) => {
  const response = await api.put(`${MEDIA_URL}/${mediaId}`, mediaData);
  return response.data;
};

export const deleteMedia = async (mediaId) => {
  await api.delete(`${MEDIA_URL}/${mediaId}`);
};