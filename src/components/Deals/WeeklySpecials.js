import { React, useState } from 'react';
import { getSpecials } from '../../data/specialsrepository';

function WeeklySpecials() {
  const [specials, setSpecials] = useState(getSpecials()); 
  console.log(specials);

  return (
    <div className="specials-container">
      <ul>
        {specials.map((item) => (
          <li key={item.id}>
            {item.product} : {item.price}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default WeeklySpecials;
