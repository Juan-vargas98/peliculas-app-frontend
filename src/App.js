import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GeneroPage from './pages/GeneroPage.jsx';
import DirectorPage from './pages/DirectorPage.jsx';
import ProductoraPage from './pages/ProductoraPage.jsx';
import TipoPage from './pages/TipoPage.jsx';
import MediaPage from './pages/MediaPage.jsx';
import HomePage from './pages/HomePage.jsx'; // Correct import statement
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/generos">Géneros</Link>
            </li>
            <li>
              <Link to="/directores">Directores</Link>
            </li>
            <li>
              <Link to="/productoras">Productoras</Link>
            </li>
            <li>
              <Link to="/tipos">Tipos</Link>
            </li>
            <li>
              <Link to="/media">Media</Link>
            </li>
          </ul>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/generos" element={<GeneroPage />} />
            <Route path="/directores" element={<DirectorPage />} />
            <Route path="/productoras" element={<ProductoraPage />} />
            <Route path="/tipos" element={<TipoPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;