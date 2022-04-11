import resume from "../assets/resume.jpg";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume">
      <div className="download">
        Download
        <a
          href="https://drive.google.com/file/d/1LH82bHO373g0WIDob64mr-5ZWUKQ58fy/view?usp=sharing"
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
