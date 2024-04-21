import { React, useState } from "react";
import { useCart } from "./CartContext.js";
import { useNavigate, useLocation } from "react-router-dom";
import "./checkout.css";

function CheckoutForm() {
  const { makePurchase, cartItems, clearCart } = useCart();
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const { state } = location;
  const { subtotal } = state || { subtotal: 0 };

  const handlePurchase = (e) => {
    e.preventDefault();
    const outcome = makePurchase(cardNumber, expiry);
    if (outcome) {
      clearCart();
      navigate("/purchasesummary", { state: { cartItems } });
    }
  };

  const handleBackToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="checkout-bg">
      <div className="checkout-container">
        <h1>Checkout</h1>
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <button className="back-button" onClick={handleBackToCart}>
          Back to Cart
        </button>

        <div className="checkout-form">
          <h2>Enter your payment details</h2>
          <form onSubmit={handlePurchase}>
            <input
              type="text"
              className="card-form"
              placeholder="Credit Card Number (16 digits)"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              pattern="\d{16}"
              required
            />
            <input
              type="text"
              className="card-form"
              placeholder="Expiry Date (MM/YY)"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              pattern="(0[1-9]|1[0-2])/[0-9]{2}"
              required
            />
            <button type="submit">Complete Purchase</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
