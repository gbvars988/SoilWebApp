import React from "react";
import "./deals.css";
import WeeklySpecials from "./WeeklySpecials";

function Deals() {
  return (
    <div>
      <div className="deals-container">
        <h1>Deals</h1>
        <div>
        <WeeklySpecials />
        </div>
      </div>
    </div>
  );
}

export default Deals;
