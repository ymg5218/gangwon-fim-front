import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MainPage from './main/mainPage';
import ProductPage from './components/ProductPage';
import CategoryTabs from './components/CategoryTabs';
import UploadItem from './components/UploadItem';

function App() {
  const [showMainPage, setShowMainPage] = useState(true);
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    console.log("카테고리 핸들러 작동");
    setShowMainPage(false);
  }

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
          element={showMainPage && <MainPage />}
        />
        <Route element={!showMainPage && <CategoryTabs onCategoryClick={handleCategoryClick} />} />
        <Route path="/detailedView/:p_id" element={<ProductPage />} />
        <Route path='/upload' element={<UploadItem />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
