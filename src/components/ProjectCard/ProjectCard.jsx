import { useNavigate } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = ({ id, image, name, skills, demoLink, style }) => {
  const navigate = useNavigate();
  function handleNavigation() {
    navigate(`/${id}`);
  }
  return (
    <div className="card" style={style}>
      <div className="project-image" onClick={handleNavigation}>
        <img src={image} alt="name" />
      </div>
      <div className="content">
        <div className="infos">
          <h3>{name}</h3>
          <p>{skills}</p>
        </div>
        <a href={demoLink}>
          <img className="icon" src="/assets/images/demo-icon.svg" alt="" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
