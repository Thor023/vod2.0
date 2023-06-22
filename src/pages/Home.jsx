import React, { useState } from 'react';
import Card from '../components/Card';
import dataPeliculas from '../data/peliculas.json';
import '../styles/styles.css';
import Navbar from '../components/Navbar';

const Home = () => {
  const [category, setCategory] = useState('all');
  const peliculas = dataPeliculas.peliculas;

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const filteredPeliculas =
    category === 'all'
      ? peliculas
      : peliculas.filter((pelicula) => {
          if (category === 'rutinas') {
            return pelicula.tipo === 'rutinas';
          } else if (category === 'ejercicios') {
            return pelicula.tipo === 'ejercicios';
          }
          return true;
        });

  return (
    <div className="app">
      <Navbar handleCategoryChange={handleCategoryChange} />
      <h1>Contenido</h1>
      <div className="card-container">
        {filteredPeliculas.length > 0 ? (
          filteredPeliculas.map((pelicula) => (
            <Card key={pelicula.id} pelicula={pelicula} />
          ))
        ) : (
          <p>No hay Contenido disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
