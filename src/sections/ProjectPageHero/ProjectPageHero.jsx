import './ProjectPageHero.css';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../App';
import { BsArrowsFullscreen } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';

const ProjectPageHero = ({ productInfo }) => {
  const isDark = useContext(ThemeContext);
  const {
    image,
    title,
    desc,
    date,
    languages,
    frameWorks,
    libraries,
    demoLink,
    repoLink,
    asinnahLink,
    companyProject,
    academicProject,
    confidential,
    status,
  } = productInfo;
  /* useEffect(() => {
    if (isFullScreen) {
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "auto";
      document.body.style.overflow = "visible";
    }
  }, [isFullScreen]); */
  return (
    <section className='project-infos'>
      <div className='container'>
        <div className='image'>
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
          <img className='project-image' src={image} alt={title} />
        </div>
        <div className='content'>
          <div className='project-header'>
            <div className='title'>
              <div className='text'>
                <h1>{title}</h1>
                <div className='date'>{date}</div>
              </div>
              {demoLink && (
                <a href={demoLink} target='_blank'>
                  <img
                    className='icon'
                    src='/assets/images/demo-icon.svg'
                    alt='demo'
                  />
                </a>
              )}
            </div>
            <p className='desc'>{desc}</p>
          </div>
          <div className='project-footer'>
            {languages && (
              <div className='holder'>
                <span>Basic Languages : </span>
                <span>{languages.join(' , ')}.</span>
              </div>
            )}
            {frameWorks && (
              <div className='holder'>
                <span>Framework : </span>
                <span>{frameWorks.join(' , ')}.</span>
              </div>
            )}
            {libraries && (
              <div className='holder'>
                <span>Libraries : </span>
                <span>{libraries.join(' , ')}.</span>
              </div>
            )}
            <a
              href={repoLink ? repoLink : asinnahLink}
              target='_blank'
              className='btn'
            >
              {repoLink ? 'Github Repo' : 'View On Asinnah'}
            </a>
          </div>
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

export default ProjectPageHero;
