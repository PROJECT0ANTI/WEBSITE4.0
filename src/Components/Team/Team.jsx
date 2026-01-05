// import React from "react";
// import "./Team.css";
// import { motion } from "framer-motion";


// const TEAM = [
//   {
//     name: "Vishal Arya",
//     role: "Founder & CEO",
//     image: "", // add later
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

// export default function Team() {
//   return (
//     <section className="team-page">
//       {/* LEFT PANEL */}
//       <aside className="team-intro">
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
//       </aside>

//       {/* RIGHT PANEL */}
//       <div className="team-grid">
//         {TEAM.map((member) => (
//           <div key={member.name} className="team-card">
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
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import React from "react";
import "./Team.css";
import { motion } from "framer-motion";

const TEAM = [
  {
    name: "Vishal Arya",
    role: "Founder & CEO",
    image: "",
  },
  {
    name: "Priya Singh",
    role: "CTO",
    image: "",
  },
  {
    name: "Arjun Patel",
    role: "Head of Research",
    image: "",
  },
  {
    name: "Meera Sharma",
    role: "Product Lead",
    image: "",
  },
  {
    name: "Rohit Kumar",
    role: "Infrastructure Engineer",
    image: "",
  },
  {
    name: "Aisha Khan",
    role: "Security Specialist",
    image: "",
  },
];

/* Motion variants */
const pageFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const introSlide = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const gridStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardFade = {
  hidden: { y: 18, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Team() {
  return (
    <motion.section
      className="team-page"
      variants={pageFade}
      initial="hidden"
      animate="visible"
    >
      {/* LEFT PANEL */}
      <motion.aside
        className="team-intro"
        variants={introSlide}
        initial="hidden"
        animate="visible"
      >
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
      </motion.aside>

      {/* RIGHT PANEL */}
      <motion.div
        className="team-grid"
        variants={gridStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {TEAM.map((member) => (
          <motion.div
            key={member.name}
            className="team-card"
            variants={cardFade}
          >
            <div className="team-image">
              {member.image ? (
                <img src={member.image} alt={member.name} />
              ) : (
                <div className="image-placeholder" />
              )}
            </div>

            <div className="team-meta">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
