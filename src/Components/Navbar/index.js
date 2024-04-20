import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../../Assets/soil-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faEnvelope,
  faDollarSign,
  faShoppingCart,
  faUtensils,
  faUser,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setName(loggedInUser.name);
      setIsLoggedIn(true);
    }
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem("loggedInUser");
    // Update login state and redirect to home page
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <div className="nav-bar">
      <Link className="soil-logo" to="/">
        <img src={Logo} alt="Soil Logo" />
      </Link>
      <nav>
        <NavLink to="/">
          <FontAwesomeIcon icon={faHome} className="nav-icon" />
          <span>Home</span>
        </NavLink>

        <NavLink to="/about">
          <FontAwesomeIcon icon={faInfoCircle} className="nav-icon" />
          <span>About Us</span>
        </NavLink>

        {isLoggedIn && (
          <>
            <NavLink to="/deals">
              <FontAwesomeIcon icon={faDollarSign} className="nav-icon" />
              <span>Organic Deals</span>
            </NavLink>

            <NavLink to="/dietplan">
              <FontAwesomeIcon icon={faUtensils} className="nav-icon" />
              <span>Diet Plan</span>
            </NavLink>
          </>
        )}

        <NavLink to="/contact">
          <FontAwesomeIcon icon={faEnvelope} className="nav-icon" />
          <span>Contact Us</span>
        </NavLink>
      </nav>
      <nav className="nav-login">
        {isLoggedIn ? (
          <>
            <NavLink to="/profile">
              <FontAwesomeIcon icon={faUser} className="nav-icon" />
              <span>{name}</span>
            </NavLink>

            <button className="logout-button" onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} />
              <span> Log Out</span>
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login">
              <span>Login</span>
            </NavLink>
            <NavLink to="/signup" className="signup-button">
              <span>Signup</span>
            </NavLink>
          </>
        )}
        <NavLink to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} className="nav-icon" />
          <span>Cart</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
