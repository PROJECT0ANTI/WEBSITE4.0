import React, { useState } from "react";
import "./services.css";

const categories = {
  "AI Product Development": {
    title: "AI Product Development",
    description:
      "We design and build AI-powered products with a strong focus on speed, clarity, and real-world impact,from MVP to production-ready systems.",
    features: [
      "AI-assisted rapid prototyping and MVP development",
      "Model selection, fine-tuning, and evaluation",
      "AI agents, automation, and decision systems",
      "Data pipeline design and validation",
      "End-to-end deployment and monitoring",
      "Iterative improvement driven by real usage data",
    ],
  },

  "Web Development": {
    title: "Web Development",
    description:
      "Scalable, secure, and performance-oriented web systems engineered to support real business growth, not just feature delivery.",
    features: [
      "Modern frontend and backend architectures",
      "API-first and service-oriented development",
      "Performance optimization and load handling",
      "Security-first design and best practices",
      "Maintainable codebases with clear ownership",
      "Production readiness with monitoring and logs",
    ],
  },

  "Mobile Development": {
    title: "Mobile Development",
    description:
      "High-quality mobile applications built for speed, reliability, and long-term scalability across platforms and devices.",
    features: [
      "Cross-platform and native mobile applications",
      "Optimized UI/UX for performance and retention",
      "Backend and API integration",
      "App store deployment and compliance",
      "Analytics-driven iteration and improvements",
      "Ongoing support and version upgrades",
    ],
  },

  "Cloud Infrastructure Development": {
    title: "Cloud Infrastructure Development",
    description:
      "Robust cloud foundations that enable scale, reliability, and cost control, designed to grow with your product and users.",
    features: [
      "Cloud architecture design and setup",
      "Scalable infrastructure for growing workloads",
      "CI/CD pipelines and deployment automation",
      "Monitoring, logging, and system observability",
      "Cost optimization and resource efficiency",
      "Security, access control, and compliance readiness",
    ],
  },
};

