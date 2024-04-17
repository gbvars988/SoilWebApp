import { React, useState } from "react";
import "./weeklyspecials.css";
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
import Modal from "./Modal";
import { useCart } from "../Cart/CartContext.js";

function WeeklySpecials(props) {
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
  const { addToCart, cartItems } = useCart();

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
  };
  console.log(cartItems);
  return (
    <div className="specials-container-bg">
      <h1>Weekly Specials</h1>
      <ul className="specials-container">
        {props.specials.map((item) => (
          <li
            className="specials-item"
            key={item.id}
            onClick={() => handleItemClick(item)}
          >
            <h3>
              <b>{item.product}</b>
            </h3>
            <p>${item.price}</p>
            <img src={imageMap[item.img_name]}></img>
            <button
              className="addToCart-btn"
              onClick={() => addToCart(item.id)}
            >
              Add to cart ({cartItems[item.id]})
            </button>
          </li>
        ))}
      </ul>
      <Modal isOpen={selectedItem !== null} onClose={handleCloseModal}>
        {selectedItem && (
          <div>
            <img src={imageMap[selectedItem.img_name]}></img>
            <p>{selectedItem.product}</p>
            <>{selectedItem.info}</>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default WeeklySpecials;
