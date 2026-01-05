// import React, { useEffect, useRef } from "react";
// import NET from "vanta/dist/vanta.net.min";
// import Image from "../ImageSection/Image";
// import CardsPage from "../CardsSection/CardsPage"
// import Hero from "../HeroSection/Hero"
// import CustomFooter from "../FooterSection/Footer"
// import Contact from "../ContactSection/Contact"
// import { Footer } from "antd/es/layout/layout";

// // import Contact from "../ContactSection/Contact";
// import Container from "../ChatbotComponents/Container";

// const ThreeScene = () => {
//   const vantaRef = useRef(null);

//   useEffect(() => {
//     const vantaEffect = NET({
//       el: vantaRef.current,
//       mouseControls: true,
//       touchControls: true,
//       gyroControls: true,
//       minHeight: 200.0,
//       minWidth: 200.0,
//       scale: 1,
//       scaleMobile: 1.0,
//       color: 0xf5f5f5,
//       maxDistance: 24.0,
//       spacing: 18.0,
//       backgroundColor: 0x0,
//     });
//     return () => {
//       if (vantaEffect) vantaEffect.destroy();
//     };
//   }, []);

//   return (
//     <>
//       <div
//         style={{
//           position: "relative",
//           width: "100%",
//           height: "100vh",
//           overflow: "auto",
//           backgroundColor: "transparent",
//           /* Hide scrollbar for Chrome, Safari, and Opera */
//           "::-webkit-scrollbar": {
//             display: "none",
//           },
//           /* Hide scrollbar for IE, Edge, and Firefox */
//           "-ms-overflow-style": "none" /* IE and Edge */,
//           "scrollbar-width": "none" /* Firefox */,
//         }}
//       >
//         <div
//           ref={vantaRef}
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             zIndex: -1,
//           }}
//         />
//         <Hero />
//         {/* <CardsPage /> */}

//         <h1
//           style={{
//             fontSize: "30px",
//             textAlign: "center",
//             boxShadow:"2px 2px 2px black",
//             fontWeight: "600",

//             textTransform: "uppercase",
//             letterSpacing: "2px",
//             marginLeft:"12%",
          
           
//           }}
//         >
//           Our  Projects
//         </h1>

//         <Image />
//         {/* <CardsPage /> */}
//         <Contact />
     
//      <Container />

//         {/* <Contact /> */}

          

//       </div>
//     </>
//   );
// };

// export default ThreeScene;

// import React, { useEffect, useRef } from "react";
// import NET from "vanta/dist/vanta.net.min";

// import Hero from "../HeroSection/Hero";
// import Image from "../ImageSection/Image";
// import Contact from "../ContactSection/Contact";
// import Container from "../ChatbotComponents/Container";

// const ThreeScene = () => {
//   const vantaRef = useRef(null);
//   const effectRef = useRef(null);

//   useEffect(() => {
//     if (!effectRef.current) {
//       effectRef.current = NET({
//         el: vantaRef.current,
//         mouseControls: true,
//         touchControls: true,
//         gyroControls: true,
//         minHeight: 200,
//         minWidth: 200,
//         scale: 1,
//         scaleMobile: 1,
//         color: 0xf5f5f5,
//         backgroundColor: 0x000000,
//         maxDistance: 24,
//         spacing: 18,
//       });
//     }

//     return () => {
//       if (effectRef.current) {
//         effectRef.current.destroy();
//         effectRef.current = null;
//       }
//     };
//   }, []);

//   return (
//     <>
//       {/* VANTA BACKGROUND */}
//       <div
//         ref={vantaRef}
//         style={{
//           position: "fixed",
//           inset: 0,
//           zIndex: -1,
//         }}
//       />

//       {/* PAGE CONTENT */}
//       <section
//         style={{
//           position: "relative",
//           zIndex: 1,
//           paddingTop: "90px", // navbar clearance
//         }}
//       >
//         <Hero />

//         <h1
//           style={{
//             textAlign: "center",
//             margin: "80px 0 40px",
//             fontSize: "30px",
//             fontWeight: 600,
//             letterSpacing: "2px",
//             textTransform: "uppercase",
//           }}
//         >
//           Our Projects
//         </h1>

//         <Image />
//         <Contact />
//         <Container />
//       </section>
//     </>
//   );
// };

// export default ThreeScene;




import React, { useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";

import Hero from "../HeroSection/Hero";
import Image from "../ImageSection/Image";
import Contact from "../ContactSection/Contact";
import Container from "../ChatbotComponents/Container";

const ThreeScene = () => {
  const vantaRef = useRef(null);

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
      color: 0xf5f5f5,
      maxDistance: 24,
      spacing: 18,
      backgroundColor: 0x000000,
    });

    return () => effect && effect.destroy();
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
        <Contact />
        <Container />
      </main>
    </div>
  );
};

export default ThreeScene;
