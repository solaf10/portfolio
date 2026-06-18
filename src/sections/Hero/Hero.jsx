import './Hero.css';
import { ThemeContext } from '../../App';
import { useContext } from 'react';
import { motion, scale } from 'framer-motion';

const textContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textItem = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const imageVariant = {
  hidden: {
    opacity: 0,
    x: 60,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const Hero = ({ ref }) => {
  const isDark = useContext(ThemeContext);
  return (
    <section className='hero' ref={ref}>
      <div className='container'>
        <motion.div
          className='text'
          variants={textContainer}
          initial='hidden'
          animate='show'
        >
          <motion.h1 variants={textItem}>
            <span>HEY!</span> I’m Solaf, Frontend Developer
          </motion.h1>
          <motion.p variants={textItem}>
            Building high-quality, engaging, and visually stunning websites, I
            blend creativity with technical expertise to bring your vision to
            life. Let’s take your online presence to the next level!
          </motion.p>
          <motion.a
            variants={textItem}
            whileTap={{
              scale: 0.95,
            }}
            whileHover={{
              scale: 1.01,
            }}
            href='https://drive.google.com/uc?export=download&id=11uGKeSYUHnhCeq5H4Yhpec8lZsu21aUE'
            className='btn'
          >
            Download Cv
          </motion.a>
        </motion.div>
        <div className='image'>
          <img src='/assets/images/undraw_dev-focus_dd7i.svg' alt='' />
          <div className='circle'></div>
        </div>
      </div>
      <img
        src={isDark ? '/assets/images/dot-dark.png' : '/assets/images/dot.png'}
        alt='dot'
        className='dot'
      />
    </section>
  );
};

export default Hero;
