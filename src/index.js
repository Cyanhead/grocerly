import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Toaster } from 'react-hot-toast';

import Firebase, { FirebaseContext } from './components/Firebase';
import { CartContext } from './context/CartContext';
import { ProductsListContext } from './context/ProductsListContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={Firebase}>
      <ProductsListContext>
        <CartContext>
          <Toaster />
          <App />
        </CartContext>
      </ProductsListContext>
    </FirebaseContext.Provider>
  </React.StrictMode>
);
