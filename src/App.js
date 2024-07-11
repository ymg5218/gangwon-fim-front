import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import MainPage from './main/mainPage';
import ProductPage from './components/ProductPage';
import CategoryGrid from './components/CategoryGrid';
import CategoryTabs from './components/CategoryTabs';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route path="/category" element={<CategoryGrid />} />
        <Route path='category/:id' element={<CategoryTabs />} />
        <Route path='/detailedView/:p_id' element={<ProductPage />} />
      </Routes>

      <Footer />
    </div>
  );
}


export default App;
