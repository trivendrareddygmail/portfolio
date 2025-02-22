// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Portfolio.css";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Contact from "./Contact";
import About from "./About";
import Projects from "./Projects";
import Education from "./Education";
import Skills from "./Skills";

function Portfolio() {
    const [activeSection, setActiveSection] = useState("about");

    return (
        <div className="main">
            <div className="left"></div>
            <SideBar/>
            <div className="bodys">
                <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
                <div>
                    {activeSection === "about" && <About />}
                    {activeSection === "projects" && <Projects />}
                    {activeSection === "skills" && <Skills/>}
                    {activeSection === "education" && <Education />}
                    {activeSection === "contact" && <Contact />}
                </div>
            </div>
            <div className="right"></div>
        </div>
    );
}

export default Portfolio;
