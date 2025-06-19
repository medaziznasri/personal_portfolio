import  { useState, useEffect } from "react";
import { DiReact } from "react-icons/di";
import { IoLogoNodejs } from "react-icons/io";
import { AiOutlinePython } from "react-icons/ai";
import { MdSecurity } from "react-icons/md";

function Skills() {
  const [animateTitle, setAnimateTitle] = useState(false);
  const [animateFrontend, setAnimateFrontend] = useState(false);
  const [animateBackend, setAnimateBackend] = useState(false);
  const [animateML, setAnimateML] = useState(false);
  const [animateCyber, setAnimateCyber] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  // Handle skill card hover
  const handleSkillHover = (skillId) => {
    setActiveSkill(skillId);
  };

  // Handle skill card hover out
  const handleSkillLeave = () => {
    setActiveSkill(null);
  };

  useEffect(() => {
    // Title animation first
    const titleTimer = setTimeout(() => setAnimateTitle(true), 100);
    
    // Sequential entry animations for cards
    const timer1 = setTimeout(() => setAnimateFrontend(true), 300);
    const timer2 = setTimeout(() => setAnimateBackend(true), 450);
    const timer3 = setTimeout(() => setAnimateML(true), 600);
    const timer4 = setTimeout(() => setAnimateCyber(true), 750);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <div className="skills_container">
      <h1 
        className="skills-main-title"
        style={{
          transform: animateTitle ? "translateY(0)" : "translateY(-30px)",
          opacity: animateTitle ? 1 : 0,
          transition: "transform 0.6s ease-out, opacity 0.6s ease-out",
        }}
      >
        My Expertise
      </h1>
      <div className="skills">
        {/* Frontend */}
        <div
          className={`frontend skill-card ${activeSkill === 'frontend' ? 'active' : ''}`}
          id="f1"
          onMouseEnter={() => handleSkillHover('frontend')}
          onMouseLeave={handleSkillLeave}
          style={{
            transform: animateFrontend ? "translateY(0)" : "translateY(-30px)",
            opacity: animateFrontend ? 1 : 0,
            transition: "transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.7s ease, box-shadow 0.3s ease",
          }}
        >
          <div className="skill">
            <DiReact className="skill-icon" />
            <h1>Frontend Development</h1>
          </div>
          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React JS</li>
            <li>Next.js</li>
          </ul>
        </div>

        {/* Backend */}
        <div
          className={`backend skill-card ${activeSkill === 'backend' ? 'active' : ''}`}
          id="b2"
          onMouseEnter={() => handleSkillHover('backend')}
          onMouseLeave={handleSkillLeave}
          style={{
            transform: animateBackend ? "translateY(0)" : "translateY(-30px)",
            opacity: animateBackend ? 1 : 0,
            transition: "transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.7s ease, box-shadow 0.3s ease",
          }}
        >
          <div className="skill">
            <IoLogoNodejs className="skill-icon" />
            <h1>Backend Development</h1>
          </div>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Python</li>
            <li>MongoDB</li>
            <li>Git & GitHub</li>
            <li>Docker</li>
          </ul>
        </div>

        {/* Machine Learning */}
        <div
          className={`machine-learning skill-card ${activeSkill === 'ml' ? 'active' : ''}`}
          id="m3"
          onMouseEnter={() => handleSkillHover('ml')}
          onMouseLeave={handleSkillLeave}
          style={{
            transform: animateML ? "translateY(0)" : "translateY(-30px)",
            opacity: animateML ? 1 : 0,
            transition: "transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.7s ease, box-shadow 0.3s ease",
          }}
        >
          <div className="skill">
            <AiOutlinePython className="skill-icon" />
            <h1>Machine Learning</h1>
          </div>
          <ul>
            <li>Scikit-learn</li>
            <li>NumPy</li>
            <li>Pandas</li>
            <li>Matplotlib</li>
            <li>TensorFlow</li>
          </ul>
        </div>
        
        {/* Cybersecurity */}
        <div
          className={`cybersecurity skill-card ${activeSkill === 'cyber' ? 'active' : ''}`}
          id="c4"
          onMouseEnter={() => handleSkillHover('cyber')}
          onMouseLeave={handleSkillLeave}
          style={{
            transform: animateCyber ? "translateY(0)" : "translateY(-30px)",
            opacity: animateCyber ? 1 : 0,
            transition: "transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.7s ease, box-shadow 0.3s ease",
          }}
        >
          <div className="skill">
            <MdSecurity className="skill-icon" />
            <h1>Cybersecurity</h1>
          </div>
          <ul>
            <li>Wazuh</li>
            <li>TheHive</li>
            <li>Cortex</li>
            <li>MISP</li>
            <li>Shuffle</li>
            <li>Elasticsearch</li>
            <li>Kibana</li>
            <li>Filebeat</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
