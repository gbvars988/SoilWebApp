import { React } from "react";
import "./cart.css";
import Eggs from "../../Assets/eggs.jpg";
import Tomato from "../../Assets/tomato.jpg";
import Zucchini from "../../Assets/zucchini.jpg";
import Pear from "../../Assets/pear.jpg";
import Honeydew from "../../Assets/honeydew.jpg";
import Spinach from "../../Assets/spinach.jpg";
import Mushroom from "../../Assets/mushroom.jpg";
import Potato from "../../Assets/potato.jpg";
import Pumpkin from "../../Assets/pumpkin.jpg";
import Asparagus from "../../Assets/asparagus.jpg";
import { useCart } from "./CartContext.js";

function CartItem({ special }) {
  const imageMap = {
    eggs: Eggs,
    tomato: Tomato,
    zucchini: Zucchini,
    pear: Pear,
    honeydew: Honeydew,
    spinach: Spinach,
    mushroom: Mushroom,
    potato: Potato,
    pumpkin: Pumpkin,
    asparagus: Asparagus,
  };

  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useCart();
  return (
    <div className="cart-items">
      <img src={imageMap[special.img_name]} />
      <div className="description">
        <p>
          <b> {special.product}</b>
        </p>
        <p> ${special.price} </p>
        <div className="counterHandler">
          <button onClick={() => removeFromCart(special.id)}>-</button>
          <input
            value={cartItems[special.id]}
            onChange={(e) => updateCartItemCount(e.target.value, special.id)}
          ></input>
          <button onClick={() => addToCart(special.id)}>+</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
