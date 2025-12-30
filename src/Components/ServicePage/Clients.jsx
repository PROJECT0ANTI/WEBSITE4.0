import React from "react";
import "./Clients.css";

const Clients = () => {
  const clients = [
    { name: "TechCorp", logo: "🏢" },
    { name: "CloudSync", logo: "☁️" },
    { name: "Digital Labs", logo: "🔬" },
    { name: "Innovation Hub", logo: "💡" },
    { name: "Web Ventures", logo: "🌐" },
    { name: "Data Systems", logo: "📊" },
    { name: "AI Research", logo: "🤖" },
    { name: "Future Tech", logo: "🚀" },
  ];

  return (
    <section className="clients-wrapper">
      <div className="clients-container">
        <h2 className="clients-title">Trusted by Leading Companies</h2>
        <p className="clients-subtitle">
          We partner with innovative organizations to deliver cutting-edge AI solutions
        </p>

        <div className="clients-grid">
          {clients.map((client, index) => (
            <div key={index} className="client-card">
              <div className="client-logo">{client.logo}</div>
              <p className="client-name">{client.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
