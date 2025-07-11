import Home from "./components/Home";
import  { useRef, useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Footer from "./components/Footer";
import ParticlesComponent from "./components/particles";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import "./components/Contact.css";

function App() {

  

  const homeRef = useRef(null);
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true); 
    }, 200);

    return () => clearTimeout(timer);
  }, []);
 

  // Track dark mode state at the App level (default to true for dark mode)
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // Pass this down to NavBar and use it for particles
  const handleDarkModeChange = (isDark) => {
    setIsDarkMode(isDark);
  };

  return (
    <Router>
      {/* Particles positioned outside the App container to cover the full page */}
      <ParticlesComponent isDarkMode={isDarkMode} />
      
      <div className="App">
        <NavBar onDarkModeChange={handleDarkModeChange} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <div
                ref={homeRef}
                className={`home-content ${showContent ? "show" : ""}`}
              >
                <About />
              </div>
            }
            id="Homes"
          />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;