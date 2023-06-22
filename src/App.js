import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Player from './pages/Player';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/player/:id" element={<Player />}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
