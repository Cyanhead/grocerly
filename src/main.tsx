import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import Firebase, { FirebaseContext } from './context/Firebase';
import { AuthProvider } from './context/auth/AuthContext';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import { GlobalStyle } from './theme/Global.style';
import router from './router';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={Firebase}>
      <GlobalStyle theme={theme} />
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Toaster />
          <RouterProvider router={router} />
        </AuthProvider>
      </ThemeProvider>
    </FirebaseContext.Provider>
  </React.StrictMode>
);
