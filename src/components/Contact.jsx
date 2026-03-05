import { useRef, useState, useEffect } from "react";

const Contact = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <section id="contact" ref={ref} className={`contact-section ${isVisible ? "visible" : ""}`}>
      <h2 className="contact-title">
        Ready to Join <span>Our Community?</span>
      </h2>

      <div className="contact-container">
        <div className={`contact-info ${isVisible ? "slide-in-left" : ""}`}>
          <h3>Get In Touch</h3>
          <div className="info-item">
            <span className="info-label">Email</span>
            <p>
              <a href="mailto:cybersecnmit@gmail.com">
                cybersecnmit@gmail.com
              </a>
            </p>
          </div>
          
          <div className="info-item">
            <span className="info-label">Location</span>
            <p>
              Nitte Meenakshi Institute of Technology
              <br />
              Bangalore, Karnataka, India
            </p>
          </div>
        </div>

        <form className={`contact-form ${isVisible ? "slide-in-right" : ""}`} onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="your.email@example.com" required />
          <textarea placeholder="Tell us what's on your mind..." required></textarea>
          <button type="submit" className="primary-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;