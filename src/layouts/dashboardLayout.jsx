import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header';

function DashboardLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default DashboardLayout;
