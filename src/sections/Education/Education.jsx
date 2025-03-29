import { useEffect, useState } from "react";
import EducationBox from "../../components/EducationBox/EducationBox";
import "./Education.css";
import { IoMdArrowUp } from "react-icons/io";
import { throttle } from "lodash";

const experiences = [
  {
    id: 1,
    title: "Front-End Trainee – Darrebni Company",
    date: "Oct 2023 – Apr 2024 | Onsite, Homs",
    desc: `
    During this 6-month onsite internship, I gained hands-on experience in HTML, CSS, JavaScript, Bootstrap, Git & GitHub, and React.js, including React libraries and Redux for state management. I applied modern front-end practices to build interactive and scalable web applications. I successfully completed the program and earned a certificate of achievement.`,
  },
  {
    id: 2,
    title: "Front-End Lv2 Trainee – Vica Company",
    date: "Nov 2024 – Feb 2025 | Online",
    desc: `During this 4-month online training, I expanded my skills by learning JavaScript, Tailwind, Git & GitHub, and React.js, building interactive web applications with modern concepts. The program also included a basic overview of Next.js, providing insights into modern front-end frameworks. I applied my skills through practical projects, creating responsive and dynamic user interfaces.
`,
  },
  {
    id: 3,
    title: "Informatics Engineering Student – Homs University",
    date: "2021 – Present | Fourth Year",
    desc: `I am currently pursuing a Bachelor’s degree in Informatics Engineering at Homs University, specializing in software development, algorithms, and front-end technologies. Throughout my studies, I have built a strong foundation in programming and web development, equipping me with both technical skills and problem-solving abilities.`,
  },
  {
    id: 4,
    title: "UX Design Trainee – Women in Tech (Paper Airplane Program)",
    date: "Feb 2025 – May 2025 | Online",
    desc: `
    As part of the Women in Tech Paper Airplane Program, I am undergoing UX design training that covers key concepts such as user research, prototyping, and UI principles. The program includes a final project where I will apply my skills to create a practical UX solution. Upon completion, I will receive a certificate recognizing my proficiency in UX design.`,
  },
  {
    id: 5,
    title: "Self-Learning – Online Courses & Projects",
    desc: `
    I actively enhance my skills through self-learning, completing several online courses and building practical projects. I followed Elzero Web School’s YouTube courses, where I mastered HTML, CSS, and JavaScript. Additionally, I am nearing the completion of Jonas Schmedtmann’s Udemy course, which covers advanced front-end practices, modern JavaScript, and React development. (No certificate available).`,
  },
];

const Education = ({ ref, endOfSection }) => {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    setIsShow(
      window.scrollY >= ref?.current?.offsetTop &&
        window.scrollY < endOfSection?.current.offsetTop
    );
  }, [ref, endOfSection]);
  useEffect(() => {
    const callback = throttle(() => {
      setIsShow(
        window.scrollY >= ref?.current?.offsetTop &&
          window.scrollY < endOfSection?.current.offsetTop
      );
    }, 200);

    window.addEventListener("scroll", callback);
    return () => {
      window.removeEventListener("scroll", callback);
      callback.cancel();
    };
  }, [ref, endOfSection]);
  return (
    <section className="education" id="education" ref={ref}>
      <img className="top-decoration" src="/assets/images/edu-top.svg" alt="" />

      <div className="container">
        <div className="section-title">
          <p>Education and Experience</p>
          <h2>Education & Experience</h2>
        </div>
        <div className="experiences">
          {experiences.map((experience) => (
            <EducationBox
              key={experience.id}
              title={experience.title}
              desc={experience.desc}
            />
          ))}
        </div>
      </div>
      <div className="holder">
        <img
          className="bottom-decoration"
          src="/assets/images/edu-bottom.svg"
          alt=""
        />
        <button
          className="up-arrow"
          style={{ transform: isShow ? "translateX(0)" : "translateX(250%)" }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <IoMdArrowUp className="arrow" />
        </button>
      </div>
    </section>
  );
};

export default Education;
