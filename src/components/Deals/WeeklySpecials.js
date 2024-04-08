import React from 'react';
import './weeklyspecials.css';
import Eggs from '../../assets/eggs.jpg';
import Tomato from '../../assets/tomato.jpg';


function WeeklySpecials(props) {
  const imageMap = {
    'eggs': Eggs,
    'tomato': Tomato
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
