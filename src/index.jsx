import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import { AuthProvider } from './context/authContext';
import { ErrorProvider } from './context/errorContext';
import { LoadingProvider } from './context/loadingContext';
import './style.scss';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <LoadingProvider>
    <ErrorProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ErrorProvider>
  </LoadingProvider>,
);
