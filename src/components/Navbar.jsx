import { useState } from "react";

const Navbar = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close menu after navigation
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <span className="logo-blue">Cyber</span>
          <span>Security</span>
          <span className="logo-light">NMIT</span>
        </div>

        <div className="nav-links desktop-nav">
          <a onClick={() => scrollToSection("hero")}>Home</a>
          <a onClick={() => scrollToSection("about")}>About</a>
          <a onClick={() => scrollToSection("gallery")}>Gallery</a>
          <a onClick={() => scrollToSection("team")}>Team</a>
          <a onClick={() => scrollToSection("events")}>Events</a>
          <a onClick={() => scrollToSection("contact")}>Contact</a>
          <button className="join-btn" onClick={() => scrollToSection("contact")}>Join Us</button>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}></div>

      {/* Mobile Side Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-content">
          <a onClick={() => scrollToSection("hero")}>Home</a>
          <a onClick={() => scrollToSection("about")}>About</a>
          <a onClick={() => scrollToSection("gallery")}>Gallery</a>
          <a onClick={() => scrollToSection("team")}>Team</a>
          <a onClick={() => scrollToSection("events")}>Events</a>
          <a onClick={() => scrollToSection("contact")}>Contact</a>
          <button className="join-btn mobile-join-btn" onClick={() => scrollToSection("contact")}>Join Us</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;