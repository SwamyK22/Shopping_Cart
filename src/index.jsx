import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './app';
import { AuthProvider } from './context/authContext';
import { ErrorProvider } from './context/errorContext';
import { LoadingProvider } from './context/loadingContext';
import './style.scss';
import rootReducer from './reducers';

const container = document.getElementById('root');
const root = createRoot(container);

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
root.render(
  <Provider store={store}>
    <LoadingProvider>
      <ErrorProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ErrorProvider>
    </LoadingProvider>
  </Provider>,
);
