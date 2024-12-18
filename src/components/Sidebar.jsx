import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { useState } from "react";


function Sidebar() {
    const sideBarClass= useState("sidebar")
  return (
    <div className="sidebar">
      <NavBar sideBarClass={sideBarClass}></NavBar>
      <ul>
        <li>
          <Link to={"/"}>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link to={"/about"}>
            {" "}
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link to={"/skills"}>
            {" "}
            <a>Skills</a>
          </Link>
        </li>
        <li>
          <Link to={"/contact-us"}>
            {" "}
            <a>Articles</a>
          </Link>
        </li>
        <li>
          <Link to={"/projects"}>
            {" "}
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link to={"/contributes"}>
            {" "}
            <a>Contributes</a>
          </Link>
        </li>
        <li>
          <Link to={"/uses"}>
            {" "}
            <a>Uses</a>
          </Link>
        </li>
        <li>
          <Link to={"/watches"}>
            {" "}
            <a>Watches</a>
          </Link>
        </li>
        <li>
          <Link to={"/programs"}>
            {" "}
            <a>Programs</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
