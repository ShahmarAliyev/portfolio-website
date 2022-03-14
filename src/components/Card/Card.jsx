import "./Card.css";

function Card({ project }) {
  return (
    <div className="card card-shadow">
      <div className="card-header"> {project.name}</div>
      <div className="card-body">
        <div className="card-image">
          <img className="img" src={project.imgLink} alt="project" />
        </div>
      </div>
      <div className="card-footer">
        <button className="card-button">
          <a href={project.url}>Visit me</a>
        </button>
        <button className="card-git">
          <a href={project.github}>See the Code</a>
        </button>
      </div>
    </div>
  );
}

export default Card;
