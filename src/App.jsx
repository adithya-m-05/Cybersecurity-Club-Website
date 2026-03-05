import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Background from "./components/BackgroundParticles";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Background />
      <Navbar scrolled={scrolled} />
      <Hero />
      <About />
      <Team />
      <Gallery />
      <Events />
      <Contact />
      <Footer />
    </>
  );
}

export default App;