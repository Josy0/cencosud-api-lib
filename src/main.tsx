import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { AuthProvider } from './context/authContext';
import AppRoutes from './routes/routes';
import './index.css';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(

    <StrictMode>
      <ToastContainer />
      <Provider store={store}>
        <AuthProvider>
          <Router>
            <AppRoutes />
          </Router>
        </AuthProvider>
      </Provider>
    </StrictMode>,
  );
} else {
  console.error("Root element not found");
}

