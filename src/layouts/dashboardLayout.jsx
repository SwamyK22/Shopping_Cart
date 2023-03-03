import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/header';

function DashboardLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/auth', { replace: true });
    }
  }, []);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default DashboardLayout;
