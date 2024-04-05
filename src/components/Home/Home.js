import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Content from "../Content";

function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <div>
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
