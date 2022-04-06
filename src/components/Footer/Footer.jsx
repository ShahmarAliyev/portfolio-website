import "./Footer.css";
import facebook from "../../assets/facebook.png";
import github from "../../assets/github.png";
import copyright from "../../assets/copyright.png";
import linkedin from "../../assets/linkedin-24.png";
import email from "../../assets/email-12-24.png";
function Footer() {
  return (
    <div className="footer">
      <ul className="icons">
        <li className="icon">
          <a href="https://www.facebook.com/saliyev2019">
            <img src={facebook} alt="facebook" />
          </a>
        </li>
        <li className="icon">
          <a href="https://github.com/ShahmarAliyev">
            <img src={github} alt="github" />
          </a>
        </li>
        <li className="icon">
          <a href="https://www.linkedin.com/in/saliyev2019">
            <img src={linkedin} alt="github" />
          </a>
        </li>
        <li className="icon">
          <a href="https://mail.google.com/mail/?view=cm&source=mailto&to=saliyev2019@gmail.com">
            <img src={email} alt="github" />
          </a>
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
