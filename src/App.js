import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Player from './pages/Player';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Rutinas from './pages/Rutinas';
import Ejercicios from './pages/Ejercicios';
import UserListed from "./pages/UserListed";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/player/:id" element={<Player />} />
        <Route exact path="/rutinas" element={<Rutinas />} />
        <Route exact path="/ejercicios" element={<Ejercicios />} />
        <Route exact path="/new" element={<Player />} />
        <Route exact path="/mylist" element={<UserListed />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
