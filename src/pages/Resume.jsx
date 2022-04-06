import resume from "../assets/resume.jpg";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume">
      <div className="download">
        Download
        <a
          href="https://drive.google.com/file/d/1DTDpgyQhrSv6F3pCipmO_48jsAwyD42v/view?usp=sharing"
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
