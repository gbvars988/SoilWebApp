import React from "react";
import "./about.css";
import Background from "../../Assets/farm-bg.jpeg";

function About() {
  return (
    <div>
      <div className="about-container">
        <div className="about-content">
          <h1> We are Soil</h1>
          <h2>
            We are Melbourne's number 1 marketplace for farmers and buyers
          </h2>

          <img src={Background} alt="background" className="about-bg" />
          <h2>
            SOIL isn't just a grocery store; we're a community hub dedicated to
            nourishing both body and mind. With a commitment to sourcing
            premium, organic produce, we aim to elevate the culinary experience
            of every individual we serve within Melbourne. But our mission
            extends beyond the aisles of our stores. Through face-to-face
            seminars, we empower the community with knowledge about diet,
            nutrition, and sustainable farming practices.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default About;
