import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Toaster } from 'react-hot-toast';

import Firebase, { FirebaseContext } from './components/Firebase';
import { StateContext } from './context/StateContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={Firebase}>
      <StateContext>
        <Toaster />
        <App />
      </StateContext>
    </FirebaseContext.Provider>
  </React.StrictMode>
);
