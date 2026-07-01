import './EducationBox.css';
import { motion } from 'framer-motion';

const EducationBox = ({ title, desc, index }) => {
  return (
    <motion.div
      className='box'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
    >
      <div className='circle'></div>

      <div className='text'>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </motion.div>
  );
};

export default EducationBox;
