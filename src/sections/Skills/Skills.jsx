import './Skills.css';

const skills = [
  { name: 'HTML5', icon: '/assets/skills/html.png' },
  { name: 'CSS3', icon: '/assets/skills/css.webp' },
  { name: 'JavaScript', icon: '/assets/skills/js.png' },
  { name: 'TypeScript', icon: '/assets/skills/ts.webp' },
  { name: 'React', icon: '/assets/skills/react.png' },
  { name: 'Next.js', icon: '/assets/skills/next.jpg' },
  { name: 'Redux Toolkit', icon: '/assets/skills/redux-toolkit.png' },
  { name: 'React Query', icon: '/assets/skills/tanstack.jpg' },
  { name: 'Bootstrap', icon: '/assets/skills/bootstrap.jpg' },
  { name: 'Tailwind CSS', icon: '/assets/skills/tailwind.png' },
  { name: 'Material UI', icon: '/assets/skills/Mui.png' },
  { name: 'Git', icon: '/assets/skills/git.png' },
  { name: 'GitHub', icon: '/assets/skills/github.png' },
  { name: 'Gitlab', icon: '/assets/skills/gitlab.png' },
  { name: 'Figma', icon: '/assets/skills/figma.svg' },
  { name: 'Framer Motion', icon: '/assets/skills/framer-motion.png' },
];

const Skills = ({ ref }) => {
  return (
    <section className='skills' id='skills' ref={ref}>
      <div className='container'>
        <div className='section-title'>
          <p>My Skills</p>
          <h2>Technical Skills</h2>
        </div>

        <div className='skills-grid'>
          {skills.map((skill, index) => (
            <div className='skill-card' key={index}>
              <div className='skill-icon'>
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
