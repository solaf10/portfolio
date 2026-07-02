import './BestProjects.css';
import { useEffect, useRef, useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { useParams } from 'react-router-dom';

const bestProjects = [
  {
    id: 12,
    image: '/assets/images/projects/Athar.png',
    name: 'Donation Campaign Management System',
    repoLink: 'https://github.com/solaf10/DonationCampaignDashboard',
    skills: 'React.js • Redux Toolkit • Tanstack • MUI • JS',
    companyProject: false,
    academicProject: true,
    status: 'In Progress',
  },
  {
    id: 9,
    image: '/assets/images/projects/fundoze.png',
    name: 'Fundoze Childcare Management System',
    skills: 'React.js • TypeScript • Tailwind CSS',
    demoLink: null,
    companyProject: true,
    confidential: true,
  },
  {
    id: 10,
    image: '/assets/images/projects/ict.png',
    name: 'IT Incubator Platform',
    skills: 'Next.js • TypeScript • Tailwind CSS',
    demoLink: 'https://scs-incubator-homs.org/ar',
    companyProject: true,
    confidential: false,
  },
  {
    id: 11,
    image: '/assets/images/projects/ArchiLink.png',
    name: 'ArchiLink Architectural Connection Platform',
    skills: 'React.js • JS • CSS3',
    status: 'Local Project',
    academicProject: true,
  },
  {
    id: 1,
    image: '/assets/images/projects/TSDashboard.png',
    name: 'DashStack Dashboard',
    skills: 'Html • CSS3 • TypeScript • React.js',
    demoLink: 'https://ts-dashboard-ftfi.vercel.app/',
  },
  {
    id: 2,
    image: '/assets/images/projects/EvoGym.png',
    name: 'Evo Gym',
    skills: 'Html • CSS3 • TypeScript  • React.js',
    demoLink: 'https://evo-gym-6ris.vercel.app/',
  },
  {
    id: 3,
    image: '/assets/images/projects/Mint-Minimal.png',
    name: 'Digital Agency',
    skills: 'Html • Css3 • JS',
    demoLink: 'https://solaf10.github.io/Mint-Minimal/',
  },
  {
    id: 4,
    image: '/assets/images/projects/usePopcorn.png',
    name: 'Movies app',
    skills: 'Html • CSS3 • React.js',
    demoLink: 'https://use-popcorn-git-master-solafs-projects.vercel.app/',
  },
  {
    id: 5,
    image: '/assets/images/projects/dashboard.png',
    name: 'Dashboard',
    skills: 'Html • CSS3 • React.js',
    demoLink: 'https://dashboard-green-delta.vercel.app/',
  },
  {
    id: 6,
    image: '/assets/images/projects/eat-n-split.png',
    name: 'Bill Splitter App',
    skills: 'Html • CSS3 • React',
    demoLink: 'https://solaf10.github.io/Eat--N-Split/',
  },
  {
    id: 7,
    image: '/assets/images/projects/B-World.png',
    name: 'Online Book Store',
    skills: 'Html • CSS3 • JS',
    demoLink: 'https://solaf10.github.io/B-World/',
  },
  {
    id: 8,
    image: '/assets/images/projects/softy pinko.png',
    name: 'Business Consulting Landing Page',
    skills: 'Html • CSS3 • Bootstrap',
    demoLink: 'https://solaf10.github.io/soft-pinko/',
  },
];

const BestProjects = () => {
  const [clickCounter, setClickCounter] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const stopValue = useRef(null);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth);
    });
    if (screenWidth >= 991) {
      stopValue.current = 3;
    } else if (screenWidth < 991 && screenWidth >= 768) {
      stopValue.current = 2;
    } else {
      stopValue.current = 1;
    }
    return removeEventListener('resize', () => {
      setScreenWidth(window.innerWidth);
    });
  }, [screenWidth]);
  function handleSlideBackward() {
    if (clickCounter > 0) setClickCounter((prev) => prev - 1);
  }
  function handleSlideForward() {
    if (clickCounter < sliderProjects.length - stopValue.current)
      setClickCounter((prev) => prev + 1);
  }
  const displayedProductID = useParams().id;
  const sliderProjects = bestProjects.filter(
    (project) => displayedProductID != project.id,
  );
  return (
    <section className='projects best-projects'>
      <div className='container'>
        <div className='section-title'>
          <div className='text'>
            <p>Portfolio</p>
            <h2>
              The Best <span>Projects</span>
            </h2>
          </div>
          <div className='btns'>
            <button
              className={clickCounter <= 0 ? 'disabled left' : 'left'}
              onClick={handleSlideBackward}
            >
              <IoIosArrowBack />
            </button>
            <button
              className={
                clickCounter >= sliderProjects.length - stopValue.current
                  ? 'disabled right'
                  : 'right'
              }
              onClick={handleSlideForward}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <div className='slider'>
          <div className='slider-container'>
            {sliderProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                name={project.name}
                image={project.image}
                skills={project.skills}
                demoLink={project.demoLink}
                companyProject={project.companyProject}
                confidential={project.confidential}
                status={project.status}
                academicProject={project.academicProject}
                style={{ transform: `translateX(-${100 * clickCounter}%)` }}
                index={undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestProjects;
