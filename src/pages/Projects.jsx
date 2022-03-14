import "./Projects.css";
import Card from "../components/Card/Card";

import projects from "../data/data";
export default function Projects() {
  return (
    <div className="projects-page">
      <div className="card-grid">
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
