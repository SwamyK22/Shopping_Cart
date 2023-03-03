import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import { AuthProvider } from './context/authContext';
import './style.scss';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
);
