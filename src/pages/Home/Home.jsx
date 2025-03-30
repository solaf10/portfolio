import { useContext, useEffect, useRef, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import About from "../../sections/About/About";
import Contact from "../../sections/Contact/Contact";
import Education from "../../sections/Education/Education";
import Hero from "../../sections/Hero/Hero";
import Projects from "../../sections/Projects/Projects";
import RiskFree from "../../sections/RiskFree/RiskFree";
import { ThemeContext } from "../../App";
import { useLocation } from "react-router-dom";

const Home = ({ setIsDark, footer }) => {
  const clickedLink = useLocation();
  // refs
  const hero = useRef(null);
  const about = useRef(null);
  const education = useRef(null);
  const riskFree = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  const [offsetTops, setOffsetTops] = useState([]);
  // effects
  useEffect(() => {
    const updateOffsets = () => {
      setOffsetTops([
        0,
        about?.current?.offsetTop,
        education?.current?.offsetTop,
        projects?.current?.offsetTop,
        contact?.current?.offsetTop,
        footer?.current?.offsetTop,
      ]);
    };
    updateOffsets();

    window.addEventListener("load", updateOffsets);
    window.addEventListener("resize", updateOffsets);

    return () => {
      window.removeEventListener("load", updateOffsets);
      window.removeEventListener("resize", updateOffsets);
    };
  }, [about, education, projects, contact, footer]);
  const isDark = useContext(ThemeContext);
  function handleScroll(ID) {
    window.scrollTo({
      top: offsetTops[ID - 1] + 1,
      behavior: "smooth",
    });
  }
  return (
    <div className={isDark ? "home dark" : "home"}>
      <NavBar
        setIsDark={setIsDark}
        offsetTops={offsetTops}
        page="home"
        handler={handleScroll}
        clickedLink={clickedLink}
      />
      <Hero ref={hero} />
      <About ref={about} />
      <Education ref={education} endOfSection={riskFree} />
      <RiskFree ref={riskFree} />
      <Projects ref={projects} />
      <Contact ref={contact} />
    </div>
  );
};

export default Home;
