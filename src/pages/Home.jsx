import React, { useState } from 'react';
import Card from '../components/Card';
import dataPeliculas from '../data/peliculas.json';
import '../styles/styles.css';
import Navbar from '../components/Navbar';
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import backgroundImage from '../assets/img/backgroundhero.jpg';
import energyLogo from '../assets/img/energyhome.webp';
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import styled from "styled-components";

const Home = () => {
  const [category, setCategory] = useState('all');
  const peliculas = dataPeliculas.peliculas;
  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });

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
    <Container>
      <Navbar handleCategoryChange={handleCategoryChange} />
      <div className='hero'>
        <img src={backgroundImage} alt="background-image" className="background-image" />
        <div className='container'>
          <div className='logo'>
            <img src={energyLogo} alt="energy-logo" />
          </div>
          <div className='buttons flex'>
            <button
              onClick={() => navigate("/player")}
              className='flex j-center a-center'
            >
              <FaPlay />
              Play
            </button>
            <button className="flex j-center a-center">
              <AiOutlineInfoCircle />
              Mas Info
            </button>
          </div>
        </div>
      </div>
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
    </Container>
  );
};

const Container = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .background-image {
      filter: brightness(60%);
    }
    img {
      height: 100vh;
      width: 100vw;
      object-fit: cover;
    }
    .container {
      position: absolute;
      bottom: 5rem;
      .logo {
        img {
          width: 40%;
          height: auto;
          margin-left: 5rem;
        }
      }
      .buttons {
        margin: 5rem;
        gap: 2rem;
        button {
          font-size: 1.4rem;
          gap: 1rem;
          border-radius: 0.2rem;
          padding: 0.5rem;
          padding-left: 2rem;
          padding-right: 2.4rem;
          border: none;
          cursor: pointer;
          transition: 0.2s ease-in-out;
          &:hover {
            opacity: 0.8;
          }
          &:nth-of-type(2) {
            background-color: rgba(109, 109, 110, 0.7);
            color: white;
            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
`;

export default Home;
