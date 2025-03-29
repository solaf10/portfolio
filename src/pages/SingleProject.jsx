import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import ProjectPageHero from "../sections/ProjectPageHero/ProjectPageHero";
import { isDate } from "lodash";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../App";
import BestProjects from "../sections/BestProjects/BestProjects";

const projuctsDetailedInfos = [
  {
    id: 1,
    image: "/assets/images/projects/B-World.png",
    title: "Online Book Store",
    repoLink: "https://github.com/solaf10/B-World",
    demoLink: "https://solaf10.github.io/B-World/",
    date: "1-1-2025",
    desc: `B-world is a responsive book store website that features dark mode, allowing users to easily toggle between themes, with preferences saved in local storage. It also integrates with an API to fetch and display real-time book data, including listings, descriptions, and prices. The design is fully responsive, ensuring a smooth user experience across all devices, from mobile to desktop.`,
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
    desc: `Softy Pinko is a business consulting landing page. This project gave me the opportunity to dive deeper into responsive design and master the flexibility and power of the Bootstrap framework. The landing page is fully responsive, ensuring an optimal viewing experience across a range of devices, from desktops to mobile screens. This project enhanced my understanding of layout structures and responsiveness, while strengthening my skills in front-end development.`,
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
    desc: `Mint Minimal is a digital agency landing page. The website features a dark mode toggle, allowing users to seamlessly switch between light and dark themes for a personalized experience. It also includes dynamic image filtering, enabling users to filter images by type, creating an interactive and clean interface. The design is fully responsive, optimized for a smooth user experience across all devices, from desktops to mobile screens.`,
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
    desc: `usePopcorn is a movie search app that allows users to search for movies from the IMDb database, save watched movies, and manage them using local storage. The app features keyboard interactions, dynamic search results, and smooth loading states. It also includes responsive design for all screen sizes and updates the document title based on the selected movie.`,
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
    desc: `Dashboard Project is a web application built as part of a task from Vica company. It features full CRUD functionality for managing products, along with authentication for user control, including sign-in, sign-up, and logout. The app communicates with a real API using Axios to fetch and manage product data. This project helped me implement key concepts of user authentication and data management in a dynamic, real-world environment.`,
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
    desc: `Eat & Splitnis a Bill-Splitting App. This app easily splits expenses among friends, dynamically updates who owes what, and uses React state to track transactions in real time. It also implements conditional rendering for a seamless UI experience, helping me dive deep into core React concepts like state management, props, conditional rendering, and lifting state up—all of which are essential for building modern web applications.`,
    languages: ["HTML5", "CSS"],
    frameWorks: false,
    libraries: ["React.js"],
  },
];

const SingleProject = ({ setIsDark }) => {
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
