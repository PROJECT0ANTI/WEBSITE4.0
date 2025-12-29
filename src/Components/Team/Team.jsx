import React from "react";
import "./Team.css";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Vishal Arya",
      title: "Founder & CEO",
      role: "Building safe AI systems",
      image: "👨‍💼",
      twitter: "@vishal_arya",
    },
    {
      id: 2,
      name: "Priya Singh",
      title: "CTO",
      role: "Leading technical innovation",
      image: "👩‍💻",
      twitter: "@priya_singh",
    },
    {
      id: 3,
      name: "Arjun Patel",
      title: "Head of Research",
      role: "AI safety research focus",
      image: "👨‍🔬",
      twitter: "@arjun_patel",
    },
    {
      id: 4,
      name: "Meera Sharma",
      title: "Product Lead",
      role: "Designing the future",
      image: "👩‍🚀",
      twitter: "@meera_sharma",
    },
    {
      id: 5,
      name: "Rohit Kumar",
      title: "Infrastructure Engineer",
      role: "Scaling our platform",
      image: "👨",
      twitter: "@rohit_kumar",
    },
    {
      id: 6,
      name: "Aisha Khan",
      title: "Security Specialist",
      role: "Protecting user privacy",
      image: "👩",
      twitter: "@aisha_khan",
    },
  ];

  return (
    <section className="team-wrapper">
      <div className="team-container">
        {/* Team header section */}
        <div className="team-header">
          <h1 className="team-heading">Meet the Team</h1>
          <p className="team-description">
            Passionate individuals united in our mission to make AI safe,
            accessible, and beneficial for all.
          </p>
        </div>

        {/* Leadership section */}
        <div className="team-section">
          <h2 className="section-title">Leadership</h2>
          <div className="team-grid-3">
            {teamMembers.slice(0, 3).map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* Team members section */}
        <div className="team-section">
          <h2 className="section-title">Core Team</h2>
          <div className="team-grid">
            {teamMembers.slice(3).map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamCard = ({ member }) => {
  return (
    <div className="team-card">
      <div className="team-card-image">{member.image}</div>
      <div className="team-card-content">
        <h3 className="team-card-name">{member.name}</h3>
        <p className="team-card-title">{member.title}</p>
        <p className="team-card-role">{member.role}</p>
        <a href={`https://twitter.com/search?q=${member.twitter}`} className="team-card-social">
          {member.twitter}
        </a>
      </div>
    </div>
  );
};

export default Team;
