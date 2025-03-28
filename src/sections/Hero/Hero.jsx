import { ThemeContext } from "../../App";
import "./Hero.css";
import { useContext } from "react";

const Hero = ({ ref }) => {
  const isDark = useContext(ThemeContext);
  return (
    <div className="hero" ref={ref}>
      <div className="container">
        <div className="text">
          <h1>
            <span>HEY!</span> I’m Solaf, Frontend Developer
          </h1>
          <p>
            Building high-quality, engaging, and visually stunning websites, I
            blend creativity with technical expertise to bring your vision to
            life. Let’s take your online presence to the next level!
          </p>
          <a href="/assets/CV/solafAlfares.pdf" download className="btn">
            Download Cv
          </a>
        </div>
        <div className="image">
          <img src="/assets/images/undraw_dev-focus_dd7i.svg" alt="" />
          <div className="circle"></div>
        </div>
      </div>
      <img
        src={isDark ? "/assets/images/dot-dark.png" : "/assets/images/dot.png"}
        alt="dot"
        className="dot"
      />
    </div>
  );
};

export default Hero;
