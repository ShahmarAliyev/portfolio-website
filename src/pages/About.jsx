import "./About.css";
import aboutpic1 from "../assets/about-pic1.jpg";
import aboutpic2 from "../assets/about-pic2.jpg";

function About() {
  return (
    <div className="about">
      <div className="about-card about-2">
        <div className="about-images">
          <img className="about-image-1" alt="profile" src={aboutpic1} />
        </div>
      </div>
      <div className="about-card about-1">
        <div className="about-1-header">
          <h1> Who am I?</h1>
        </div>
        <p className="text-1">
          My name is <span className="text-1-header">Shahmar Aliyev </span>and I
          am from Azerbaijan. I am 25 years old, passionate to learn web
          development and create useful applications. I studied Business
          Administration at ADA University back home. Since, creating and
          designing are some of my greatest interest I decided to learn
          programming. I have been self-studying React and Web Development
          through Udemy, Youtube videos and books and gained over a year
          experience in the field
        </p>
      </div>

      <div className="about-card about-2">
        <div className="about-images">
          <img className="about-image-2" alt="profile" src={aboutpic2} />
        </div>
      </div>
    </div>
  );
}

export default About;
