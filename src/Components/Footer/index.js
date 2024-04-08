import "./footer.css";
import Logo from "../../Assets/soil-logo.png";

function Footer() {
  return (
    <div className="footer-container">
      <img className="footer-logo" src={Logo} alt="Soil Logo" />
      <p>© Soil 2024 - By Anthony & Ronald</p>
    </div>
  );
}
export default Footer;
