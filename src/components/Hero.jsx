import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="particles-bg"></div>
      
      <p className={`tagline ${isVisible ? "fade-in" : ""}`}>
        Securing the Digital Future
      </p>

      <h1 className={`hero-h1 ${isVisible ? "fade-in-delay-1" : ""}`}>
        Welcome to
      </h1>

      <h2 className={`hero-title ${isVisible ? "fade-in-delay-2" : ""}`}>
        CyberSecurityNMIT
      </h2>

      <p className={`hero-desc ${isVisible ? "fade-in-delay-3" : ""}`}>
        Join the elite community of cybersecurity enthusiasts. Learn, compete,
        and protect the digital world through hands-on challenges and
        cutting-edge training.
      </p>

      <div className={`hero-buttons ${isVisible ? "fade-in-delay-4" : ""}`}>
        <button className="primary-btn" onClick={() => scrollToSection("about")}>Get Started</button>
        <button className="secondary-btn" onClick={() => scrollToSection("events")}>View Events</button>
      </div>
    </section>
  );
};

export default Hero;