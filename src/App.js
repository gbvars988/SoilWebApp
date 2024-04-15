import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Deals from "./Pages/Deals";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

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
