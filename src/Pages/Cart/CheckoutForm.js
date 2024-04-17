import { React, useState } from "react";
import { useCart } from "./CartContext.js";

function CheckoutForm() {
  const { makePurchase, cartItems } = useCart();
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");

  const handlePurchase = (e) => {
    e.preventDefault();
    makePurchase(cardNumber, expiry);
  };

  return (
    <form onSubmit={handlePurchase}>
      <input
        type="text"
        placeholder="Credit Card Number (16 digits)"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        pattern="\d{16}"
        required
      />
      <input
        type="text"
        placeholder="Expiry Date (MM/YY)"
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
        pattern="(0[1-9]|1[0-2])/[0-9]{2}"
        required
      />
      <button type="submit">Complete Purchase</button>
    </form>
  );
}

export default CheckoutForm;
