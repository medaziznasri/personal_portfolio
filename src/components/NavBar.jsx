
import { useState, useEffect ,useRef } from "react";
import logo from "../assets/470460950_1308517460166311_4125634053438536026_n.jpg";
import { FaLinkedin } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { useNavigate ,useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function NavBar({ onDarkModeChange }) {
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

  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (onDarkModeChange) {
      onDarkModeChange(newMode);
    }
  };
  // Effect to apply appropriate class when dark mode changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    }
  }, [isDarkMode]);

  // Effect to initialize dark mode on first render
  useEffect(() => {
    // Set initial dark mode
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
    
    // Notify parent component about initial dark mode state
    if (onDarkModeChange) {
      onDarkModeChange(true);
    }
  }, []);

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
      <div className="links-cont">
        <div className="links">
          <ul>
            <li onClick={() => navigate("/")}>
              <a className={activeSection === "home" ? "active" : ""}>Home</a>
            </li>
            <li onClick={() => navigate("/about")}>
              <a className={activeSection === "about" ? "active" : ""}>About</a>
            </li>
            <li onClick={() => navigate("/skills")}>
              <a className={activeSection === "skills" ? "active" : ""}>
                Skills
              </a>
            </li>            <li onClick={() => navigate("/projects")}>
              <a className={activeSection === "projects" ? "active" : ""}>
                Projects
              </a>
            </li>
            <li onClick={() => navigate("/blog")}>
              <a className={activeSection === "blog" ? "active" : ""}>
                Blog
              </a>
            </li>
            <li onClick={() => navigate("/contact")}>
              <a className={activeSection === "contact" ? "active" : ""}>
                Contact
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
                </li>                <li onClick={() => navigate("/projects")}>
                  <a onClick={handleMenuOptionClick}>Projects</a>
                </li>
                <li onClick={() => navigate("/blog")}>
                  <a onClick={handleMenuOptionClick}>Blog</a>
                </li>
                <li onClick={() => navigate("/contact")}>
                  <a onClick={handleMenuOptionClick}>Contact</a>
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
            )}          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
