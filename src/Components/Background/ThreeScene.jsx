// import React, { useEffect, useRef } from "react";
// import NET from "vanta/dist/vanta.net.min";

// import Hero from "../HeroSection/Hero";
// import Image from "../ImageSection/Image";
// import Container from "../ChatbotComponents/Container";

// const ThreeScene = () => {
//   const vantaRef = useRef(null);

//   useEffect(() => {
//     const effect = NET({
//       el: vantaRef.current,

//       /* Controls */
//       mouseControls: true,
//       touchControls: true,
//       gyroControls: true,

//       /* Scene scale */
//       minHeight: 200,
//       minWidth: 200,
//       scale: 1,
//       scaleMobile: 1,

//       /* MATRIX COLOR */
//       color: 0x046307,
//       backgroundColor: 0x000000,

//       /* DEPTH & LAYERING */
//       maxDistance: 30,     // ↑ more depth separation
//       spacing: 16,         // ↓ denser network = layered feel

//       /* NODE BEHAVIOR */
//       points: 10.0,        // subtle node presence
//       showDots: true,

//       /* MOTION — keep calm */
//       speed: 1,          // slower = heavier system feel
//     });

//     return () => {
//       if (effect) effect.destroy();
//     };
//   }, []);

//   return (
//     <div style={{ position: "relative" }}>
//       {/* Vanta background */}
//       <div
//         ref={vantaRef}
//         style={{
//           position: "fixed",
//           inset: 0,
//           zIndex: 0,
//         }}
//       />

//       {/* Page content */}
//       <main style={{ position: "relative", zIndex: 1 }}>
//         <Hero />

//         <h1
//           style={{
//             fontSize: 30,
//             textAlign: "center",
//             fontWeight: 600,
//             textTransform: "uppercase",
//             letterSpacing: 2,
//             margin: "80px 0 40px",
//           }}
//         >
//           Our Projects
//         </h1>

//         <Image />
//         <Container />
//       </main>
//     </div>
//   );
// };

// export default ThreeScene;


import React, { useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";

import Hero from "../HeroSection/Hero";
import Image from "../ImageSection/Image";
import Container from "../ChatbotComponents/Container";

const ThreeScene = () => {
  const vantaRef = useRef(null);
  const footerDimRef = useRef(null);

  useEffect(() => {
    const effect = NET({
      el: vantaRef.current,

      mouseControls: true,
      touchControls: true,
      gyroControls: true,

      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: 1,

      color: 0x046307,
      backgroundColor: 0x000000,

      maxDistance: 30,
      spacing: 16,

      points: 10.0,
      showDots: true,

      speed: 1,
    });

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  /**
   * Footer dim logic
   * ----------------
   * When footer enters viewport:
   * - show dim overlay
   * - keeps Vanta visible but subdued
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (footerDimRef.current) {
          footerDimRef.current.style.opacity = entry.isIntersecting
            ? "1"
            : "0";
        }
      },
      {
        root: null,
        threshold: 0.15, // tweak if you want earlier/later dim
      }
    );

    const footer = document.querySelector(".footer-root");
    if (footer) observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {/* Vanta background */}
      <div
        ref={vantaRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
        }}
      />

      {/* Footer dim layer (ONLY affects footer area) */}
      <div
        ref={footerDimRef}
        style={{
          position: "fixed",
          inset: 0,
          background:
            "radial-gradient(circle at bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.85))",
          pointerEvents: "none",
          opacity: 0,
          transition: "opacity 0.6s ease",
          zIndex: 0.5, // sits above Vanta, below content
        }}
      />

      {/* Page content */}
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />

        <h1
          style={{
            fontSize: 30,
            textAlign: "center",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: 2,
            margin: "80px 0 40px",
          }}
        >
          Our Projects
        </h1>

        <Image />
        <Container />
      </main>
    </div>
  );
};

export default ThreeScene;
