import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Deals from "./components/Deals";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />)
        <Route path="home" element={<Home />} />)
        <Route path="about" element={<About />} />)
        <Route path="deals" element={<Deals />} />)
        <Route path="contact" element={<Contact />} />)
        <Route path="login" element={<Login />} />)
        <Route path="signup" element={<Signup />} />)
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
