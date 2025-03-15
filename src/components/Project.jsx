import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

function Project() {
  // Sample projects data array
  const projects = [
    {
      id: 1,
      title: "Mega-Tel",
      description: "A powerful MERN stack application built for managing telecommunications services, featuring real-time data processing, secure authentication, and a responsive user interface.",
      technologies: ["MERN Stack", "Real-time Data", "Authentication", "Responsive UI", "Group Project"],
      github: "https://github.com/medaziznasri/megatel",
      demo: "https://mega-tel.surge.sh/"
    },
    {
      "id": 2,
      "title": "IEEE CIS ISIMA SBC Website",
      "description": "Official website for the IEEE Computational Intelligence Society Student Branch Chapter at ISI Mahdia, featuring responsive design, dark mode support, and optimized performance. The site provides information about the chapter's activities, events, and mission in advancing computational intelligence technologies.",
      "technologies": ["React.js", "Modern JavaScript", "CSS", ],
      "github": "https://github.com/medaziznasri",
      "demo": "https://cis-isima.ieee.tn/"
    }
  ];

  return (
    <div className="project-container">
      {projects.map(project => (
        <div className="project" key={project.id}>
          <div className="megatel">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </div>
          <div className="Technologies">
            <ul>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className="links-tech">
            <div className="link" onClick={() => window.open(project.github, "_blank")}>
              <FaGithub className="icon" />
              <p>Github</p>
            </div>
            <div className="link" onClick={() => window.open(project.demo, "_blank")}>
              <GoLinkExternal className="icon" />
              <p>Live demo</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
