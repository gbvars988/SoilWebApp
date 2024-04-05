import "./App.css";
import { BrowserRouter as Router, Link,
Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Signin from "./components/Signin/Signin";

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signin" element={<Signin />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
