import './ProjectCard.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectCard = ({
  id,
  image,
  name,
  skills,
  demoLink,
  companyProject,
  confidential,
  style,
  status,
  academicProject,
  index,
}) => {
  const navigate = useNavigate();

  function handleNavigation() {
    navigate(`/${id}`);
  }

  return (
    <motion.div
      className='card'
      style={style}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: 'easeOut',
      }}
    >
      <div className='project-image' onClick={handleNavigation}>
        <div className='labels'>
          {(companyProject || academicProject) && (
            <span className='label company-label'>
              {companyProject ? 'Asinnah Internship' : 'Academic Project'}
            </span>
          )}

          {(confidential || status) && (
            <span className='label confidential-label'>
              {status ?? 'Private'}
            </span>
          )}
        </div>

        <img src={image} alt={name} />
      </div>

      <div className='content'>
        <div className='infos'>
          <h3>{name}</h3>
          <p>{skills}</p>
        </div>

        {demoLink && (
          <a href={demoLink} target='_blank' rel='noreferrer'>
            <img className='icon' src='/assets/images/demo-icon.svg' alt='' />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
