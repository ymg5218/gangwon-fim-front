import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import MainPage from './main/mainPage';
import ProductPage from './components/ProductPage';
import CategoryTabs from './components/CategoryTabs';

function App() {
  const [showMainPage, setShowMainPage] = useState(true);
  const [showCategorypage, setCategoryPage] = useState(false);

  const handleCategoryClick = () => {
    setCategoryPage(true);
    setShowMainPage(false);
  };

  const handleHomeClick = () => {
    setCategoryPage(false);
    setShowMainPage(true);
  };

  return (
    <div className="App">
      <Header onHomeClick={handleHomeClick} />
      <Routes>
        <Route path="/" element={showMainPage ? <MainPage /> : <CategoryTabs onCategoryClick={handleCategoryClick} />} />
        <Route path="/category" element={showCategorypage ? <MainPage /> : <CategoryTabs onCategoryClick={handleCategoryClick} />} />
        <Route path='/detailedView/:p_id' element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;