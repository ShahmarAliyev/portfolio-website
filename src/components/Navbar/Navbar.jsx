import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1 className="nav-title">
        <Link to="portfolio/"> Home</Link>
      </h1>
      <nav>
        <ul>
          <li className="link-item">
            <Link to="portfolio/projects"> Projects</Link>
          </li>

          <li className="link-item">
            <Link to="portfolio/resume">Resume </Link>
          </li>
          <li className="link-item">
            <Link to="portfolio/about">About Me</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
