import Avatar from "../components/Avatar/Avatar";
import profPic from "../assets/profile-pic.jpg";
import "./Home.css";
export default function Home() {
  return (
    <div className="home-page">
      <div className="main-pic">
        <Avatar src={profPic} />
      </div>
      <div className="main-content">
        <h1 className="main-header">I am Shahmar</h1>
        <p className="main-text">
          <span className="job-title"> React Developer </span>
          who is passionate to create modern websites while writing clean and
          maintainable code.
        </p>
      </div>
    </div>
  );
}
