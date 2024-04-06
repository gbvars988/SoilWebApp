import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./about.css";

function About() {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        <h1>About</h1>
      </div>
      <Footer />
    </div>
  );
}

export default About;
