import { Typewriter } from "react-simple-typewriter";

function Typewrite() {
  return (
    <div>
      <h1
        className="TypeWritter-h1"
        style={{
          color: "var(--skills-box)",
          fontWeight: "bolder",
          fontSize: "35px",
        }}
      >
        <span
          className="TypeWritter-span"
          style={{ color: "#85929e", fontWeight: "bold", fontSize: "35px" }}
        >
          And I&apos;m{" "}
        </span>{" "}
        <span>
          <Typewriter
            words={["a Full Stack Developer"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={100}
          />
        </span>
      </h1>
    </div>
  );
}

export default Typewrite;
