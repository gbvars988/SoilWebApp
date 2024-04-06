import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./home.css";
import ImageGallery from "react-image-gallery";
import OrganicImage1 from "../../assets/organic-1.jpg";
import OrganicImage2 from "../../assets/organic-2.jpg";
import OrganicImage3 from "../../assets/organic-3.jpg";
import HomeImage1 from "../../assets/home-1.jpg";
import HomeImage2 from "../../assets/home-2.jpg";
import HomeImage3 from "../../assets/home-3.jpg";
import HomeImage4 from "../../assets/home-4.jpg";
import HomeImage5 from "../../assets/home-5.jpg";

const images = [
  {
    original: OrganicImage2,
  },
  {
    original: OrganicImage1,
  },
  {
    original: OrganicImage3,
  },
];

function Home() {
  return (
    <div>
      <Navbar />
      <div className="image-container">
        <ImageGallery items={images} />
      </div>
      <div className="container-bg">
        <div className="home-content">
          <h1>Welcome to Soil</h1>
          <h2> What we offer</h2>
        </div>
        <div className="values-bg">
          <div className="values-container">
            <h3>Quality</h3>
            <p>
              Our products are sourced from trusted suppliers and undergo
              rigorous quality checks.
            </p>
            <img src={HomeImage3} />
          </div>
          <div className="values-container">
            <h3>Home Grown</h3>
            <p>
              Our products are manufactured and grown right here in Australia!
            </p>
            <img src={HomeImage2} />
          </div>
          <div className="values-container">
            <h3>Sustainability</h3>
            <p>
              We prioritize sustainable practices to minimize our environmental
              impact.
            </p>
            <img src={HomeImage1} />
          </div>
          <div className="values-container">
            <h3>Environmentally friendly</h3>
            <p>
              We use eco-friendly materials and methods to reduce our carbon
              footprint.
            </p>
            <img src={HomeImage5} />
          </div>
          <div className="values-container">
            <h3>Nutrient Rich</h3>
            <p>
              Our products are packed with essential nutrients to support your
              health and well-being.
            </p>
            <img src={HomeImage4} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
