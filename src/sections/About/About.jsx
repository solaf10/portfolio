import './About.css';
import ProgressHolder from '../../components/ProgressHolder/ProgressHolder';
import { useContext } from 'react';
import { ThemeContext } from '../../App';

const skills = [
  { id: 1, name: 'html5', amount: 80 },
  { id: 2, name: 'css3', amount: 85 },
  // { id: 3, name: "bootstrap", amount: 70 },
  { id: 4, name: 'js', amount: 75 },
  { id: 5, name: 'React', amount: 90 },
];

const About = ({ ref }) => {
  const isDark = useContext(ThemeContext);
  return (
    <section className='about' id='about' ref={ref}>
      <div className='container'>
        <div className='image'>
          <img
            src={
              isDark
                ? '/assets/images/about-dark.png'
                : '/assets/images/about.png'
            }
            alt='skills'
          />
        </div>
        <div className='content'>
          <div className='text'>
            <div className='section-title'>
              <h2>About</h2>
            </div>
            <p>
              I am a passionate Front-End Developer and a graduating Informatics
              Engineering student specializing in Software Engineering at Homs
              University. Throughout my learning journey, I have gained
              practical experience through academic and internship projects,
              where I worked in collaborative team environments and contributed
              to real-world systems. I am comfortable working within teams,
              communicating effectively, and adapting to different development
              workflows. I have also strengthened my problem-solving skills
              through continuous practice on coding platforms and building
              personal projects. In addition, I have explored interactive
              programming concepts and developed small projects and games that
              helped me improve my logical thinking and front-end capabilities.
              I am proficient in English, able to understand technical
              discussions, collaborate smoothly in team environments, and
              communicate ideas clearly. I am continuously working on improving
              both my technical and soft skills to grow as a developer and
              contribute to impactful projects. Always eager to learn and
              improve, I stay motivated by new challenges and enjoy turning
              ideas into real, functional web experiences.
            </p>
          </div>
          {/* <div className='skills'>
            {skills.map((skill) => (
              <ProgressHolder
                key={skill.id}
                name={skill.name}
                amount={skill.amount}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
