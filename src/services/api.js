import axios from 'axios';

// ¡CORRECCIÓN! Usamos la URL pública de Render para la API
const API_BASE_URL = 'https://peliculas-app-api.onrender.com/api'; 

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;