import React, { useState, useEffect, useCallback } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

function SideBar() {
  const [showContact, setShowContact] = useState(true);

  const toggleContactDetails = useCallback((e) => {
    e.preventDefault();
    setShowContact((prevShowContact) => !prevShowContact);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setShowContact(window.innerWidth >= 1100);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="sidebar">
      <div className="intro">
        <img src="profile.jpeg" alt="Profile" className="image" />
        <div className="role">
          <h1 className="name">VENKATA THRIVENDRA REDDY PONDUGULA</h1>
          <button className="details-button" onClick={toggleContactDetails}>
            {showContact ? "Hide Contact" : "Show Contact"}
          </button>
          <button className="details-icon" onClick={toggleContactDetails}>
            {showContact ? <VisibilityOff /> : <Visibility />}
          </button>
        </div>
      </div>
      <hr className="border" />
      {showContact && (
        <div className="details">
          <div className="detail-res">
            <div className="content">
              <div className="icon">
                <EmailOutlinedIcon />
              </div>
              <div>
                <p className="input">Email</p>
                <a className="value" href="mailto:trivendrareddy19@gmail.com" style={{ textDecoration: "none" }}>
                  trivendrareddy19@gmail.com
                </a>
              </div>
            </div>
            <div className="content">
              <div className="icon">
                <PhoneInTalkIcon />
              </div>
              <div>
                <p className="input">Phone</p>
                <p className="value">+91 9392897834</p>
              </div>
            </div>
          </div>
          <div className="detail-res">
            <div className="content">
              <div className="icon">
                <CalendarMonthRoundedIcon />
              </div>
              <div>
                <p className="input">Birthday</p>
                <p className="value">19 August, 2004</p>
              </div>
            </div>
            <div className="content">
              <div className="icon">
                <LocationOnOutlinedIcon />
              </div>
              <div>
                <p className="input">Location</p>
                <p className="value">Andhra Pradesh, India</p>
              </div>
            </div>
          </div>
          <div className="detail-res">
            <div className="content-icons">
              <a className="icon_bottom" href="https://github.com/trivendrareddygmail" target="_blank" rel="noopener noreferrer">
                <GitHubIcon sx={{ fontSize: 30 }} />
              </a>
              <a className="icon_bottom" href="https://linkedin.com/in/trivendra-reddy" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon sx={{ fontSize: 30 }} />
              </a>
              <a className="icon_bottom" href="https://instagram.com/mr.thrivendra_reddy/?hl=en" target="_blank" rel="noopener noreferrer">
                <InstagramIcon sx={{ fontSize: 30 }} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideBar;
