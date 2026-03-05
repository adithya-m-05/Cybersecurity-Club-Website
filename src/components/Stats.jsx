import { useEffect, useRef, useState } from "react";

const Stats = () => {
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
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={`stats ${isVisible ? "visible" : ""}`}>
      <div className={`stat-card ${isVisible ? "pop-in" : ""}`}>
        <h3>200+</h3>
        <p>Active Members</p>
      </div>

      <div className={`stat-card ${isVisible ? "pop-in-delay-1" : ""}`}>
        <h3>50+</h3>
        <p>CTF Challenges</p>
      </div>

      <div className={`stat-card ${isVisible ? "pop-in-delay-2" : ""}`}>
        <h3>30+</h3>
        <p>Workshops Held</p>
      </div>
    </section>
  );
};

export default Stats;