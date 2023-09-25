import React from 'react';
import { Outlet } from 'react-router-dom';
import { Banner } from '../../components';

function Default() {
  return (
    <main>
      <Banner />
      <Outlet />
    </main>
  );
}

export default Default;
