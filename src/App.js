import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/pages/Home';
import Services from './Components/pages/Services';
import Products from './Components/pages/Product';
import SignUp from './Components/pages/SignUp';

function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
