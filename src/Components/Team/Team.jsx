// import React from "react";
// import "./Team.css";
// import { motion } from "framer-motion";

// const TEAM = [
//   {
//     name: "Vishal Arya",
//     role: "Founder & CEO",
//     image: "",
//   },
//   {
//     name: "Priya Singh",
//     role: "CTO",
//     image: "",
//   },
//   {
//     name: "Arjun Patel",
//     role: "Head of Research",
//     image: "",
//   },
//   {
//     name: "Meera Sharma",
//     role: "Product Lead",
//     image: "",
//   },
//   {
//     name: "Rohit Kumar",
//     role: "Infrastructure Engineer",
//     image: "",
//   },
//   {
//     name: "Aisha Khan",
//     role: "Security Specialist",
//     image: "",
//   },
// ];

// /* Motion variants */
// const pageFade = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const introSlide = {
//   hidden: { y: 24, opacity: 0 },
//   visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const gridStagger = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.08,
//     },
//   },
// };

// const cardFade = {
//   hidden: { y: 18, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: { duration: 0.4, ease: "easeOut" },
//   },
// };

// export default function Team() {
//   return (
//     <motion.section
//       className="team-page"
//       variants={pageFade}
//       initial="hidden"
//       animate="visible"
//     >
//       {/* LEFT PANEL */}
//       <motion.aside
//         className="team-intro"
//         variants={introSlide}
//         initial="hidden"
//         animate="visible"
//       >
//         <h1>Meet our team</h1>
//         <p>
//           A focused group of engineers, researchers, and builders working at the
//           intersection of AI, security, and responsibility.
//         </p>

//         <div className="team-tags">
//           <span>Engineering</span>
//           <span>AI Research</span>
//           <span>Security</span>
//           <span>Leadership</span>
//         </div>
//       </motion.aside>

//       {/* RIGHT PANEL */}
//       <motion.div
//         className="team-grid"
//         variants={gridStagger}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         {TEAM.map((member) => (
//           <motion.div
//             key={member.name}
//             className="team-card"
//             variants={cardFade}
//           >
//             <div className="team-image">
//               {member.image ? (
//                 <img src={member.image} alt={member.name} />
//               ) : (
//                 <div className="image-placeholder" />
//               )}
//             </div>

//             <div className="team-meta">
//               <h3>{member.name}</h3>
//               <p>{member.role}</p>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </motion.section>
//   );
// }

import React from "react";
import "./Team.css";
import { motion } from "framer-motion";

/* DATA */
const TEAM = [
  { name: "Vishal Arya", role: "Founder & CEO" },
  { name: "Priya Singh", role: "CTO" },
  { name: "Arjun Patel", role: "Head of Research" },
  { name: "Meera Sharma", role: "Product Lead" },
  { name: "Rohit Kumar", role: "Infrastructure Engineer" },
  { name: "Aisha Khan", role: "Security Specialist" },
];

/* MAGNET HOOK */
function useMagnet(strength = 0.12) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const move = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };

    const reset = () => {
      el.style.transform = "translate(0,0)";
    };

    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", reset);

    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", reset);
    };
  }, [strength]);

  return ref;
}

/* MOTION */
const cardVariant = {
  hidden: (i) => ({
    opacity: 0,
    x: i % 2 === 0 ? -30 : 30,
    y: 30,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

/* CARD COMPONENT */
function TeamCard({ member, index }) {
  const magnetRef = useMagnet();

  return (
    <motion.div
      ref={magnetRef}
      className={`team-card ${index < 2 ? "team-card--featured" : ""}`}
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
    >
      <div className="team-image">
        <div className="image-placeholder" />
      </div>

      <div className="team-meta">
        <a href="/" className="team-name">
          {member.name}
        </a>
        <p>{member.role}</p>
      </div>
    </motion.div>
  );
}

/* PAGE */
export default function Team() {
  return (
    <section className="team-page">
      {/* INTRO */}
      <aside className="team-intro">
        <h1>Meet our team</h1>
        <p>
          A focused group of engineers, researchers, and builders working at the
          intersection of AI, security, and responsibility.
        </p>

        <div className="team-tags">
          <span>Engineering</span>
          <span>AI Research</span>
          <span>Security</span>
          <span>Leadership</span>
        </div>
      </aside>

      {/* GRID */}
      <div className="team-grid">
        {TEAM.map((member, i) => (
          <TeamCard key={member.name} member={member} index={i} />
        ))}
      </div>
    </section>
  );
}
