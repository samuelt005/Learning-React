import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Global from './global';
import { Header, Footer } from './components';
import {
  AboutMe,
  Default,
  HomePage,
  NotFound,
} from './pages';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Global />
      <Header />
      <Routes>
        <Route path="/" element={<Default />}>
          <Route index element={<HomePage />} />
          <Route path="aboutme" element={<AboutMe />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
