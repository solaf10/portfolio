import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Projects.css";
import { MdArrowOutward } from "react-icons/md";

const projects = [
  {
    id: 1,
    image: "/assets/images/projects/B-World.png",
    name: "Online Book Store",
    skills: "Html-Css3-Vanilla javscript",
    demoLink: "https://solaf10.github.io/B-World/",
  },
  {
    id: 2,
    image: "/assets/images/projects/softy pinko.png",
    name: "Business Consulting Landing Page",
    skills: "Html-Css3-Bootstrap",
    demoLink: "https://solaf10.github.io/soft-pinko/",
  },
  {
    id: 3,
    image: "/assets/images/projects/Mint-Minimal.png",
    name: "Digital Agency",
    skills: "Html-Css3-Vanilla javscript",
    demoLink: "https://solaf10.github.io/Mint-Minimal/",
  },
  {
    id: 4,
    image: "/assets/images/projects/usePopcorn.png",
    name: "Movies app",
    skills: "Html-Css3-React.js",
    demoLink: "https://use-popcorn-git-master-solafs-projects.vercel.app/",
  },
  {
    id: 5,
    image: "/assets/images/projects/dashboard.png",
    name: "Dashboard",
    skills: "Html-Css3-React.js",
    demoLink: "https://dashboard-green-delta.vercel.app/",
  },
  {
    id: 6,
    image: "/assets/images/projects/eat-n-split.png",
    name: "Bill Splitter App",
    skills: "Html-Css3-React",
    demoLink: "https://solaf10.github.io/Eat--N-Split/",
  },
];

const Projects = ({ ref }) => {
  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="container">
        <div className="section-title">
          <div className="text">
            <p>Portfolio</p>
            <h2>
              My Creative Works Latest <span>Projects</span>
            </h2>
          </div>
          <a href="https://github.com/solaf10" target="_blank" className="btn">
            <span>View Github</span>
            <MdArrowOutward className="arrow" />
          </a>
        </div>
        <div className="projects-holder">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              image={project.image}
              skills={project.skills}
              demoLink={project.demoLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
