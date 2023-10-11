import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../../components';
import FavoritesProvider from '../../context/Favorites';

function DefaultPage() {
  return (
    <main>
      <Header />
      <FavoritesProvider>
        <Outlet />
      </FavoritesProvider>
      <Footer />
    </main>
  );
}

export default DefaultPage;
