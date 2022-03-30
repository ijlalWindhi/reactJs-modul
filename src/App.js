import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/login/login.js';
import Register from './pages/register/register.js';
import Galery from './pages/galery/galery.js';
import Cart from './pages/galery/cart.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/galery" element={<Galery />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;