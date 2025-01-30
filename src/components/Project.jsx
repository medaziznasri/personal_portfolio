import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";


function Project() {
   const GithubLink = () => {
     window.open("https://github.com/medaziznasri/megatel", "_blank");
   };
  const demo = () => {
    window.open("https://mega-tel.surge.sh/","_blank");
    
  }
  return (
    <div className="project-container">
      <div className="project">
        <div className="megatel">
          <h1>Mega-Tel</h1>
          <p>
            A powerful MERN stack application built for managing
            telecommunications services, featuring real-time data processing,
            secure authentication, and a responsive user interface.
          </p>
        </div>
        <div className="Technologies">
          <ul>
            <li>MERN Stack</li>
            <li>Real-time Data</li>
            <li>Authentication</li>
            <li>Responsive UI</li>
            <li>Group Project</li>
          </ul>
        </div>
        <div className="links-tech">
          <div className="link" onClick={GithubLink}>
            <FaGithub className="icon" />
            <p>Github</p>
          </div>
          <div className="link" onClick={demo}>
            <GoLinkExternal className="icon" />
            <p>Live demo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
