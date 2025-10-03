import React, { useState, useEffect } from 'react';
import { getMedia } from '../services/mediaService';
import './HomePage.css';

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await getMedia();
                // Verificación para asegurar que la respuesta es un array
                if (Array.isArray(response)) {
                    setMovies(response);
                } else {
                    console.error("La respuesta de la API no es un array:", response);
                    setMovies([]); // Aseguramos que movies sea siempre un array vacío
                }
            } catch (error) {
                console.error("Error al cargar las películas", error);
                setMovies([]); // En caso de error, resetear a un array vacío
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className="home-page">
            <h2>Bienvenido al panel de administración de películas y series.</h2>
            <div className="image-container">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <a key={movie._id} href={movie.url} target="_blank" rel="noopener noreferrer">
                            <img src={movie.imagen} alt={movie.titulo} className="movie-image" />
                        </a>
                    ))
                ) : (
                    <p>No hay películas registradas. Por favor, agregue algunas en la sección "Media".</p>
                )}
            </div>
        </div>
    );
};

export default HomePage;