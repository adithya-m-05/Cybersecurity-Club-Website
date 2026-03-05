import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className={`about-section ${isVisible ? "visible" : ""}`}>
      <h2 className="section-title">About Us</h2>
      
      <div className="about-container">
        <div className={`about-image ${isVisible ? "slide-in-left" : ""}`}>
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=400&fit=crop"
            alt="Cybersecurity"
          />
        </div>

        <div className={`about-content ${isVisible ? "slide-in-right" : ""}`}>
          <h3>Building Cybersecurity Leaders</h3>
          <p>
            CyberSecurity NMIT is a student-driven community focused on ethical
            hacking, Capture The Flag (CTF) competitions, cybersecurity research,
            and digital defense.
          </p>
          <p>
            We provide hands-on training, organize competitions, and foster a
            culture of continuous learning in the cybersecurity field.
          </p>
          <p>
            Our mission is to develop the next generation of ethical hackers and
            security professionals who will protect the digital world.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default About;