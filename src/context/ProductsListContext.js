import { onSnapshot } from 'firebase/firestore';
import { createContext, useContext, useEffect, useState } from 'react';
import { colRef } from '../components/Firebase';

const Context = createContext();

export const ProductsListContext = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    onSnapshot(colRef, snapshot => {
      let productsList = [];
      snapshot.docs.forEach(doc => {
        productsList.push({ ...doc.data(), id: doc.id });
      });
      setProducts(productsList);
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Context.Provider
      value={{
        products,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useProductsListContext = () => useContext(Context);
