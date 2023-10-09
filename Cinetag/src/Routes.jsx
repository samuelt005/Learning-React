import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FavoritesProvider from './context/Favorites';
import { Footer, Header } from './components';
import { Home, Favorites } from './pages';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </FavoritesProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
