import Typewrite from "./Typewrite";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import cv from "../assets/CV_Mohamed_Aziz_Nasri.pdf"

function Home() {
    // Simple animation state
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Trigger animation after component mounts
        setAnimate(true);
    }, []);
    
    const LinkedIn = () => {
      window.open("https://www.linkedin.com/in/med-aziz-nasri/", "_blank");
    };
    const GithubLink = () => {
      window.open("https://github.com/medaziznasri", "_blank");
    };
  return (
    <div className="home_container">
      
      {/* Enhanced creative top bounce with pulsating wave effect */}
      <div className="top-bounce">
        {[...Array(60)].map((_, index) => (
          <div key={index} className="bounce-dot" style={{animationDelay: `${index * 0.05}s`}}></div>
        ))}
      </div>
      
      <div className="welcome">
        <div className="intro">
          <h1 className="wlcm-intro-h1"
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#85929e",
              marginBottom: "-7px",
            }}
          >
            Hello, My name is
          </h1>
          <p className="my_name">Mohamed Aziz Nasri</p>
          <Typewrite></Typewrite>
        </div>
        <div className="introto">
          <p>
            – a creative haven where ideas flourish and projects come to life.{" "}
            <br /> Dive in to explore my journey, passions, and masterpieces!
          </p>
          <div className="icons">
            <FaLinkedin className="linkedin-icon pulse-icon" onClick={LinkedIn} />
            <FaGithub className="github-icon pulse-icon" onClick={GithubLink} />
            <div className="resume">
              <a href={cv} target="_blank" rel="noreferrer">
                CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
