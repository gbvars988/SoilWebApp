import { React, useState, useContext, createContext, useEffect } from "react";
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

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    if (cartItems[itemId] === 0) return;

    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  // Function to validate credit card number
  const validateCardNumber = (number) => {
    const regex = new RegExp("^[0-9]{16}$");
    return regex.test(number);
  };

  // Function to validate expiry date (MM/YY format)
  const validateExpiryDate = (expiry) => {
    const regex = new RegExp("^(0[1-9]|1[0-2])/?([0-9]{2})$");
    const result = expiry.match(regex);
    if (result) {
      const today = new Date();
      const month = today.getMonth() + 1; // getMonth() is zero-indexed
      const year = parseInt(`20${result[2]}`, 10); // convert YY to YYYY

      // Check if the year is in the future, or if it's the current year and the month hasn't passed
      return (
        year > today.getFullYear() ||
        (year === today.getFullYear() && month <= parseInt(result[1], 10))
      );
    }
    return false;
  };

  // Function to simulate a purchase
  const makePurchase = (cardNumber, expiry) => {
    if (validateCardNumber(cardNumber) && validateExpiryDate(expiry)) {
      // Proceed with the purchase
      // console.log("Purchase made successfully.");
      return true;
    } else {
      // Show validation error
      alert("Invalid card details. Please check card details and try again");
      return false;
    }
  };

  const clearCart = () => {
    setCartItems(initCart);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        cartItems,
        specials,
        updateCartItemCount,
        makePurchase,
        validateExpiryDate,
        validateCardNumber,
        clearCart,
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
