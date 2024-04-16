import React from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate("/deals");
  };
  return (
    <div>
      Shopping cart
      <button onClick={handleContinueShopping}>Continue Shopping</button>
      <button>Checkout</button>
    </div>
  );
}

export default Cart;
