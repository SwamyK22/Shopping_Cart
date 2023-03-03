import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Header from '../components/header';
import { AuthContext } from '../context/authContext';

function DashboardLayout() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/auth" replace />;
  }
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default DashboardLayout;
