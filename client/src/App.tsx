import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="bg-[#f9faf5] text-gray-900">
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
