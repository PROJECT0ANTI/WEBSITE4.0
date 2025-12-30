import React, { useState } from "react";
import "./services.css";

const categories = {
  "Web Design": {
    title: "Web Design",
    description:
      "We design high-impact, conversion-focused digital experiences that balance aesthetics with usability.",
    features: [
      "Responsive Design",
      "User Experience Design",
      "Brand Identity",
      "Prototyping",
    ],
  },
  "Web Development": {
    title: "Web Development",
    description:
      "Robust, scalable, and performance-driven web applications built with modern technology.",
    features: [
      "Frontend & Backend",
      "API Integration",
      "Performance Optimization",
      "Secure Architecture",
    ],
  },
  "Mobile Development": {
    title: "Mobile Development",
    description:
      "Cross-platform and native mobile apps engineered for speed, scale, and reliability.",
    features: [
      "iOS & Android",
      "Cross-Platform Apps",
      "UI/UX for Mobile",
      "App Store Deployment",
    ],
  },
  "AI & Cloud Solutions": {
    title: "AI & Cloud Solutions",
    description:
      "Intelligent automation and cloud-native systems built to scale with your business.",
    features: [
      "AI Automation & Agents",
      "Cloud Architecture",
      "ML Pipelines",
      "Scalable Infrastructure",
    ],
  },
};

export default function Service() {
  const [activeCategory, setActiveCategory] = useState("Web Design");

  return (
    <main className="services-root">
      {/* HERO */}
      <section className="services-hero">
        <h1 className="hero-title animate-fade-in-up">
          Our Comprehensive Digital Solutions
        </h1>
        <p className="hero-sub animate-fade-in">
          We build intelligent, scalable products that drive measurable business
          outcomes.
        </p>
      </section>

      {/* CATEGORIES */}
      <section className="categories-section">
        <h2 className="section-title">Categories of Services</h2>
        <p className="section-sub">
          Purpose-built capabilities designed for modern digital businesses.
        </p>

        <div className="categories-layout">
          {/* LEFT NAV */}
          <div className="categories-list">
            {Object.keys(categories).map((key) => (
              <button
                key={key}
                className={`category-btn ${
                  activeCategory === key ? "active" : ""
                }`}
                onClick={() => setActiveCategory(key)}
              >
                {key}
              </button>
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <div className="category-content glow-card">
            <h3>{categories[activeCategory].title}</h3>
            <p>{categories[activeCategory].description}</p>

            <div className="feature-grid">
              {categories[activeCategory].features.map((f, i) => (
                <div key={i} className="feature-item">
                  <span className="check">✓</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <button className="primary-btn">Get Started</button>
          </div>
        </div>
      </section>

      {/* DESIGN PROCESS */}
      <section className="process-section">
        <h2 className="section-title">Design Process</h2>
        <p className="section-sub">
          A proven, execution-first approach to delivering results.
        </p>

        <div className="process-grid">
          {[
            ["01", "Discovery & Research"],
            ["02", "Strategy & Planning"],
            ["03", "Design & Prototyping"],
            ["04", "Development & Testing"],
            ["05", "Launch & Optimization"],
            ["06", "Support & Growth"],
          ].map(([num, title]) => (
            <div key={num} className="process-card glow-card">
              <span className="process-num">{num}</span>
              <h4>{title}</h4>
              <p>
                Each phase is executed with precision and measurable outcomes.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="stories-section">
        <h2 className="section-title">Success Stories</h2>
        <p className="section-sub">
          Real results from real client partnerships.
        </p>

        <div className="stories-grid">
          <div className="story-card glow-card">
            <h4>300% Increase in Sales</h4>
            <p>
              Platform redesign and analytics strategy unlocked massive growth.
            </p>
            <div className="metrics">
              <span>300% Sales Growth</span>
              <span>250% User Growth</span>
            </div>
          </div>

          <div className="story-card glow-card">
            <h4>Launched in 6 Months</h4>
            <p>
              End-to-end product delivery completed ahead of schedule.
            </p>
            <div className="metrics">
              <span>40% Time Saved</span>
              <span>98% Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="portfolio-section">
        <h2 className="section-title">Web Design Portfolio</h2>
        <p className="section-sub">
          Selected projects showcasing quality and craftsmanship.
        </p>

        <div className="portfolio-grid">
          {["E-Commerce Platform", "SaaS Dashboard", "Mobile Banking App"].map(
            (p) => (
              <div key={p} className="portfolio-card glow-card">
                <h4>{p}</h4>
                <p>High-performance product built for scale.</p>
                <span className="link-text">View Project →</span>
              </div>
            )
          )}
        </div>
      </section>
    </main>
  );
}
