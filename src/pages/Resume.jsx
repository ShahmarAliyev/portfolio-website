import resume from "../assets/resume.jpg";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume">
      <div className="download">
        Download
        <a
          href="https://drive.google.com/file/d/1nRSoA1rhgBW9snV-d7lX48I1IXz3X_4h/view?usp=sharing"
          className="download-link"
        >
          Here
        </a>
      </div>
      <div className="resume-image">
        <img src={resume} alt="resume" />
      </div>
    </div>
  );
}

export default Resume;
