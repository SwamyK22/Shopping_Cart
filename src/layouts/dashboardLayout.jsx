import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Erorrs from '../components/Errors';
import Header from '../components/header';
import { AuthContext } from '../context/authContext';
import { CartProvider } from '../context/cartContext';
import { CounterProvider } from '../context/counterContext';
import { ProductsProvider } from '../context/productsContext';

function DashboardLayout() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/auth" replace />;
  }
  return (
    <ProductsProvider>
      <CartProvider>
        <CounterProvider>
          <Header />
          <Outlet />
          <Erorrs />
        </CounterProvider>
      </CartProvider>
    </ProductsProvider>
  );
}

export default DashboardLayout;
