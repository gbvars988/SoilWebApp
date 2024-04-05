import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Deals from "./components/Deals";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />)
        <Route path="home" element={<Home />} />)
        <Route path="about" element={<About />} />)
        <Route path="deals" element={<Deals />} />)
        <Route path="contact" element={<Contact />} />)
        <Route path="login" element={<Login />} />)
        <Route path="signup" element={<Signup />} />)
      </Routes>
    </BrowserRouter>
  );
}

export default App;
