import { React, useState, useEffect } from "react";
import { useCart } from "./CartContext.js";
import { useNavigate } from "react-router-dom";

function CheckoutForm() {
  const { makePurchase, cartItems } = useCart();
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (purchaseSuccess === true) {
      navigate("/purchasesummary");
    }
  }, [purchaseSuccess]);

  const handlePurchase = (e) => {
    e.preventDefault();
    const outcome = makePurchase(cardNumber, expiry);
    setPurchaseSuccess(outcome);
  };

  return (
    <div className="checkout-container">
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
    </div>
  );
}

export default CheckoutForm;
