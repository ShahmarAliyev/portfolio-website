import "./Sidebar.css";

import profPic from "../../assets/profile-pic.jpg";
import Avatar from "../Avatar/Avatar";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import email from "../../assets/email.png";
import phone from "../../assets/phone.png";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          <Avatar src={profPic} />
          <p>Shahmar ALiyev</p>
        </div>
        <div className="contact-header">
          <span>Contact Details:</span>
        </div>
        <div className="contact-card">
          <div className="contact-line">
            <div className="contact-iconm">
              <img src={phone} alt="phone" className="contact-icon" />
            </div>
            <div className="contact-text">
              <p>+12242564225</p>
            </div>
          </div>
          <div className="contact-line">
            <div className="contact-iconm">
              <img src={email} alt="email" className="contact-icon" />
            </div>
            <div className="contact-text">
              <p>shahmarusa@gmail.com</p>
            </div>
          </div>

          <div className="contact-line">
            <div className="contact-iconm">
              <img src={github} alt=" github" className="contact-icon" />
            </div>
            <div className="contact-text">
              <p>github.com/ShahmarAliyev</p>
            </div>
          </div>
          <div className="contact-line">
            <div className="contact-iconm">
              <img src={linkedin} alt="linkedin" className="contact-icon" />
            </div>
            <div className="contact-text">
              <p>linkedin.com/in/saliyev2019/</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
