// Card.js
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ pelicula }) => {
  return (
    <div className="card">
      <img src={pelicula.img} alt={pelicula.nombre} />
      <h2>{pelicula.nombre}</h2>
      <p>{pelicula.descripcion}</p>
      <p>{pelicula.tipo}</p>

      <Link to={`/player/${pelicula.id}`}>Ver película</Link>
    </div>
  );
};

export default Card;
