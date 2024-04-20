import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Deals from "./Pages/Deals";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import Cart from "./Pages/Cart/Cart.js";
import Checkout from "./Pages/Cart/Checkout.js";
import PurchaseSummary from "./Pages/Cart/PurchaseSummary.js";
import DietPlanPage from "./Pages/Diet/DietPlanPage.js";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { CartProvider } from "./Pages/Cart/CartContext.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <CartProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="deals" element={<Deals />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="profile" element={<Profile />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="purchasesummary" element={<PurchaseSummary />} />
          <Route path="dietplan" element={<DietPlanPage />} />
        </Routes>
      </CartProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
