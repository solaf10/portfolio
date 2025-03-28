import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import ProjectPageHero from "../sections/ProjectPageHero/ProjectPageHero";
import { isDate } from "lodash";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../App";
import BestProjects from "../sections/BestProjects/BestProjects";

const SingleProject = ({ setIsDark }) => {
  const projuctsDetailedInfos = [
    {
      id: 1,
      image: "/assets/images/projects/B-World.png",
      title: "Online Book Store",
      repoLink: "https://github.com/solaf10/B-World",
      demoLink: "https://solaf10.github.io/B-World/",
      date: "1-1-2025",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nisi, quis minima voluptas error quas quam excepturi inventore ullam, alias optio! Expedita porro quos consequuntur delectus ipsa velit blanditiis? Facilis.`,
      languages: ["HTML5", "CSS", "Javascript"],
      frameWorks: false,
      libraries: false,
    },
    {
      id: 2,
      image: "/assets/images/projects/softy pinko.png",
      title: "Business Consulting Landing Page",
      repoLink: "https://github.com/solaf10/soft-pinko",
      demoLink: "https://solaf10.github.io/soft-pinko/",
      date: "16-11-2023",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nisi, quis minima voluptas error quas quam excepturi inventore ullam, alias optio! Expedita porro quos consequuntur delectus ipsa velit blanditiis? Facilis.`,
      languages: ["HTML5", "CSS"],
      frameWorks: ["Bootstrap"],
      libraries: false,
    },
    {
      id: 3,
      image: "/assets/images/projects/Mint-Minimal.png",
      title: "Digital Agency",
      repoLink: "https://github.com/solaf10/Mint-Minimal",
      demoLink: "https://solaf10.github.io/Mint-Minimal/",
      date: "1-11-2024",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nisi, quis minima voluptas error quas quam excepturi inventore ullam, alias optio! Expedita porro quos consequuntur delectus ipsa velit blanditiis? Facilis.`,
      languages: ["HTML5", "CSS", "Javascript"],
      frameWorks: false,
      libraries: false,
    },
    {
      id: 4,
      image: "/assets/images/projects/usePopcorn.png",
      title: "Movies app",
      repoLink: "https://github.com/solaf10/usePopcorn",
      demoLink: "https://use-popcorn-git-master-solafs-projects.vercel.app/",
      date: "25-2-2025",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nisi, quis minima voluptas error quas quam excepturi inventore ullam, alias optio! Expedita porro quos consequuntur delectus ipsa velit blanditiis? Facilis.`,
      languages: ["HTML5", "CSS"],
      frameWorks: false,
      libraries: ["React.js"],
    },
    {
      id: 5,
      image: "/assets/images/projects/dashboard.png",
      title: "Dashboard",
      repoLink: "https://github.com/solaf10/Dashboard",
      demoLink: "https://dashboard-green-delta.vercel.app/",
      date: "15-3-2025",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nisi, quis minima voluptas error quas quam excepturi inventore ullam, alias optio! Expedita porro quos consequuntur delectus ipsa velit blanditiis? Facilis.`,
      languages: ["HTML5", "CSS"],
      frameWorks: false,
      libraries: ["React.js"],
    },
    {
      id: 6,
      image: "/assets/images/projects/eat-n-split.png",
      title: "Bill Splitter App",
      repoLink: "https://github.com/solaf10/Eat--N-Split",
      demoLink: "https://solaf10.github.io/Eat--N-Split/",
      date: "11-9-2024",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nisi, quis minima voluptas error quas quam excepturi inventore ullam, alias optio! Expedita porro quos consequuntur delectus ipsa velit blanditiis? Facilis.`,
      languages: ["HTML5", "CSS"],
      frameWorks: false,
      libraries: ["React.js"],
    },
  ];
  const navigate = useNavigate();
  function handleNavigateAndScroll(ID) {
    navigate("/", { state: ID });
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const productInfoID = useParams().id;
  const productInfo = projuctsDetailedInfos[productInfoID - 1];
  const isDark = useContext(ThemeContext);
  return (
    <div className={isDark ? "single-project dark" : "single-project"}>
      <NavBar
        setIsDark={setIsDark}
        page="singleProject"
        handler={handleNavigateAndScroll}
      />
      <ProjectPageHero productInfo={productInfo} />
      <BestProjects />
    </div>
  );
};

export default SingleProject;
