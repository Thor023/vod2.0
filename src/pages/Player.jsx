// Player.js
import React from 'react';
import { useParams } from 'react-router-dom';
import dataPeliculas from '../data/peliculas.json';

const Player = () => {
  const { id } = useParams();
  const pelicula = dataPeliculas.peliculas.find((pelicula) => pelicula.id === parseInt(id));

  if (!pelicula) {
    return <div>Película no encontrada</div>;
  }

  // Aquí puedes utilizar el reproductor de video (por ejemplo, video.js o React Player)
  // para reproducir el video y gestionar la funcionalidad adicional del reproductor.

  return (
    <div>
      <h2>{pelicula.nombre}</h2>
      <p>{pelicula.descripcion}</p>
      <video controls src={pelicula.videoUrl} />
    </div>
  );
};

export default Player;
