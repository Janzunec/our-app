import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [active, setActive] = useState<
    "homepage" | "about" | "skills" | "projects" | "contact" | null
  >(null);

  return (
    <nav className="justify-between text-2xl bg-navbg flex align-middle text-white min-w-full fixed top-0 left-0 border-b border-gray-300 z-20">
      <Link
        to="/"
        onClick={() => setActive("homepage")}
        className="w-1/8 flex items-center justify-center pb-1 font-lob text-3xl text-secondary hover:text-primary transform hover:scale-125 transition-all duration-300"
      >
        JM
      </Link>
      <ul className="align-middle w-1/2 text-primary font-main grid grid-cols-4 border-0">
        <Link
          to="/about"
          onClick={() => setActive("about")}
          className={`h-14 flex justify-center items-center hover:text-secondary transform hover:scale-125 transition-all duration-300 `}
        >
          about
        </Link>
        <Link
          to="/skills"
          onClick={() => setActive("skills")}
          className="h-14 flex justify-center items-center hover:text-secondary transform hover:scale-125  transition-all duration-300
					"
        >
          skills
        </Link>
        <Link
          to="/projects"
          onClick={() => setActive("projects")}
          className="h-14 flex justify-center items-center hover:text-secondary transform hover:scale-125  transition-all duration-300"
        >
          projects
        </Link>
        <Link
          to="/contact"
          onClick={() => setActive("contact")}
          className="h-14 flex justify-center items-center hover:text-secondary transform hover:scale-125  transition-all duration-300"
        >
          contact
        </Link>
        <hr
          className={`h-1 w-full bg-primary border-0 transition-all duration-300 transform translate-x-nav ${
            active === "about" ? " ml-about" : ""
          } ${active === "skills" ? " ml-skills" : " "} ${
            active === "projects" ? " ml-projects" : ""
          } ${active === "contact" ? " ml-contact" : ""}`}
        />
      </ul>
    </nav>
  );
};

export default Navbar;
