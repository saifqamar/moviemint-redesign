import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Marketplace from './pages/MarketPlace';
import ProductDetailsPage from './pages/ProductDetails';
import ProductionHousePage from './pages/productionHousePage';
import ShortPage from './pages/ShortsPage';
import LoginPage from './pages/logInPage';
import SignUPPage from './pages/signupPage';

function App() {
  return (
    <div>
      <BrowserRouter className="App controlling-flow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/marketpalce" element={<Marketplace />} />
          <Route path="/:url" element={<ProductDetailsPage />} />
          <Route path="/productionhouse/:user" element={<ProductionHousePage />} />
          <Route path="/shorts" element={<ShortPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUPPage />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
