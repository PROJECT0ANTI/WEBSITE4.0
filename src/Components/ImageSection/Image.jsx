import React, { useEffect } from "react";
import "./Image.css";

const ImageComponent = ({
  imageUrl,
  description,
  title,
  reverse,
  keywords = [],
  platformLinks = {},
  learnMoreLink,
}) => {
  return (
    <div className={`image-container ${reverse ? "reverse" : ""}`}>
      <div className="image-wrapper">
        <img src={imageUrl} alt={title} />
      </div>

      <div className="description-wrapper">
        <h1 className="card-logo">{title}</h1>

        <p>{description}</p>

        <div className="keywords">
          {keywords.map((keyword, index) => {
            const isLinked =
              keyword === "Android" || keyword === "iOS";

            return (
              <span key={index} className="keyword-item">
                {isLinked ? (
                  <a
                    href={platformLinks[keyword] || ""}
                    onClick={(e) => e.preventDefault()}
                  >
                    {keyword}
                  </a>
                ) : (
                  <span>{keyword}</span>
                )}
              </span>
            );
          })}
        </div>

        <a href={learnMoreLink} className="learn-more-btn">
          Learn More
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectData = [
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2024/01/25/00/25/ai-8530787_1280.jpg",
      title: "ANTI-0 Mobile Application",
      description:
        "A privacy-first mobile application designed to detect AI-generated, manipulated, and synthetic media. Built for real-world use with fast on-device intelligence and optional verification.",
      keywords: [
        "Deepfake Detection",
        "On-device AI",
        "Privacy First",
        "Real-time Analysis",
        "Android",
        "iOS",
      ],
      platformLinks: {
        Android: "",
        iOS: "",
      },
      reverse: true,
      learnMoreLink: "/products/anti-0",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/08/06/22/48/artificial-intelligence-4389372_1280.jpg",
      title: "ANTI-AI Enterprise Solution",
      description:
        "An enterprise-grade security platform built to predict threats, enforce governed AI decisions, and protect modern cloud infrastructure before attacks occur.",
      keywords: [
        "Predictive Security",
        "Threat Forecasting",
        "Governed AI",
        "Human-in-the-loop",
        "Enterprise Scale",
      ],
      platformLinks: {},
      reverse: false,
      learnMoreLink: "/products/enterprise",
    },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(".image-container");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imageWrapper =
              entry.target.querySelector(".image-wrapper img");
            const descriptionWrapper =
              entry.target.querySelector(".description-wrapper");

            if (entry.target.classList.contains("reverse")) {
              imageWrapper.classList.add("fade-in-right");
              descriptionWrapper.classList.add("fade-in-left");
            } else {
              imageWrapper.classList.add("fade-in-left");
              descriptionWrapper.classList.add("fade-in-right");
            }

            entry.target.style.opacity = 1;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="projects">
      {projectData.map((project, index) => (
        <ImageComponent
          key={index}
          imageUrl={project.imageUrl}
          title={project.title}
          description={project.description}
          keywords={project.keywords}
          platformLinks={project.platformLinks}
          reverse={project.reverse}
          learnMoreLink={project.learnMoreLink}
        />
      ))}
    </div>
  );
};

export default Projects;
