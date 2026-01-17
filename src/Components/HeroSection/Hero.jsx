import React, { useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Hero.css";

const HeroSection = () => {
  const heroContentRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroContent = heroContentRef.current;
      const heroHeight = document.querySelector(".hero").offsetHeight;
      const scrollPosition = window.pageYOffset;

      if (scrollPosition > heroHeight) {
        heroContent.style.opacity = 1 - (scrollPosition - heroHeight) / 200;
      } else {
        heroContent.style.opacity = 1;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hero-container">
      <section className={`hero ${expanded ? "expanded" : ""}`}>
        <div className="overlay"></div>

        <div className="hero-content" ref={heroContentRef}>
          <div className="text-wrapper">
            <h1>We're ANTI AI,</h1>

            <h1 className="typewriter-wrapper">
              <Typewriter
                words={[
                  "An Innovation Powerhouse.",
                  "Driving the Future of AI.",
                  "Making AI Safe.",
                  "Protecting Humanity.",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </h1>

            <p className="hero-p">
              ANTI AI is a software company focused on responsible, 
              human-governed artificial intelligence. 
              We design systems that are powerful, auditable, 
              and aligned with real-world accountability.
            </p>

            {expanded && (
              <p className="hero-p expanded-text">
                We help organizations build, deploy, and scale artificial intelligence 
                without losing transparency, security, or human oversight. 
                From AI engineering and data systems to cybersecurity and governance, 
                our work ensures technology serves people, not the other way around.
              </p>
            )}

            <button
              className="apple-button"
              onClick={() => setExpanded((prev) => !prev)}
            >
              {expanded ? "See Less" : "See More"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
