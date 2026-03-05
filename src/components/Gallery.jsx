import { useEffect, useRef, useState } from "react";
import pic1 from "../pics/gallery/1.jpeg";
import pic2 from "../pics/gallery/2.jpeg";
import pic3 from "../pics/gallery/3.jpeg";
import pic4 from "../pics/gallery/4.jpeg";
import pic5 from "../pics/gallery/5.jpeg";
import pic6 from "../pics/gallery/6.jpeg";

const images = [pic1, pic2, pic3, pic4, pic5, pic6];

const Gallery = () => {
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
    <section id="gallery" ref={ref} className="gallery-section">
      <h2 className={`gallery-title ${isVisible ? "fade-in" : ""}`}>
        Gallery
      </h2>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className={`gallery-card ${isVisible ? "fade-in" : ""}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img src={img} alt="Cyber Event" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;