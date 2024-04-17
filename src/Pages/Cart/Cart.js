import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import { getSpecials } from "../../Data/specialsrepository.js";
import CartItem from "./CartItem.js";

function Cart() {
  const [specials, setSpecials] = useState(getSpecials());
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate("/deals");
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
      <button onClick={handleContinueShopping}>Continue Shopping</button>
      <button>Checkout</button>
    </div>
  );
}

export default Cart;
