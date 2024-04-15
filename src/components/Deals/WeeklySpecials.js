import { React, useState } from "react";
import "./weeklyspecials.css";
import Eggs from "../../assets/eggs.jpg";
import Tomato from "../../assets/tomato.jpg";
import Zucchini from "../../assets/zucchini.jpg";
import Pear from "../../assets/pear.jpg";
import Honeydew from "../../assets/honeydew.jpg";
import Spinach from "../../assets/spinach.jpg";
import Mushroom from "../../assets/mushroom.jpg";
import Potato from "../../assets/potato.jpg";
import Pumpkin from "../../assets/pumpkin.jpg";
import Asparagus from "../../assets/asparagus.jpg";
import Modal from "./Modal";

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
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

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
            <h3>{item.product}</h3>
            <p>${item.price}</p>
            <img src={imageMap[item.img_name]}></img>
          </li>
        ))}
      </ul>
      {/* {selectedItem !== null && (
        <Modal isOpen={selectedItem !== null} onClose={handleCloseModal} />
      )} */}
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
