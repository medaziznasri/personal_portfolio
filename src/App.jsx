import Home from "./components/Home";
import  { useRef, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Footer from "./components/Footer";
import ParticlesComponent from "./components/particles";
import Skills from "./components/Skills";

function App() {

  

  const homeRef = useRef(null);
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true); 
    }, 200);

    return () => clearTimeout(timer);
  }, []);
 

  return (
    <Router>
      <div className="App">
        <NavBar />
    
        <ParticlesComponent id="particles" />
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
        </Routes>
            <Footer ></Footer>
            </div>
    </Router>
  );
}

export default App;
