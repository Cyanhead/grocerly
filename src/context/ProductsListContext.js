import { onSnapshot } from 'firebase/firestore';
import { createContext, useContext, useEffect, useState } from 'react';
import { productsColRef } from './Firebase';

const Context = createContext();

export const ProductsListContext = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let unsubCollection;

    const fetchProducts = () => {
      unsubCollection = onSnapshot(productsColRef, snapshot => {
        let productsList = [];
        snapshot.docs.forEach(doc => {
          productsList.push({ ...doc.data(), id: doc.id });
        });
        setProducts(productsList);
      });
    };

    fetchProducts();

    return unsubCollection;
  }, []);

  return (
    <Context.Provider
      value={{
        products
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useProductsListContext = () => useContext(Context);
