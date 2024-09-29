import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <p>Mirko Bellopede Portfolio 2024 ©</p>
        <Link className="footer-link" to={"/privacyPolicy"}>Privacy Policy</Link>
      </div>
    </footer>
  );
}

export default Footer;
