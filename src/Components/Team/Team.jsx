import React from "react";
import "./Team.css";
import { motion } from "framer-motion";

/* DATA */
const TEAM = [
  {
    name: "Tanishq Sharma",
    role: "Founder & CEO",
    image: "/static/tanishq_sir.jpg",
    linkedin: "https://www.linkedin.com/in/tanishq-shr",
  },
  {
    name: "Divya Sharma",
    role: "Chief Manager",
    image: "/static/divya_maam.png",
    linkedin: "https://www.linkedin.com/in/divya-sharma-7297822aa",
  },
  {
    name: "Sharad Pandey",
    role: "Business Development Manager",
    image: "/static/sharad_pandey.png",
    linkedin: "/",
  },
  {
    name: "Arpit Dogra",
    role: "Chief Technical Officer",
    image: "/static/arpit_dogra.png",
    linkedin: "https://www.linkedin.com/in/arpit-dogra18",
  },
  {
    name: "Kunal Saxena",
    role: "Technical Lead",
    image: "/static/kunal_saxena.jpeg",
    linkedin: "https://www.linkedin.com/in/kunal-saxena-ks",
  },
  {
    name: "Vishal Purohit",
    role: "Head of Marketing",
    image: "/static/vishal_purohit.PNG",
    linkedin: "https://www.linkedin.com/in/vishal-purohit-35338b218",
  },
  {
    name: "Tanmay Saboo",
    role: "Chief of Staff",
    image: "/static/tanmay_saboo.jpeg",
    linkedin: "https://www.linkedin.com/in/tanmay-saboo",
  },
  {
    name: "Parth Mehta",
    role: "AI/ML Developer Engineer",
    image: "/static/parth_mehta.png",
    linkedin: "https://www.linkedin.com/in/parth-mehta-abc1999",
  },
  {
    name: "Shristi Shukla",
    role: "Senior Software Developer",
    image: "/static/shristi_shukla.png",
    linkedin: "/",
  },
  {
    name: "Sanjay Thakur",
    role: "Business Development Executive",
    image: "/static/sanjay.png",
    linkedin: "https://www.linkedin.com/in/sanjaysingh-thakur",
  },
  {
    name: "Shishpal Singh",
    role: "Business Development Executive",
    image: "/static/shispal.png",
    linkedin: "https://www.linkedin.com/in/shishpal-singh-a084b3109",
  },
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
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
        />
      </div>

      <div className="team-meta">
        <a
          href={member.linkedin}
          className="team-name"
          target="_blank"
          rel="noopener noreferrer"
        >
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
