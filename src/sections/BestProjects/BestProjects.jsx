import { useEffect, useRef, useState } from "react";
import "./BestProjects.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { transform } from "lodash";
import { useParams } from "react-router-dom";

const BestProjects = () => {
  const bestProjects = [
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
  const [clickCounter, setClickCounter] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const stopValue = useRef(null);
  useEffect(() => {
    window.addEventListener("load", () => {
      setScreenWidth(window.innerWidth);
    });
    if (screenWidth >= 991) {
      stopValue.current = 3;
    }
    if (screenWidth < 991 && screenWidth >= 768) {
      stopValue.current = 2;
    } else if (screenWidth < 768) {
      stopValue.current = 1;
    }
    return removeEventListener("load", () => {
      setScreenWidth(window.innerWidth);
    });
  }, [screenWidth]);
  function handleSlideBackward() {
    if (clickCounter > 0) setClickCounter((prev) => prev - 1);
  }
  function handleSlideForward() {
    if (clickCounter < bestProjects.length - stopValue.current)
      setClickCounter((prev) => prev + 1);
  }
  const displayedProductID = useParams().id;
  return (
    <section className="projects best-projects">
      <div className="container">
        <div className="section-title">
          <div className="text">
            <p>Portfolio</p>
            <h2>
              The Best <span>Projects</span>
            </h2>
          </div>
          <div className="btns">
            <button
              className={clickCounter <= 0 ? "disabled left" : "left"}
              onClick={handleSlideBackward}
            >
              <IoIosArrowBack />
            </button>
            <button
              className={
                clickCounter >= bestProjects.length - stopValue.current
                  ? "disabled right"
                  : "right"
              }
              onClick={handleSlideForward}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <div className="slider">
          <div className="slider-container">
            {bestProjects.map(
              (project) =>
                displayedProductID != project.id && (
                  <ProjectCard
                    key={project.id}
                    id={project.id}
                    image={project.image}
                    demoLink={project.demoLink}
                    name={project.name}
                    skills={project.skills}
                    style={{ transform: `translateX(-${100 * clickCounter}%)` }}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestProjects;
