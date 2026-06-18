import './NavLinks.css';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

const NavLinks = ({ className, scroll, links, handler }) => {
  return (
    <motion.ul
      variants={container}
      initial='hidden'
      animate='show'
      className={className ? className : ''}
    >
      {links.map((link) => (
        <motion.li
          variants={item}
          key={link.id}
          className={scroll === link.id ? 'active' : ''}
        >
          {link.icon && (
            <a title={link.text} onClick={() => handler(link.id)}>
              {link.icon}
            </a>
          )}
          <a className='text' onClick={() => handler(link.id)}>
            {link.text}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default NavLinks;
