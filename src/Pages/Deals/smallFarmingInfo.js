import "./deals.css";
import React from "react";
import SoilPhoto from "../../Assets/soil.jpeg";
import SeedPhoto from "../../Assets/seed.jpeg";
import WateringPhoto from "../../Assets/watering.jpeg";
import SunPhoto from "../../Assets/sun.jpg";

function SmallFarmingInfo() {
  return (
    <div className="garden-bg">
      <div className="garden-header">
        <h1> Small Farming Tips</h1>
      </div>
      <div className="small-farming-info">
        <img src={SoilPhoto} alt="Soil" className="soil-img" />
        <h2>
          Step 1: Find the perfect <span className="highlight">Soil</span>
        </h2>
        <img src={SeedPhoto} alt="Seeds" className="seed-img" />
        <h2>
          Step 2: Choose your desired <span className="highlight">Seeds</span>
        </h2>
        <img src={WateringPhoto} alt="Watering" className="watering-img" />
        <h2>
          Step 3: Ensure your plants are always{" "}
          <span className="highlight">Watered</span>
        </h2>
        <img src={SunPhoto} alt="Sun" className="sun-img" />
        <h2>
          Step 4: Expose them to tons of direct{" "}
          <span className="highlight">Sunlight</span>
        </h2>
      </div>
    </div>
  );
}

export default SmallFarmingInfo;
