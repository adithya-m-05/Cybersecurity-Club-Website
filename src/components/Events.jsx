import { useEffect, useRef, useState } from "react";

const Events = () => {
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
    <section id="events" ref={ref} className="events-section">
      <h2 className="section-title">Upcoming Events</h2>
      
      <div className="events-grid">
        <div className={`event-card ${isVisible ? "fade-in" : ""}`}>
          <div className="event-icon">🚩</div>
          <h3>Breach Point CTF</h3>
          <p>Annual Capture The Flag competition where teams compete to solve security challenges.</p>
        </div>

        <div className={`event-card ${isVisible ? "fade-in-delay-1" : ""}`}>
          <div className="event-icon">🎓</div>
          <h3>Workshops</h3>
          <p>Hands-on ethical hacking sessions covering topics like penetration testing and vulnerability analysis.</p>
        </div>

        <div className={`event-card ${isVisible ? "fade-in-delay-2" : ""}`}>
          <div className="event-icon">👥</div>
          <h3>Meetups</h3>
          <p>Regular community meetups to discuss latest security trends and network with fellow enthusiasts.</p>
        </div>
      </div>
    </section>
  );
};

export default Events;