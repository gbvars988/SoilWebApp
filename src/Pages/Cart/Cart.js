import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import { getSpecials } from "../../Data/specialsrepository.js";
import CartItem from "./CartItem.js";
import "./Cart.css";

function Cart() {
  const [specials, setSpecials] = useState(getSpecials());
  const [subtotal, setSubtotal] = useState(0);
  const { cartItems } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const updateSubtotal = () => {
      let newTotal = 0;
      for (const id in cartItems) {
        let item = specials.find((special) => special.id === Number(id));
        newTotal += cartItems[id] * item.price;
      }
      return newTotal;
    };
    setSubtotal(updateSubtotal);
  }, [cartItems]);

  const handleContinueShopping = () => {
    navigate("/deals");
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-bg">
      <div>
        <h1>Shopping Cart</h1>
      </div>
      <div className="cart-items">
        {specials.map((special) => {
          if (cartItems[special.id] !== 0) {
            return <CartItem special={special} />;
          }
        })}
      </div>
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <button className="checkout" onClick={handleContinueShopping}>
        Continue Shopping
      </button>
      <button className="checkout" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
}

export default Cart;
