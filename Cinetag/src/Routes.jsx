import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Home,
  Favorites,
  Player,
  NotFound,
  DefaultPage,
} from './pages';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path=":id" element={<Player />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
