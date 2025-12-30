import React from "react";
import "./services.css";
import Testimonials from "./Testimonials";
import Clients from "./Clients";
import Comparison from "./Comparison";

const Service = () => {
  const services = [
    {
      title: "AI Services",
      description:
        "AI chatbots, voice assistants, and AI-powered automation to streamline your operations and improve efficiency in day-to-day business workflows.",
      icon: "🤖",
      route: "./AIservices",
    },
    {
      title: "Web Services",
      description:
        "End-to-end web development for robust, scalable, and user-friendly websites and web applications tailored to your specific business needs.",
      icon: "🌐",
      route: "./InteractiveDashboards",
    },
    {
      title: "App Development",
      description:
        "Design and development of modern, high-performance mobile apps with seamless user experiences across both iOS and Android platforms.",
      icon: "📱",
      route: "./AppDevelopment",
    },
    {
      title: "Cloud Services",
      description:
        "Cloud-native solutions to improve reliability, enhance performance, and enable secure, scalable growth for your organization worldwide.",
      icon: "☁️",
      route: "./CloudServices",
    },
  ];

  return (
    <>
      {/* SERVICES SECTION */}
      <section className="services-section" id="services">
        <h2>Our Services</h2>

        <div className="services-grid-alternating">
          {services.map((service, index) => (
            <ServiceCardAlt key={index} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <Testimonials />

      {/* COMPARISON SECTION */}
      <Comparison />

      {/* CLIENTS SECTION */}
      <Clients />
    </>
  );
};

const ServiceCardAlt = ({ service, index }) => {
  return (
    <div className={`service-card-alt ${index % 2 === 1 ? "reverse" : ""}`}>
      <div className="service-icon-alt">{service.icon}</div>

      <div className="service-content-alt">
        <h3 className="service-title-alt">{service.title}</h3>
        <p className="service-description-alt">{service.description}</p>

        <div className="service-footer-alt">
          <a href={service.route} className="service-btn-alt service-btn-primary">
            Read More
          </a>
          <a href="./checkout" className="service-btn-alt service-btn-secondary">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Service;
