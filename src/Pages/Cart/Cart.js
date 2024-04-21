import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext.js";
import { getSpecials } from "../../Data/specialsrepository.js";
import CartItem from "./CartItem.js";
import "./cart.css";

function Cart() {
  const [specials, setSpecials] = useState(getSpecials());
  const [subtotal, setSubtotal] = useState(0);
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    setSpecials(getSpecials());
  }, []);

  useEffect(() => {
    const updateSubtotal = () => {
      let newTotal = 0;
      for (const id in cartItems) {
        const item = specials.find((special) => special.id === Number(id));
        if (item) {
          newTotal += cartItems[id] * item.price;
        }
      }
      setSubtotal(newTotal);
    };

    updateSubtotal();
  }, [cartItems, setSpecials]);

  const handleContinueShopping = () => {
    navigate("/deals");
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className="cart-bg">
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        <div className="cart-items">
          {Object.values(cartItems).some((item) => item !== 0) ? (
            specials.map((special) => {
              if (cartItems[special.id] !== 0) {
                return <CartItem special={special} />;
              }
            })
          ) : (
            <h2>Your cart is empty. Please add some items!</h2>
          )}
          <div className="cart-total">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <button className="checkout" onClick={handleContinueShopping}>
              Continue Shopping
            </button>
            <button className="checkout" onClick={handleCheckout}>
              Checkout
            </button>
            <button className="checkout" onClick={handleClearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
