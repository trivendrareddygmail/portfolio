import { useState, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info'; // Icon for the About section
import WorkIcon from '@mui/icons-material/Work'; // Icon for the Projects section
import BuildIcon from '@mui/icons-material/Build'; // Icon for the Experience (Skills) section
import SchoolIcon from '@mui/icons-material/School'; // Icon for the Education section
import ContactMailIcon from '@mui/icons-material/ContactMail'; // Icon for the Contact section
import './NavBar.css'

// eslint-disable-next-line react/prop-types
function NavBar({ activeSection, setActiveSection }) {
      const [showNav, setShowNav] = useState(true);
      const [isMobile, setIsMobile] = useState(false); // State to track mobile view

      useEffect(() => {
            const handleResize = () => {
                  setIsMobile(window.innerWidth < 768);
                  setShowNav(window.innerWidth >= 768);
            };
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
      }, []);

      const showSection = (section, e) => {
            e.preventDefault();
            setActiveSection(section);
      };

      const toggleNav = () => {
            setShowNav((prevShowNav) => !prevShowNav);
      };

      return (
            <>
                  <nav className="nav">
                        {showNav && (
                              <div className="con">
                                    {isMobile ? (
                                          <>
                                                <a onClick={(e) => showSection("about", e)} href="#about" className={activeSection === "about" ? "active" : ""}>
                                                      <InfoIcon />
                                                </a>
                                                <a onClick={(e) => showSection("projects", e)} href="#projects" className={activeSection === "projects" ? "active" : ""}>
                                                      <WorkIcon />
                                                </a>
                                                <a onClick={(e) => showSection("skills", e)} href="#skills" className={activeSection === "skills" ? "active" : ""}>
                                                      <BuildIcon />
                                                </a>
                                                <a onClick={(e) => showSection("education", e)} href="#education" className={activeSection === "education" ? "active" : ""}>
                                                      <SchoolIcon />
                                                </a>
                                                <a onClick={(e) => showSection("contact", e)} href="#contact" className={activeSection === "contact" ? "active" : ""}>
                                                      <ContactMailIcon />
                                                </a>
                                          </>
                                    ) : (
                                          <>
                                                <a onClick={(e) => showSection("about", e)} href="#about" className={activeSection === "about" ? "active" : ""}>About</a>
                                                <a onClick={(e) => showSection("projects", e)} href="#projects" className={activeSection === "projects" ? "active" : ""}>Projects</a>
                                                <a onClick={(e) => showSection("skills", e)} href="#skills" className={activeSection === "skills" ? "active" : ""}>Skills</a>
                                                <a onClick={(e) => showSection("education", e)} href="#education" className={activeSection === "education" ? "active" : ""}>Education</a>
                                                <a onClick={(e) => showSection("contact", e)} href="#contact" className={activeSection === "contact" ? "active" : ""}>Contact</a>
                                          </>
                                    )}
                              </div>
                        )}
                        <button className="toggle-nav-btn" onClick={toggleNav}>
                              {showNav ? <CloseIcon /> : <MenuIcon />}
                        </button>
                  </nav>
            </>
      );
}

export default NavBar;
