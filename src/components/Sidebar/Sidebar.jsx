import "./Sidebar.css";

import profPic from "../../assets/profile-pic.jpg";
import Avatar from "../Avatar/Avatar";
import { Email, GitHub, Phone } from "@mui/icons-material";
import { LinkedIn } from "@material-ui/icons";
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
              <Phone className="contact-icon" />
            </div>
            <div className="contact-text">
              <p>+12242564225</p>
            </div>
          </div>
          <div className="contact-line">
            <div className="contact-iconm">
              <Email className="contact-icon" />
            </div>
            <div className="contact-text">
              <p>shahmarusa@gmail.com</p>
            </div>
          </div>
          <div className="contact-line">
            <div className="contact-iconm">
              <GitHub className="contact-icon" />
            </div>
            <div className="contact-text">
              <p>github.com/ShahmarAliyev</p>
            </div>
          </div>
          <div className="contact-line">
            <div className="contact-iconm">
              <LinkedIn className="contact-icon" />
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
