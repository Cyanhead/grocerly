import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Toaster } from 'react-hot-toast';

import Firebase, { FirebaseContext } from './context/Firebase';
import { ProductsListContext } from './context/ProductsListContext';
import { CartContext } from './context/CartContext';
import { WishlistContext } from './context/WIshlistContext';
import { AuthContext } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={Firebase}>
      <ProductsListContext>
        <CartContext>
          <WishlistContext>
            <AuthContext>
              <Toaster />
              <App />
            </AuthContext>
          </WishlistContext>
        </CartContext>
      </ProductsListContext>
    </FirebaseContext.Provider>
  </React.StrictMode>
);
