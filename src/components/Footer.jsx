const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>CyberSecurityNMIT</h3>
          <p>
            Building the next generation of cybersecurity professionals through
            hands-on learning and competitions.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#events">Events</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://www.instagram.com/cybersecuritynmit?igsh=ZDZ0ZWJ3YTYzdnkx" target="_blank">Instagram</a></li>
            <li><a href="https://www.linkedin.com/in/cybersecurity-nmit-63b2a83b4" target="_blank">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 CyberSecurity NMIT. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;