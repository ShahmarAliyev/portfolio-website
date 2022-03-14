import "./Footer.css";
import facebook from "../../assets/facebook.png";
import github from "../../assets/github.png";
import copyright from "../../assets/copyright.png";
function Footer() {
  return (
    <div className="footer">
      <ul className="icons">
        <li className="icon">
          <img src={facebook} alt="facebook" />
        </li>
        <li className="icon">
          <img src={github} alt="github" />
        </li>
      </ul>
      <div className="footer-copyright">
        <img src={copyright} alt="coptight" className="copy" />
        2022 Shahmar Aliyev
      </div>
    </div>
  );
}

export default Footer;
