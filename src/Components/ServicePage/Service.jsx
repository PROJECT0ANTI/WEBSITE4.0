import React from "react";
import "./services.css";

const Service = () => {
  return (
    <section className="services-section" id="services">
      <h2>Our Services</h2>

      <div className="services-grid">
        <ServiceCard
          title="AI Services"
          description="AI chatbots, voice assistants, and AI-powered automation to streamline your operations and improve efficiency in day-to-day business workflows."
          route="./AIservices"
        />

        <ServiceCard
          title="Web Services"
          description="End-to-end web development for robust, scalable, and user-friendly websites and web applications tailored to your specific business needs."
          route="./InteractiveDashboards"
        />

        <ServiceCard
          title="App Development"
          description="Design and development of modern, high-performance mobile apps with seamless user experiences across both iOS and Android platforms."
          route="./AppDevelopment"
        />

        <ServiceCard
          title="Cloud Services"
          description="Cloud-native solutions to improve reliability, enhance performance, and enable secure, scalable growth for your organization worldwide."
          route="./CloudServices"
        />
      </div>
    </section>
  );
};

const ServiceCard = ({ title, description, route }) => {
  return (
    <article className="service-card">
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>

      <div className="service-footer">
        <a href={route} className="service-btn service-btn--primary">
          Read More
        </a>
        <a href="./checkout" className="service-btn service-btn--secondary">
          Buy Now
        </a>
      </div>
    </article>
  );
};

export default Service;
