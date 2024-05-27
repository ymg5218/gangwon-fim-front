import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import MainPage from './main';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/detailedView/:p_id' element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
