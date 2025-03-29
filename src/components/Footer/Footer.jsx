import { useContext } from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { RiDiscordLine, RiFacebookFill } from "react-icons/ri";
import { ThemeContext } from "../../App";

const Footer = ({ ref }) => {
  const isDark = useContext(ThemeContext);
  return (
    <footer className={isDark ? "dark" : ""} ref={ref}>
      <div className="container">
        <div className="copy-right">&copy; 2025. All Rights Reserved</div>
        <div className="developer">Develpoment by Solaf</div>
        <div className="icons">
          <a
            href="https://www.facebook.com/profile.php?id=61574606949279"
            target="_blank"
            className="icon-holder"
          >
            <RiFacebookFill className="icon" />
          </a>
          <a
            href="https://discord.gg/txuauRGZ"
            target="_blank"
            className="icon-holder"
          >
            <RiDiscordLine className="icon" />
          </a>
          <a
            href="https://www.instagram.com/alfares.solaf/"
            target="_blank"
            className="icon-holder"
          >
            <FaInstagram className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/solaf-alfares-8bba872aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            className="icon-holder"
          >
            <img className="icon" src="/assets/images/linkedin.svg" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
