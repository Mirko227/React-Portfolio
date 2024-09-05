import Hero from "../components/Hero/Hero.tsx";
import home from "./home.module.css";
import About from "../components/About/About.tsx";
import Dev from "../components/Dev/Dev.tsx";
import Contact from "../components/Contact/Contact.tsx";
import Projects from "../components/Projects/Projects.tsx";
import { useEffect, useRef } from "react";

function Home() {
  const mainContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mainContainer = mainContainerRef.current;

    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY === 100 || event.deltaY === -100) {
        event.preventDefault();
        if (mainContainer) {
          mainContainer.scrollBy({
            top: event.deltaY,
            behavior: "smooth",
          });
        }
      }
    };

    if (mainContainer) {
      mainContainer.addEventListener("wheel", handleScroll, { passive: false });
    }

    return () => {
      if (mainContainer) {
        mainContainer.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <div className={home.mainContainer} ref={mainContainerRef}>
        <Hero />
        <About />
        <Dev />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default Home;
