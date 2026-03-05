import { useState } from "react";

const Navbar = ({ scrolled }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <span className="logo-blue">Cyber</span>
        <span>Security</span>
        <span className="logo-light">NMIT</span>
      </div>

      <div className="nav-links">
        <a onClick={() => scrollToSection("hero")}>Home</a>
        <a onClick={() => scrollToSection("about")}>About</a>
        <a onClick={() => scrollToSection("gallery")}>Gallery</a>
        <a onClick={() => scrollToSection("events")}>Events</a>
        <a onClick={() => scrollToSection("contact")}>Contact</a>
        <button className="join-btn" onClick={() => scrollToSection("contact")}>Join Us</button>
      </div>
    </nav>
  );
};

export default Navbar;