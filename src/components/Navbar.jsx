import React, { useState } from 'react';
import { firebaseAuth } from "../utils/firebase-config";
import { signOut } from "firebase/auth";
import { FaPowerOff, FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import logo from "../assets/img/logo1.png";

const Navbar = ({ handleCategoryChange }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);

  return (
    <Container>
      <nav>
        <div className='left'>
          <Link to="/" className='brand'>
            <img src={logo} alt="Logo" />
          </Link>
          <ul className='links'>
            <li>
              <Link to="/" onClick={() => handleCategoryChange('all')}>
                All
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => handleCategoryChange('rutinas')}>
                Rutinas
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => handleCategoryChange('ejercicios')}>
                Ejercicios
              </Link>
            </li>
          </ul>
        </div>
        <div className='right'>
          <div className={`search ${showSearch ? "show-search" : ""}`}>
            <button
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) {
                  setShowSearch(false);
                }
              }}
            >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Search"
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setShowSearch(false);
                setInputHover(false);
              }}
            />
          </div>
          <button onClick={() => signOut(firebaseAuth)}>
            <FaPowerOff />
          </button>
        </div>
      </nav>
    </Container>
  );
};

const Container = styled.div`
  .scrolled {
    background-color: black;
  }
  nav {
    position: sticky;
    top: 0;
    height: 5rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 2;
    padding: 0 4rem;
    align-items: center;
    transition: 0.3s ease-in-out;
    .left {
      display: flex;
      align-items: center;
      gap: 2rem;
      .brand {
        img {
          height: 3.5rem;
        }
      }
      .links {
        list-style-type: none;
        display: flex;
        gap: 2rem;
        li {
          a {
            color: white;
            text-decoration: none;
          }
        }
      }
    }
    .right {
      display: flex;
      align-items: center;
      gap: 1rem;
      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        &:focus {
          outline: none;
        }
        svg {
          color: #f34242;
          font-size: 1.2rem;
        }
      }
      .search {
        display: flex;
        gap: 0.4rem;
        align-items: center;
        justify-content: center;
        padding: 0.2rem;
        padding-left: 0.5rem;
        button {
          background-color: transparent;
          border: none;
          &:focus {
            outline: none;
          }
          svg {
            color: white;
            font-size: 1.2rem;
          }
        }
        input {
          width: 0;
          opacity: 0;
          visibility: hidden;
          transition: 0.3s ease-in-out;
          background-color: transparent;
          border: none;
          color: white;
          &:focus {
            outline: none;
          }
        }
      }
      .show-search {
        border: 1px solid white;
        background-color: rgba(0, 0, 0, 0.6);
        input {
          width: 100%;
          opacity: 1;
          visibility: visible;
          padding: 0.3rem;
        }
      }
    }
  }
`;

export default Navbar;
