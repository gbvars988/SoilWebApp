import { React, useState } from "react";
import { getSpecials } from "../../Data/specialsrepository";
import "./deals.css";
import WeeklySpecials from "./WeeklySpecials";

function Deals() {
  const [specials, setSpecials] = useState(getSpecials());

  return (
    <div>
      <div className="deals-container">
        <div>
          <WeeklySpecials specials={specials} />
        </div>
      </div>
    </div>
  );
}

export default Deals;
