// src/services/generoService.js

import axios from 'axios';

const API_URL = 'http://localhost:3000/api/generos';

export const getGeneros = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los géneros:', error);
    throw error;
  }
};

export const createGenero = async (generoData) => {
  try {
    const response = await axios.post(API_URL, generoData);
    return response.data;
  } catch (error) {
    console.error('Error al crear el género:', error);
    throw error;
  }
};

// Nueva función para actualizar un género.
export const updateGenero = async (generoId, generoData) => {
  try {
    const response = await axios.put(`${API_URL}/${generoId}`, generoData);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar el género:', error);
    throw error;
  }
};

// Nueva función para eliminar un género.
export const deleteGenero = async (generoId) => {
  try {
    await axios.delete(`${API_URL}/${generoId}`);
    return true;
  } catch (error) {
    console.error('Error al eliminar el género:', error);
    throw error;
  }
};