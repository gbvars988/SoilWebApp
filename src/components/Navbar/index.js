import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/soil-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faContactCard,
  faDollarSign,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <Link className="soil-logo" to="/">
        <img src={Logo} alt="Soil Logo" />
      </Link>
      <nav>
        <div className="nav-bar nav-middle">
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
            <FontAwesomeIcon icon={faContactCard} className="nav-icon" />
            <span>Contact Us</span>
          </NavLink>
        </div>
        <div className="login-container">
          <NavLink to="/login">
            <FontAwesomeIcon icon={faUserPlus} />
            <span>Login</span>
          </NavLink>
          <NavLink to="/signup">
            <FontAwesomeIcon icon={faUserPlus} />
            <span>Sign up</span>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
