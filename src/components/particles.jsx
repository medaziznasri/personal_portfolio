import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const CustomParticles = ({ isDarkMode }) => {
  const [particles, setParticles] = useState([]);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  // Generate particles with random properties
  const generateParticles = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    // Balanced particle density with concentration in the center
    const particleCount = Math.min(
      (windowWidth * windowHeight) / 2200, 
      70
    ); // Slightly increased density for better center presence

    const newParticles = [];

    // Create more particles in the center of the viewport
    for (let i = 0; i < particleCount; i++) {
      // Determine if this particle should be positioned in the center region
      const isCenterParticle = i < particleCount * 0.2; // 40% of particles will be in center
      
      // Generate position using a distribution that favors the center
      let x, y;
      if (isCenterParticle) {
        // Center particles: Position in the middle 60% of the screen
        x = 20 + (Math.random() * 60);
        y = 20 + (Math.random() * 60);
      } else {
        // Regular particles: Position anywhere
        x = Math.random() * 100;
        y = Math.random() * 100;
      }
      
      // Calculate distance from center (0-70.7 roughly, where 0 is center and 70.7 is corner)
      const centerX = 50;
      const centerY = 50;
      const distanceFromCenter = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
      const normalizedDistance = Math.min(distanceFromCenter / 70.7, 1); // 0 to 1
      
      // Particles closer to center are more visible
      const opacityByPosition = 0.7 - (normalizedDistance * 0.5); // 0.7 at center, 0.2 at edges
      
      newParticles.push({
        id: i,
        // Position based on the calculations above
        x: x,
        y: y,
        size: 1 + Math.random() * 7, // Smaller particles for a more subtle effect
        opacity: opacityByPosition + Math.random() * 0.9, // Higher opacity in center
        duration: 15 + Math.random() * 20, // Slower, more relaxed animation
        delay: Math.random() * 10, // More varied delays to avoid synchronized movement
      });
    }

    setParticles(newParticles);
  };

  useEffect(() => {

    generateParticles();

    // Regenerate particles when window resizes
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
      generateParticles();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Effect to regenerate particles when dark mode changes to adjust colors
  useEffect(() => {
    const timer = setTimeout(() => {
      generateParticles();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [isDarkMode]);

  return (
    <div
      id="particles"
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: "none", // Allow clicking through particles
      }}
    >
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="floating-particle"
          style={{
            position: "absolute",
            top: `${particle.y}%`,
            left: `${particle.x}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            borderRadius: "50%",
            backgroundColor: isDarkMode ? "var(--skills-box)" : "var(--skills-box)",
            opacity: particle.opacity,
            // Enhanced glow for center particles (those with higher opacity)
            boxShadow: `0 0 ${Math.min(particle.size, 3) + (particle.opacity > 0.7 ? 4 : particle.id % 2)}px ${
              isDarkMode ? "var(--skills-box)" : "var(--skills-box)"
            }`,
            filter: `blur(${particle.id % 8 === 0 ? 0.2 : 0}px)`,
            animation: `floatingParticle ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
            pointerEvents: "none", // make sure particles don't interfere with interaction
            zIndex: particle.id % 5 === 0 ? 1 : 0, // Create depth with occasional higher z-index
          }}
        />
      ))}
    </div>
  );
};

CustomParticles.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default CustomParticles;