import { createContext, useContext, useState } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const WishlistContext = ({ children }) => {
  const [showWishlist, setShowWishlist] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const onWishlistAdd = (product, quantity = 1) => {
    // * checks if product already exists in the wishlist and returns product
    const checkProductInWishlist = wishlistItems.find(
      item => product.id === item.id
    );

    // * if product exists, increase the quantity only, else add a new product entry
    if (checkProductInWishlist) {
      const newWishlistItems = wishlistItems.filter(
        item => item.id !== product.id
      );

      setTotalQuantity(previousQuantity => previousQuantity - 1);
      setWishlistItems(newWishlistItems);
      toast.error(`${product.name} removed from wishlist.`);
    } else {
      setTotalQuantity(previousQuantity => previousQuantity + 1);

      setWishlistItems([...wishlistItems, { ...product }]);
      toast.success(`${product.name} added to wishlist.`);
    }
  };

  return (
    <Context.Provider
      value={{
        showWishlist,
        setShowWishlist,
        wishlistItems,
        setWishlistItems,
        totalQuantity,
        setTotalQuantity,
        onWishlistAdd,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useWishlistContext = () => useContext(Context);
