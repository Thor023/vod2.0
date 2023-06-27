import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ pelicula }) => {
  return (
    <div className="card">
      <Link to={`/player/${pelicula.id}`}>
        <img src={pelicula.img} alt={pelicula.nombre} />
      </Link>
      <div className="card-info">
        <h2>{pelicula.nombre}</h2>
        <p>{pelicula.descripcion}</p>
        <Link to={`/player/${pelicula.id}`} className="ver-pelicula">
          Ver película
        </Link>
      </div>
    </div>
  );
};

export default Card;
