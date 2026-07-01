import './Education.css';
import { useEffect, useState } from 'react';
import EducationBox from '../../components/EducationBox/EducationBox';
import { IoMdArrowUp } from 'react-icons/io';
import { throttle } from 'lodash';

const experiences = [
  {
    id: 1,
    title: 'Front-End Developer Intern – Asinnah Startup',
    date: 'Oct 2025 – May 2026 | Remote, Homs',
    desc: `
    Working as a Front-End Developer Intern at Asinnah Startup, where I built production-ready interfaces using React, Next.js, TypeScript, Tailwind CSS, and Framer Motion. I collaborated with the development team through GitLab for version control and code reviews. During the internship, I contributed to several real-world projects, including a daycare management dashboard, a landing page for Al-Birr Charity Association in Homs, and a platform for the Information Technology & Telecommunications Incubator at the University of Homs.`,
  },
  {
    id: 4,
    title: 'Front-End Lv2 Trainee – Vica Company',
    date: 'Nov 2024 – Feb 2025 | Online',
    desc: `
    Completed a four-month training program focused on JavaScript, Tailwind CSS, Git & GitHub, and React.js. Through practical projects, I built responsive and interactive user interfaces while strengthening my understanding of modern front-end development practices. The program also included an introduction to Next.js.`,
  },

  {
    id: 2,
    title: 'Advanced Front-End Development Trainee – Vika Company',
    date: '2025 | Online',
    desc: `
    Completed intensive training focused on advanced front-end technologies, including TypeScript, Advanced React concepts, Redux Toolkit, and Next.js fundamentals. The program emphasized building scalable applications and applying modern development practices through hands-on projects.`,
  },
  {
    id: 5,
    title: 'Front-End Trainee – Darrebni Company',
    date: 'Oct 2023 – Apr 2024 | Onsite, Homs',
    desc: `
    Completed a six-month onsite internship covering HTML, CSS, JavaScript, Bootstrap, Git & GitHub, and React.js, including React libraries and Redux for state management. The program provided hands-on experience in building interactive and scalable web applications and concluded with a certificate of achievement.`,
  },

  {
    id: 3,
    title: 'UX Design Trainee – Women in Tech (Paper Airplanes Program)',
    date: 'Feb 2025 – May 2025 | Online',
    desc: `
    Completed a UX design training program as part of the Women in Tech initiative by Paper Airplanes. The program covered user research, wireframing, prototyping, and UI principles. For the final project, I applied these skills to design a practical UX solution and successfully earned a certificate upon completion.`,
  },

  {
    id: 6,
    title: 'Informatics Engineering Student – Homs University',
    date: '2021 – Present | Fifth Year',
    desc: `
    Pursuing a Bachelor's degree in Informatics Engineering at Homs University, specializing in Software Engineering. Throughout my studies, I have developed a strong foundation in programming, algorithms, software engineering principles, and modern web development, strengthening both my technical and problem-solving skills.`,
  },
];

const Education = ({ ref }) => {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    setIsShow(
      window.scrollY >= ref?.current?.offsetTop,
      // window.scrollY < endOfSection?.current.offsetTop
    );
  }, [ref]);
  useEffect(() => {
    const callback = throttle(() => {
      setIsShow(
        window.scrollY >= ref?.current?.offsetTop,
        // window.scrollY < endOfSection?.current.offsetTop
      );
    }, 200);

    window.addEventListener('scroll', callback);
    return () => {
      window.removeEventListener('scroll', callback);
      callback.cancel();
    };
  }, [ref]);
  return (
    <section className='education' id='education' ref={ref}>
      <img className='top-decoration' src='/assets/images/edu-top.svg' alt='' />
      <div className='container'>
        <div className='section-title'>
          <p>Education and Experience</p>
          <h2>Education & Experience</h2>
        </div>
        <div className='experiences'>
          {experiences.map((experience) => (
            <EducationBox
              key={experience.id}
              title={experience.title}
              desc={experience.desc}
            />
          ))}
        </div>
      </div>
      <div className='holder'>
        <img
          className='bottom-decoration'
          src='/assets/images/edu-bottom.svg'
          alt=''
        />
        <button
          className='up-arrow'
          style={{ transform: isShow ? 'translateX(0)' : 'translateX(250%)' }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
        >
          <IoMdArrowUp className='arrow' />
        </button>
      </div>
    </section>
  );
};

export default Education;
