import { React, useState } from "react";
import { getSpecials } from "../../Data/specialsrepository";
import "./deals.css";
import WeeklySpecials from "./WeeklySpecials";
import SmallFarmingInfo from "./smallFarmingInfo";

function Deals() {
  const [specials, setSpecials] = useState(getSpecials());

  return (
    <div>
      <div className="deals-container">
        <div className="weekly-specials">
          <WeeklySpecials specials={specials} />
        </div>
        <SmallFarmingInfo />
      </div>
    </div>
  );
}

export default Deals;
