import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Marketplace from './pages/MarketPlace';
import ProductDetailsPage from './pages/ProductDetails';
import ProductionHousePage from './pages/productionHousePage';

function App() {
  return (
    <div>
      <BrowserRouter className="App controlling-flow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/marketpalce" element={<Marketplace />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
          <Route path="/production-house" element={<ProductionHousePage />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
