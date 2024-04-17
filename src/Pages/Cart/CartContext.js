import { React, useState, useContext, createContext } from "react";
import { getSpecials } from "../../Data/specialsrepository";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [specials, setSpecials] = useState(getSpecials());

  // Initialise an empty cart
  const initCart = () => {
    let cart = {};
    for (let i = 1; i <= specials.length; ++i) {
      cart[i] = 0;
    }
    return cart;
  };

  const [cartItems, setCartItems] = useState(initCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log("something happened");
  };

  const removeFromCart = (itemId) => {
    if (cartItems[itemId] == 0) return;

    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        cartItems,
        specials,
        updateCartItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  return useContext(CartContext);
};

export { useCart, CartProvider };
