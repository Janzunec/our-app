import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== "/") {
      document.querySelector(".threeBack")?.remove();
    }
  }, [pathname]);

  return (
    <div className="min-h-screen flex items-center">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