export default function Service() {
const categoryKeys = Object.keys(categories);
const [activeCategory, setActiveCategory] = useState(categoryKeys[0]);


  return (
    <main className="services-root">
<section className="services-hero">
  <h1 className="hero-title animate-fade-in-up">
    Where Strategy Meets Execution
  </h1>
  <p className="hero-sub animate-fade-in">
    From idea to production, we build digital products that scale, adapt,
    and deliver measurable outcomes.
  </p>
</section>

{/* ================= CATEGORIES ================= */}
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
    </div>
  </div>
</section>

      {/* ================= USP SECTION ================= */}
      <section className="usp-section">
        <div className="usp-inner">
          <h2 className="usp-title">Why teams choose ANTI.AI</h2>
          <p className="usp-sub">
            Our approach is built around speed, intelligence, and radical clarity
             without compromising quality.
          </p>

          <div className="usp-grid">
            <div className="usp-item">
              <div className="usp-item-inner">
                <div className="usp-front">
                  <h3>AI-Driven Development</h3>
                </div>
                <div className="usp-back">
                  <p>
                    We use AI internally across design, development, and testing
                    to accelerate delivery while maintaining precision.
                  </p>
                </div>
              </div>
            </div>

            <div className="usp-item">
              <div className="usp-item-inner">
                <div className="usp-front">
                  <h3>Faster Project Turnaround</h3>
                </div>
                <div className="usp-back">
                  <p>
                    Optimized workflows and parallel execution allow us to
                    deliver in significantly shorter timelines without cutting
                    corners.
                  </p>
                </div>
              </div>
            </div>

            <div className="usp-item">
              <div className="usp-item-inner">
                <div className="usp-front">
                  <h3>Best Pricing in the Market</h3>
                </div>
                <div className="usp-back">
                  <p>
                    Lean operations and AI-assisted execution let us offer
                    premium output at highly competitive pricing.
                  </p>
                </div>
              </div>
            </div>

            <div className="usp-item">
              <div className="usp-item-inner">
                <div className="usp-front">
                  <h3>Transparent Development</h3>
                </div>
                <div className="usp-back">
                  <p>
                    Clients have full visibility into progress, decisions, and
                    technical direction — no black boxes, ever.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* ================= DESIGN PROCESS ================= */}
<section className="process-section">
  <h2 className="section-title">Design Process</h2>
  <p className="section-sub">
    A proven, execution-first approach to delivering results.
  </p>

  <div className="process-grid">
    {[
      [
        "01",
        "Discovery & Research",
        "We begin by deeply understanding the business problem, users, data, and constraints to ensure we solve the right problem from day one.",
      ],
      [
        "02",
        "Strategy & Planning",
        "Clear technical and product strategy is defined, including architecture, timelines, milestones, and success metrics aligned with business goals.",
      ],
      [
        "03",
        "Design & Prototyping",
        "Rapid prototypes and system designs are created to validate ideas early, reduce risk, and ensure clarity before full-scale development.",
      ],
      [
        "04",
        "Development & Testing",
        "We build in iterative cycles with continuous testing, ensuring performance, security, and scalability are baked in from the start.",
      ],
      [
        "05",
        "Launch & Optimization",
        "Products are deployed with monitoring and analytics in place, followed by performance tuning and real-world optimizations.",
      ],
      [
        "06",
        "Support & Growth",
        "Post-launch, we provide ongoing support, improvements, and scaling strategies as the product and user base grow.",
      ],
    ].map(([num, title, desc]) => (
      <div key={num} className="process-card glow-card">
        <span className="process-num">{num}</span>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    ))}
  </div>
</section>

{/* ================= SUCCESS STORIES ================= */}
<section className="stories-section">
  <h2 className="section-title">Success Stories</h2>
  <p className="section-sub">
    Measurable outcomes delivered through focused execution.
  </p>

  <div className="stories-marquee">
    <div className="stories-track">
      {[
        {
          title: "AI-Driven Revenue Acceleration",
          desc:
            "Redesigned core platform architecture and introduced AI-assisted decision pipelines for a B2B SaaS company.",
          metrics: [
            "+312% Revenue Growth",
            "2.4× Conversion Rate",
            "−38% Customer Acquisition Cost",
          ],
        },
        {
          title: "Operational Scale Without Headcount Growth",
          desc:
            "Implemented intelligent automation across workflows for a logistics-focused enterprise.",
          metrics: [
            "4× Throughput Increase",
            "−52% Manual Ops Load",
            "99.2% System Uptime",
          ],
        },
        {
          title: "Security-First AI Product Launch",
          desc:
            "Built and deployed a secure AI platform with compliance-first architecture for an enterprise client.",
          metrics: [
            "0 Critical Vulnerabilities",
            "−41% Time-to-Market",
            "SOC-2 Ready at Launch",
          ],
        },
        {
          title: "Faster Go-To-Market Execution",
          desc:
            "End-to-end product design and development delivered under aggressive timelines.",
          metrics: [
            "6-Month Launch Cycle",
            "−45% Development Time",
            "98% Stakeholder Satisfaction",
          ],
        },
        {
          title: "AI-Enhanced Customer Intelligence",
          desc:
            "Developed ML pipelines to surface real-time insights from high-volume customer data.",
          metrics: [
            "5× Insight Discovery Speed",
            "+180% Engagement Lift",
            "−33% Churn Rate",
          ],
        },
      ]
        /* duplicate for seamless infinite scroll */
        .concat([
          {
            title: "AI-Driven Revenue Acceleration",
            desc:
              "Redesigned core platform architecture and introduced AI-assisted decision pipelines for a B2B SaaS company.",
            metrics: [
              "+312% Revenue Growth",
              "2.4× Conversion Rate",
              "−38% Customer Acquisition Cost",
            ],
          },
          {
            title: "Operational Scale Without Headcount Growth",
            desc:
              "Implemented intelligent automation across workflows for a logistics-focused enterprise.",
            metrics: [
              "4× Throughput Increase",
              "−52% Manual Ops Load",
              "99.2% System Uptime",
            ],
          },
          {
            title: "Security-First AI Product Launch",
            desc:
              "Built and deployed a secure AI platform with compliance-first architecture for an enterprise client.",
            metrics: [
              "0 Critical Vulnerabilities",
              "−41% Time-to-Market",
              "SOC-2 Ready at Launch",
            ],
          },
          {
            title: "Faster Go-To-Market Execution",
            desc:
              "End-to-end product design and development delivered under aggressive timelines.",
            metrics: [
              "6-Month Launch Cycle",
              "−45% Development Time",
              "98% Stakeholder Satisfaction",
            ],
          },
          {
            title: "AI-Enhanced Customer Intelligence",
            desc:
              "Developed ML pipelines to surface real-time insights from high-volume customer data.",
            metrics: [
              "5× Insight Discovery Speed",
              "+180% Engagement Lift",
              "−33% Churn Rate",
            ],
          },
        ])
        .map((story, i) => (
          <div key={i} className="story-card glow-card">
            <h4>{story.title}</h4>
            <p>{story.desc}</p>
            <div className="metrics">
              {story.metrics.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </div>
        ))}
    </div>
  </div>
</section>

{/* ================= PORTFOLIO ================= */}
<section className="portfolio-section">
  <h2 className="section-title">Our Portfolio</h2>
  <p className="section-sub">
    Selected Internal projects showcasing quality, depth, and real-world impact.
  </p>

  <div className="portfolio-grid">
    <div className="portfolio-card glow-card">
      <h4>E-Commerce Platform</h4>
      <p>
        In-house CTF-based commerce system built with secure workflows,
        high-performance APIs, and real-time monitoring to handle scale
        without compromise.
      </p>
      <span className="link-text"></span>
    </div>

    <div className="portfolio-card glow-card">
      <h4>SaaS Dashboards</h4>
      <p>
        Internal sales intelligence and HR dashboards designed for visibility,
        decision-making, and operational clarity across teams.
      </p>
      <span className="link-text"></span>
    </div>

    <div className="portfolio-card glow-card">
      <h4>Deepfake Detection App</h4>
      <p>
        A mobile application leveraging AI models to detect manipulated media,
        built for accuracy, speed, and real-world usability.
      </p>
      <span className="link-text"></span>
    </div>
  </div>
</section>
    </main>
  );
}
