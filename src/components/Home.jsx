import Typewrite from "./Typewrite";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import cv from "../assets/CV_Mohamed_Aziz_Nasri.pdf"

function Home() {
  
    const LinkedIn = () => {
      window.open("https://www.linkedin.com/in/med-aziz-nasri/", "_blank");
    };
    const GithubLink = () => {
      window.open("https://github.com/medaziznasri", "_blank");
    };
  return (
    <div className="home_container">
      
      <div className="top-bounce">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
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
            <FaLinkedin className="linkedin-icon" onClick={LinkedIn} />
            <FaGithub className="github-icon" onClick={GithubLink} />
            <div className="resume">
              {" "}
              <a href={cv} target="blank">
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
