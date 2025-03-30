import "./NavBar.css";
import { Link } from "react-router-dom";
import { FaMoon, FaGraduationCap, FaHome } from "react-icons/fa";
import { IoSunny, IoClose } from "react-icons/io5";
import { TiThMenu, TiContacts } from "react-icons/ti";
import { LuMessageCircleWarning } from "react-icons/lu";
import { CgWebsite } from "react-icons/cg";
import { useContext, useEffect, useRef, useState } from "react";
import { throttle } from "lodash";
import { ThemeContext } from "../../App";
import NavLinks from "../NavLinks/NavLinks";

const mainLinks = [
  { id: 1, text: "Home" },
  { id: 2, text: "About me" },
  { id: 3, text: "Education" },
  { id: 4, text: "Projects" },
  { id: 5, text: "Contact" },
];
const sidebarLinks = [
  {
    id: 1,
    text: "Home",
    icon: <FaHome className="link-icon" />,
  },
  {
    id: 2,
    text: "About me",
    icon: <LuMessageCircleWarning className="link-icon" />,
  },
  {
    id: 3,
    text: "Education",
    icon: <FaGraduationCap className="link-icon" />,
  },
  {
    id: 4,
    text: "Projects",
    icon: <CgWebsite className="link-icon" />,
  },
  {
    id: 5,
    text: "Contact",
    icon: <TiContacts className="link-icon" />,
  },
];

const NavBar = ({ setIsDark, offsetTops, page, handler, clickedLink }) => {
  const ref = useRef(null);
  const isDark = useContext(ThemeContext);
  const [isShow, setIsShow] = useState(false);
  const [scroll, setScroll] = useState(() => {
    if (page == "home") {
      return 1;
    } else {
      return 4;
    }
  });
  page == "home" &&
    useEffect(() => {
      if (clickedLink?.state) {
        setScroll(clickedLink.state);
        handler(clickedLink.state);
      }
    }, [clickedLink?.state, handler]);
  page == "home" &&
    useEffect(() => {
      const callback = throttle(() => {
        for (let i = 0; i < offsetTops?.length - 1; i++) {
          if (
            window.scrollY >= offsetTops[i] &&
            window.scrollY < offsetTops[i + 1] &&
            scroll !== i + 1
          ) {
            setScroll(i + 1);
            break;
          }
        }
      }, 200);
      window.addEventListener("scroll", callback);
      return () => {
        window.removeEventListener("scroll", callback);
        callback.cancel();
      };
    }, [scroll, offsetTops]);

  function handleChangeSwitchTheme() {
    if (isDark) {
      ref.current.style.justifyContent = "end";
    } else {
      ref.current.style.justifyContent = "start";
    }
    setIsDark((prev) => !prev);
  }
  return (
    <nav>
      <div className="container">
        <Link className="logo" to="/">
          Solaf
        </Link>
        <NavLinks
          className="links"
          links={mainLinks}
          scroll={scroll}
          handler={handler}
        />
        <div className="theme-icon" onClick={() => setIsDark((prev) => !prev)}>
          {isDark ? <IoSunny className="icon" /> : <FaMoon className="icon" />}
        </div>
        <div className="small-screens-nav">
          <div className="burger-icon">
            <TiThMenu
              className="icon"
              onClick={() => setIsShow((prev) => !prev)}
            />
          </div>
          <div
            className="menu"
            style={isShow ? { right: "0px" } : { right: "-100%" }}
          >
            <div className="close-icon">
              <IoClose className="icon" onClick={() => setIsShow(false)} />
            </div>
            <NavLinks scroll={scroll} links={sidebarLinks} handler={handler} />
            <div className="theme">
              <p>Dark mode</p>
              <div className="switch">
                <div className="oval" ref={ref}>
                  <div
                    className="circle"
                    onClick={() => handleChangeSwitchTheme()}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
