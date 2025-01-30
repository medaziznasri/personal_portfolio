import image from "../assets/470460950_1308517460166311_4125634053438536026_n.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function About() {
  const GithubLink = () => {
    window.open("https://github.com/medaziznasri", "_blank");
  };
  const LinkedIn = () => {
    window.open("https://www.linkedin.com/in/med-aziz-nasri/", "_blank");
  };
  const mailMe = () => {
    window.open("mailto:aziznasri11082003@gmail.com", "_blank");
  };
  return (
    <div className="about-container">
      <div className="about">
        <div className="para">
          <span className="myName"> Hi, I’m Mohamed Aziz Nasri </span>
          <p>
            A dedicated Software Engineer and Computer Science student based in
            Tunisia. My journey is driven by a passion for innovation and a deep
            curiosity about technology.
            <br />
            <br />
            Currently studying at the Higher Institute of Computer Science of
            Mahdia, I’m on a mission to refine my skills and contribute
            meaningfully to the world of software engineering.
            <br />
            <br />I thrive at the intersection of programming and design,
            blending technical expertise with a keen eye for aesthetics to craft
            applications that are both powerful and user-friendly. My focus is
            on creating solutions that are scalable, efficient, and inclusive,
            ensuring exceptional digital experiences for all.
          </p>
        </div>
        <div className="about-content-two">
          <div className="image">
            <img src={image} alt="" />
          </div>
          <div className="links">
            <div className="link" onClick={GithubLink}>
              <FaGithub className="icon" />
              <p>follow me on Github</p>
            </div>
            <div className="link" onClick={LinkedIn}>
              <FaLinkedin className="icon" />
              <p>follow me on LinkedIn</p>
            </div>
            <hr />
            <div className="link" onClick={mailMe}>
              <MdEmail className="icon" />
              <p>aziznasri11082003@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
