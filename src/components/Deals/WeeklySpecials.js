import React from 'react';
import './weeklyspecials.css';
import Eggs from '../../assets/eggs.jpg';
import Tomato from '../../assets/tomato.jpg';
import Zucchini from '../../assets/zucchini.jpg';
import Pear from '../../assets/pear.jpg';
import Honeydew from '../../assets/honeydew.jpg';
import Spinach from '../../assets/spinach.jpg';
import Mushroom from '../../assets/mushroom.jpg';
import Potato from '../../assets/potato.jpg';
import Pumpkin from '../../assets/pumpkin.jpg';
import Asparagus from '../../assets/asparagus.jpg';


function WeeklySpecials(props) {
  const imageMap = {
    'eggs': Eggs,
    'tomato': Tomato,
    'zucchini': Zucchini,
    'pear': Pear,
    'honeydew': Honeydew,
    'spinach': Spinach,
    'mushroom': Mushroom,
    'potato': Potato,
    'pumpkin': Pumpkin,
    'asparagus': Asparagus
  };


  return (
    <div className="specials-container-bg">
      <h1>Weekly Specials</h1>
        <ul className="specials-container">
          {props.specials.map((item) => (
            <li className="specials-item" key={item.id}>
              <h3>{item.product}</h3>
              <p>{item.price}</p>
              <img src={imageMap[item.img_name]}></img>
            </li>
          ))}
        </ul>
    </div>

  )
}

export default WeeklySpecials;
