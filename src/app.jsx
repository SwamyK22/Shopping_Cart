import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CounterProvider } from './context/counterContext';
import Auth from './layouts/auth';
import DashboardLayout from './layouts/dashboardLayout';
import About from './pages/About';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },

  {
    path: '/auth',
    element: <Auth />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
]);

function App() {
  return (
    <CounterProvider>
      <RouterProvider router={router} />
    </CounterProvider>
  );
}

export default App;
