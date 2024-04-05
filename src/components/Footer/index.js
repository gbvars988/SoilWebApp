import "./footer.css";
import Logo from "../../assets/soil-logo.png";

function Footer() {
  return (
    <div className="footer-container">
      <img className="footer-logo" src={Logo} alt="Soil Logo" />
      <p>© Soil 2024 - Built by Anthony & Ronald</p>
    </div>
  );
}
export default Footer;
