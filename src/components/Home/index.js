import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./home.css";
import ImageGallery from "react-image-gallery";
import OrganicImage1 from "../../assets/organic-1.jpg";
import OrganicImage2 from "../../assets/organic-2.jpg";
import OrganicImage3 from "../../assets/organic-3.jpg";

const images = [
  {
    original: OrganicImage1,
  },
  {
    original: OrganicImage2,
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
          <h2> Our values </h2>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
