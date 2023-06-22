import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ handleCategoryChange }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" onClick={() => handleCategoryChange('all')}>
            All
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => handleCategoryChange('rutinas')}>
            TV
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => handleCategoryChange('ejercicios')}>
            Movies
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
