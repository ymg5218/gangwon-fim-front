import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MainPage from './main/mainPage';
import ProductPage from './components/ProductPage';
import CategoryTabs from './components/CategoryTabs';

function App() {
  const [showMainPage, setShowMainPage] = useState(true);
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    console.log("카테고리 핸들러 작동");
    setShowMainPage(false);
    navigate('/category');
  };

  const handleHomeClick = () => {
    console.log("홈 핸들러 작동");
    setShowMainPage(true);
    navigate('/');
  };

  return (
    <div className="App">
      <Header onHomeClick={handleHomeClick} />
      <Routes>
        <Route
          path="/"
          element={showMainPage ? <MainPage /> : <CategoryTabs onCategoryClick={handleCategoryClick} />}
        />
        <Route path="/category" element={<CategoryTabs onCategoryClick={handleCategoryClick} />} />
        <Route path="/detailedView/:p_id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
