import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CustomNavbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel'; 
import PopularDishes from './components/PopularDishes';
import Testimonials from './components/Testimonials';
import Offers from './components/Offers';
import Menu from './components/Menu';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import IceCreamOfTheDay from './components/IceCreamOfTheDay';
import RatingSystem from './components/RatingSystem';
import FlavorRecommendation from './components/FlavorRecommendation';
import AuthForm from './components/AuthForm';
import AdminDashboard from './components/AdminDashboard';
import SpinnerGame from './components/SpinnerGame';
import Location from './components/Location';
import Contact from './components/Contact';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]); 

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]); 
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, idx) => idx !== index)); 
  };

  return (
    <Router>
      <CustomNavbar onSearch={handleSearch} />  
      
      <Routes>
        <Route path="/" element={
          <>
            <HeroCarousel />
            <PopularDishes />
            <Testimonials />
            <IceCreamOfTheDay />
            <FlavorRecommendation />
          </>
        } />
        <Route path="/menu" element={<Menu searchQuery={searchQuery} addToCart={addToCart} />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/rating" element={<RatingSystem />} />
        <Route path="/signin" element={<AuthForm />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/game" element={<SpinnerGame />} />
        <Route path="/locations" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;




