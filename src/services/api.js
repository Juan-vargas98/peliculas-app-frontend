import axios from 'axios';

// 🚨 CORRECCIÓN FINAL: Incluir el prefijo '/api' que usa su servidor backend.
const API_BASE_URL = 'https://peliculas-app-backend.onrender.com/api'; 

const api = axios.create({
  baseURL: API_BASE_URL, // Ahora apunta a 'https://...onrender.com/api'
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
