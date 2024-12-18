import { useState, useEffect ,useRef } from "react";
import logo from "../assets/414480092_1087482118936514_4680294006398497227_n.jpg";
import { FaLinkedin } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import ParticlesComponent from "./particles";
import { useNavigate ,useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function NavBar() {
const [isOpen, setIsOpen] = useState(false);
const menuRef = useRef(null);

const toggleMenu = () => {
  setIsOpen((prev) => !prev);
};

const closeMenu = () => {
  setIsOpen(false);
};

useEffect(() => {
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
    
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
    const handleMenuOptionClick = () => {
      closeMenu(); 
    };

  const navigate = useNavigate();

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    }
  }, [isDarkMode]);

  const LinkedIn = () => {
    window.open("https://www.linkedin.com/in/med-aziz-nasri/", "_blank");
  };


  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  // Update active section on route change
  useEffect(() => {
    const currentPath = location.pathname.slice(1); // Remove leading "/"
    setActiveSection(currentPath || "home"); // Default to 'home' for root
  }, [location]);


 

  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </Link>

      <div className="links">
        <ul>
          <li onClick={() => navigate("/")}>
            <a className={activeSection === "home" ? "active" : ""}>Home</a>
          </li>
          <li onClick={() => navigate("/about")}>
            <a className={activeSection === "about" ? "active" : ""}>About</a>
          </li>
          <li onClick={() => navigate("/skills")}>
            <a className={activeSection === "skills" ? "active" : ""}>Skills</a>
          </li>
          <li onClick={() => navigate("/contact-us")}>
            <a className={activeSection === "contact-us" ? "active" : ""}>
              Articles
            </a>
          </li>
          <li onClick={() => navigate("/projects")}>
            <a className={activeSection === "projects" ? "active" : ""}>
              Projects
            </a>
          </li>
          <li onClick={() => navigate("/contributes")}>
            <a className={activeSection === "contributes" ? "active" : ""}>
              Contributes
            </a>
          </li>
        </ul>
      </div>

      <div className="menu-container" ref={menuRef}>
        <button
          className="menu-button"
          type="button"
          aria-expanded={isOpen}
          aria-controls="menu-panel"
          onClick={toggleMenu}
        >
          Menu
          <svg
            viewBox="0 0 8 6"
            aria-hidden="true"
            className={`menu-button-icon ${isOpen ? "rotate-180" : ""}`}
          >
            <path
              d="M1.75 1.75 4 4.25l2.25-2.5"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        {isOpen && (
          <div className="menu-panel" id="menu-panel">
            <ul>
              <li onClick={() => navigate("/")}>
                <a onClick={handleMenuOptionClick}>Home</a>
              </li>
              <li onClick={() => navigate("/about")}>
                <a onClick={handleMenuOptionClick}>About</a>
              </li>
              <li onClick={() => navigate("/skills")}>
                <a onClick={handleMenuOptionClick}>Skills</a>
              </li>
              <li onClick={() => navigate("/contact-us")}>
                <a onClick={handleMenuOptionClick}>Articles</a>
              </li>
              <li onClick={() => navigate("/projects")}>
                <a onClick={handleMenuOptionClick}>Projects</a>
              </li>
              <li onClick={() => navigate("/contributes")}>
                <a onClick={handleMenuOptionClick}>Contributes</a>
              </li>
            </ul>
          </div>
        )}
        <div className="paths">
          <FaLinkedin className="linkedin-icon" onClick={LinkedIn} />
          {isDarkMode ? (
            <BsMoonStarsFill className="darkmode" onClick={toggleDarkMode} />
          ) : (
            <FaSun className="lightmode" onClick={toggleDarkMode} />
          )}
        </div>
      </div>

      <ParticlesComponent isDarkMode={isDarkMode} />
    </div>
  );
}

export default NavBar;
