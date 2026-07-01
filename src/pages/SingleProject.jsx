import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import ProjectPageHero from '../sections/ProjectPageHero/ProjectPageHero';
import { isDate } from 'lodash';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../App';
import BestProjects from '../sections/BestProjects/BestProjects';

const projuctsDetailedInfos = [
  {
    id: 12,
    image: '/assets/images/projects/AtharAuth.png',
    title: 'Donation Campaign Management System',
    repoLink: 'https://github.com/solaf10/DonationCampaignDashboard',
    demoLink: false,
    date: '2025-2026',
    desc: `A comprehensive donation campaign management platform currently under development as a graduation project. The system is designed to manage charitable campaigns, projects, donations, and financial tracking in a fully integrated and user-friendly environment.

The platform focuses on strong UX design and system reliability, including full validation and error handling across all forms to ensure smooth and secure user interactions. User inputs are validated before sending requests to the backend, with clear error messages and feedback displayed to improve usability and prevent incorrect submissions.

The system provides deep integration between campaigns and projects, where each campaign can contain multiple related projects, and users can navigate seamlessly between them. This bidirectional relationship allows users to explore campaign details from project pages and access project details directly from campaigns.

Special attention has been given to user experience for both administrators and regular users. The admin dashboard provides full control over campaigns, projects, donations, financial operations, and content such as news and announcements. It also includes tracking of monetary donations and donation distribution, ensuring transparency in how funds are allocated.

The platform supports donation tracking, including financial and in-kind donations, with a structured workflow for managing and verifying contributions. A donation flow has been designed as a step-by-step guided process to ensure clarity for users during each stage of contribution.

The system also includes sections for news, announcements, ongoing campaigns, completed projects, and achievements, displayed across the homepage and dedicated pages. Additional pages such as About Us, Contact Us, Privacy Policy, User Policy, and FAQ were implemented to increase trust and platform credibility.

Users have personal profiles where they can manage their account, track their donations, and review their activity history. Overall, the project emphasizes scalability, transparency, and a highly interactive user experience with strong attention to validation, error handling, and system structure.`,
    skills: 'React.js • Laravel • MySQL • Context API',
    companyProject: false,
    academicProject: true,
    status: 'In Progress',
    inProgress: true,
    languages: ['HTML5', 'CSS3', 'JavaScript'],
    libraries: [
      'React',
      'Material UI',
      'Axios',
      'Redux Toolkit',
      'React Query(Tanstack)',
      'dayjs',
      'Toastify',
    ],
  },
  {
    id: 9,
    image: '/assets/images/projects/fundozeLogo.png',
    title: 'Fundoze Childcare Management System',
    repoLink: false,
    demoLink: false,
    asinnahLink: 'https://asinnah.com/ar/work/fundoze',
    date: '2026',
    desc: `A comprehensive childcare management system developed during my internship at Asinnah. The platform centralizes child accounts, care sessions, subscriptions, attendance tracking, payments, receipts, and financial reporting into a single management system. During the internship, I worked collaboratively with the Asinnah development team (front-end and back-end), contributing to the implementation of selected UI components and supporting features within the system.`,
    languages: ['HTML5', 'CSS3', 'TypeScript'],
    frameWorks: false,
    libraries: ['React.js', 'Tailwind CSS'],
    companyProject: true,
  },
  {
    id: 10,
    image: '/assets/images/projects/ictHero.png',
    title: 'IT Incubator Platform',
    repoLink: false,
    demoLink: false,
    asinnahLink: 'https://asinnah.com/ar/work/ict-incubator',
    date: '2026',
    desc: `A digital platform for the Information Technology Incubator in Homs, designed to support young innovators and entrepreneurs throughout their startup journey. The platform provides training resources, mentorship programs, and connections with investors and strategic partners. During my internship at Asinnah, I collaborated with the incubator team to understand their requirements and helped in planning the front-end interfaces accordingly. I also contributed to developing UI components and implementing features that support entrepreneurs in managing their journey from idea validation to market launch.`,
    languages: ['HTML5', 'CSS3', 'TypeScript'],
    frameWorks: false,
    libraries: ['Next.js', 'Tailwind CSS', 'i18'],
    companyProject: true,
  },
  {
    id: 11,
    image: '/assets/images/projects/ArchiLickHero.png',
    title: 'ArchiLink - Architectural Connection Platform',
    desc: `ArchiLink is a full-stack graduation project developed as a collaborative platform for architects, designers, and customers. The system connects users with furniture products and design resources including 2D/3D blocks, while also enabling customization requests that go through a structured approval workflow.

The platform includes multiple roles (Customer, Designer, Admin) with authentication, product management, blogs, and designer portfolio pages. It features two dashboards: an Admin dashboard for managing the entire platform (users, products, requests, and approvals), and a company dashboard used for handling internal operations and managing content and workflows.

I contributed as a Front-end developer in the project, focusing on building responsive UI components, dashboard interfaces, and integrating frontend features with backend APIs. The project was built using React for the frontend and Laravel for the backend, with emphasis on real-world system design, scalability, and secure role-based access.`,
    skills: 'React.js • Laravel • MySQL • Context API',
    companyProject: false,
    academicProject: true,
    repoLink: 'https://github.com/solaf10/Girls-Shop',
    date: '12-9-2025',
    languages: ['HTML5', 'CSS3', 'JavaScript'],
    libraries: ['React', 'Toastify', 'Swiper.js', 'i18'],
  },
  {
    id: 1,
    image: '/assets/images/projects/TSDashboardContent.png',
    title: 'DashStack Dashboard',
    repoLink: 'https://github.com/solaf10/TSDashboard',
    demoLink: 'https://ts-dashboard-ftfi.vercel.app/',
    date: '8-7-2025',
    desc: `A modern dashboard tailored for efficient product management. From secure authentication to dynamic product listings and insightful overviews, it offers everything in one place. This project allowed me to focus on delivering a responsive, user-friendly experience with intuitive interaction flows. I also incorporated practical features like filtering, pagination, and theme toggling, all within a clean and scalable design. It was a great step toward mastering how to build maintainable applications that align with real-world needs.`,
    languages: ['HTML5', 'CSS', 'typescript'],
    frameWorks: false,
    libraries: ['React', 'Toastify'],
  },
  {
    id: 2,
    image: '/assets/images/projects/EvoGymHero.png',
    title: 'Evo Gym',
    repoLink: 'https://github.com/solaf10/EvoGym',
    demoLink: 'https://evo-gym-6ris.vercel.app/',
    date: '14-6-2024',
    desc: `Evo Gym is a modern gym landing page that showcases the core values of fitness and performance through sleek design and clear content flow. The project focuses on creating an engaging user experience that highlights membership benefits, training programs, and brand identity. Building this landing page helped me strengthen my front-end skills, especially in crafting responsive layouts, structuring content effectively, and delivering a professional-looking website aligned with real business needs.`,
    languages: ['HTML5', 'CSS', 'typescript'],
    frameWorks: ['Bootstrap'],
    libraries: ['React', 'framer-motion'],
  },
  {
    id: 3,
    image: '/assets/images/projects/MintHero.png',
    title: 'Digital Agency',
    repoLink: 'https://github.com/solaf10/Mint-Minimal',
    demoLink: 'https://solaf10.github.io/Mint-Minimal/',
    date: '1-11-2024',
    desc: `Mint Minimal is a digital agency landing page. The website features a dark mode toggle, allowing users to seamlessly switch between light and dark themes for a personalized experience. It also includes dynamic image filtering, enabling users to filter images by type, creating an interactive and clean interface. The design is fully responsive, optimized for a smooth user experience across all devices, from desktops to mobile screens.`,
    languages: ['HTML5', 'CSS', 'Javascript'],
    frameWorks: false,
    libraries: false,
  },
  {
    id: 4,
    image: '/assets/images/projects/usePopcornHero.png',
    title: 'Movies app',
    repoLink: 'https://github.com/solaf10/usePopcorn',
    demoLink: 'https://use-popcorn-git-master-solafs-projects.vercel.app/',
    date: '25-2-2025',
    desc: `usePopcorn is a movie search app that allows users to search for movies from the IMDb database, save watched movies, and manage them using local storage. The app features keyboard interactions, dynamic search results, and smooth loading states. It also includes responsive design for all screen sizes and updates the document title based on the selected movie.`,
    languages: ['HTML5', 'CSS'],
    frameWorks: false,
    libraries: ['React.js'],
  },
  {
    id: 5,
    image: '/assets/images/projects/dashboard.png',
    title: 'Dashboard',
    repoLink: 'https://github.com/solaf10/Dashboard',
    demoLink: 'https://dashboard-green-delta.vercel.app/',
    date: '15-3-2025',
    desc: `Dashboard Project is a web application built as part of a task from Vica company. It features full CRUD functionality for managing products, along with authentication for user control, including sign-in, sign-up, and logout. The app communicates with a real API using Axios to fetch and manage product data. This project helped me implement key concepts of user authentication and data management in a dynamic, real-world environment.`,
    languages: ['HTML5', 'CSS'],
    frameWorks: false,
    libraries: ['React.js'],
  },
  {
    id: 6,
    image: '/assets/images/projects/eat-n-split.png',
    title: 'Bill Splitter App',
    repoLink: 'https://github.com/solaf10/Eat--N-Split',
    demoLink: 'https://solaf10.github.io/Eat--N-Split/',
    date: '11-9-2024',
    desc: `Eat & Splitnis a Bill-Splitting App. This app easily splits expenses among friends, dynamically updates who owes what, and uses React state to track transactions in real time. It also implements conditional rendering for a seamless UI experience, helping me dive deep into core React concepts like state management, props, conditional rendering, and lifting state up—all of which are essential for building modern web applications.`,
    languages: ['HTML5', 'CSS'],
    frameWorks: false,
    libraries: ['React.js'],
  },
  {
    id: 7,
    image: '/assets/images/projects/B-World.png',
    title: 'Online Book Store',
    repoLink: 'https://github.com/solaf10/B-World',
    demoLink: 'https://solaf10.github.io/B-World/',
    date: '1-1-2025',
    desc: `B-world is a responsive book store website that features dark mode, allowing users to easily toggle between themes, with preferences saved in local storage. It also integrates with an API to fetch and display real-time book data, including listings, descriptions, and prices. The design is fully responsive, ensuring a smooth user experience across all devices, from mobile to desktop.`,
    languages: ['HTML5', 'CSS', 'Javascript'],
    frameWorks: false,
    libraries: false,
  },
  {
    id: 8,
    image: '/assets/images/projects/softy pinko.png',
    title: 'Business Consulting Landing Page',
    repoLink: 'https://github.com/solaf10/soft-pinko',
    demoLink: 'https://solaf10.github.io/soft-pinko/',
    date: '16-11-2023',
    desc: `Softy Pinko is a business consulting landing page. This project gave me the opportunity to dive deeper into responsive design and master the flexibility and power of the Bootstrap framework. The landing page is fully responsive, ensuring an optimal viewing experience across a range of devices, from desktops to mobile screens. This project enhanced my understanding of layout structures and responsiveness, while strengthening my skills in front-end development.`,
    languages: ['HTML5', 'CSS'],
    frameWorks: ['Bootstrap'],
    libraries: false,
  },
];

const SingleProject = ({ setIsDark }) => {
  const navigate = useNavigate();
  function handleNavigateAndScroll(ID) {
    navigate('/', { state: ID });
  }
  const productInfoID = useParams().id;
  const productInfo = projuctsDetailedInfos.find(
    (info) => info.id == productInfoID,
  );
  const isDark = useContext(ThemeContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productInfoID]);
  return (
    <div className={isDark ? 'single-project dark' : 'single-project'}>
      <NavBar
        setIsDark={setIsDark}
        page='singleProject'
        handler={handleNavigateAndScroll}
      />
      <ProjectPageHero productInfo={productInfo} />
      <BestProjects />
    </div>
  );
};

export default SingleProject;
