import  { useState, useEffect } from "react";
import { DiReact } from "react-icons/di";
import { IoLogoNodejs } from "react-icons/io";
import { AiOutlinePython } from "react-icons/ai";

function Skills() {
  const [animateFrontend, setAnimateFrontend] = useState(false);
  const [animateBackend, setAnimateBackend] = useState(false);
  const [animateML, setAnimateML] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimateFrontend(true), 200);
    const timer2 = setTimeout(() => setAnimateBackend(true), 400);
    const timer3 = setTimeout(() => setAnimateML(true), 600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="skills_container">
      <div className="skills">
        {/* Frontend */}
        <div
          className="frontend"
          id="f1"
          style={{
            transform: animateFrontend ? "translateY(0)" : "translateY(-50px)",
            opacity: animateFrontend ? 1 : 0,
            transition: "transform 1s ease-out, opacity 1s ease-out",
          }}
        >
          <div className="skill">
            <DiReact className="skill-icon" />
            <h1>Frontend Development</h1>
          </div>
          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>javaScript</li>
            <li>TypeScript</li>
            <li>React Js</li>
            <li>Next.js</li>
          </ul>
        </div>

        {/* Backend */}
        <div
          className="backend"
          id="b2"
          style={{
            transform: animateBackend ? "translateY(0)" : "translateY(50px)",
            opacity: animateBackend ? 1 : 0,
            transition: "transform 1s ease-out, opacity 1s ease-out",
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
            <li>mongodb</li>
            <li>Git & Github</li>
            <li>docker</li>
          </ul>
        </div>

        {/* Machine Learning */}
        <div
          className="machine-learning"
          id="m3"
          style={{
            transform: animateML ? "translateY(0)" : "translateY(-50px)",
            opacity: animateML ? 1 : 0,
            transition: "transform 1s ease-out, opacity 1s ease-out",
          }}
        >
          <div className="skill">
            <AiOutlinePython className="skill-icon" />
            <h1>Machine learning</h1>
          </div>
          <ul>
            <li>Scikit-learn</li>
            <li>Numpy</li>
            <li>Pandas</li>
            <li>Matplotlib</li>
            <li>TensorFlow</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
