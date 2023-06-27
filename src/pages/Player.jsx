<<<<<<< HEAD
import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { BsArrowLeft, BsX } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import dataPeliculas from '../data/peliculas.json';

const Player = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const videoRef = useRef(null);
  const [resumeTime, setResumeTime] = useState(null);

  useEffect(() => {
    const savedTime = localStorage.getItem("videoTime");
    if (savedTime) {
      const currentTime = parseFloat(savedTime);
      videoRef.current.currentTime = currentTime;
      setResumeTime(currentTime);
    }
  }, []);

  const handleVideoPlay = () => {
    if (resumeTime !== null) {
      const confirmation = window.confirm("¿Deseas reanudar la reproducción desde donde lo dejaste?");
      if (confirmation) {
        videoRef.current.currentTime = resumeTime;
      } else {
        setResumeTime(null);
        videoRef.current.currentTime = 0;
        localStorage.removeItem("videoTime");
      }
    }
  };

  const handleVideoTimeUpdate = () => {
    const currentTime = videoRef.current.currentTime;
    if (Math.abs(currentTime - resumeTime) >= 5) {
      setResumeTime(currentTime);
      localStorage.setItem("videoTime", currentTime.toString());
    }
  };

  const handleClose = () => {
    videoRef.current.pause();
    navigate(-1);
  };

  const getPeliculaById = (id) => {
    return dataPeliculas.peliculas.find((pelicula) => pelicula.id === parseInt(id));
  };

  const pelicula = getPeliculaById(id);

  if (!pelicula) {
    return <div>Video no encontrado</div>;
  }

  return (
    <Container>
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={handleClose} />
        </div>
        <video
          ref={videoRef}
          src={pelicula.videoUrl}
          controls
          onPlay={handleVideoPlay}
          onTimeUpdate={handleVideoTimeUpdate}
        />
        <div className="close-button">
          <BsX onClick={handleClose} />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .player {
    width: 100vw;
    height: 100vh;
    position: relative;

    .back {
      position: absolute;
      top: 2rem;
      left: 2rem;
      z-index: 1;

      svg {
        font-size: 3rem;
        cursor: pointer;
      }
    }

    video {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    .close-button {
      position: absolute;
      top: 2rem;
      right: 2rem;
      z-index: 1;

      svg {
        font-size: 3rem;
        cursor: pointer;
      }
    }
  }
};`
=======
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
>>>>>>> 586e0e57f040893c1c2b02b84c7cfe85a87afaa9

export default Player;
