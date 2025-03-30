import "./About.css";
import ProgressHolder from "../../components/ProgressHolder/ProgressHolder";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const skills = [
  { id: 1, name: "html5", amount: 80 },
  { id: 2, name: "css3", amount: 85 },
  // { id: 3, name: "bootstrap", amount: 70 },
  { id: 4, name: "js", amount: 75 },
  { id: 5, name: "React", amount: 90 },
];

const About = ({ ref }) => {
  const isDark = useContext(ThemeContext);
  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <div className="image">
          <img
            src={
              isDark
                ? "/assets/images/about-dark.png"
                : "/assets/images/about.png"
            }
            alt="skills"
          />
        </div>
        <div className="content">
          <div className="text">
            <div className="section-title">
              <h2>About</h2>
            </div>
            <p>
              I am a passionate front-end developer and a fourth-year
              Informatics Engineering student at Homs University. With a strong
              foundation in web technologies, I have dedicated countless hours
              to mastering front-end development, creating seamless, responsive,
              and visually appealing web experiences. Always eager to learn and
              grow, I stay up to date with the latest trends and innovations in
              web development. Let’s build something incredible together!
            </p>
          </div>
          <div className="skills">
            {skills.map((skill) => (
              <ProgressHolder
                key={skill.id}
                name={skill.name}
                amount={skill.amount}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
