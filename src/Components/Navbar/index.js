import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/soil-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faEnvelope,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
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

        <NavLink to="/deals">
          <FontAwesomeIcon icon={faDollarSign} className="nav-icon" />
          <span>Organic Deals</span>
        </NavLink>

        <NavLink to="/contact">
          <FontAwesomeIcon icon={faEnvelope} className="nav-icon" />
          <span>Contact Us</span>
        </NavLink>
      </nav>

      <nav className="nav-login">
        <NavLink to="/login">
          <span>Login</span>
        </NavLink>
        <NavLink to="/signup" className="signup-button">
          <span>Signup</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
