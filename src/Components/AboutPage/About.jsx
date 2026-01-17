import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      {/* HERO */}
      <section className="about-hero-wrap">
        <div className="about-hero-card">
          <p className="about-hero-kicker">ABOUT US</p>

          <h1 className="about-hero-title">
            We are building safe and smart
            <br />
            solutions against AGI.
          </h1>

          <p className="about-hero-desc">
            Anti AI is an AI research and development company focused on
            anticipating and mitigating risks posed by artificial general
            intelligence before they materialize.
          </p>
        </div>
      </section>

      {/* INTRO + FOCUS */}
      <section className="about-intro-wrap">
        <div className="about-intro-inner">
          {/* LEFT TEXT */}
          <div className="about-intro-text">
            <h2 className="about-intro-heading">
              Accountable AI, built for the long term
            </h2>

            <p>
              We believe AI should amplify human potential, not undermine it.
              Our work centers on building systems that remain accountable,
              governed, and aligned with real-world human values.
            </p>

            <p>
              We are a small, focused team working toward a long-term vision:
              making advanced AI safe, transparent, and accessible without
              compromising control.
            </p>

            <p className="about-intro-motto">अन्ते सत्यं विजयते।</p>

            <p>
              We are always looking for driven individuals who believe in this
              mission and want to build responsibly at the edge of technology.
            </p>
          </div>

          {/* RIGHT CARD */}
          <div className="about-focus-card">
            <p className="about-focus-label">OUR FOCUS</p>

            <p className="about-focus-text">
              Protecting humanity from uncontrolled AI systems while enabling
              responsible, high-impact innovation for enterprises and public
              institutions.
            </p>

            <div className="about-focus-chips">
              <span>AI Safety</span>
              <span>Infrastructure & Defence</span>
              <span>Enterprise Solutions</span>
            </div>
          </div>
        </div>
      </section>
            {/* GENESIS + FOOTPRINT */}
      <section className="about-genesis-wrap">
        <div className="about-genesis-inner">

          {/* LEFT: GENESIS */}
          <div className="about-genesis-text">
            <p className="about-genesis-kicker">OUR GENESIS</p>

            <h2 className="about-genesis-heading">
              From focused beginnings to global relevance
            </h2>

            <p>
              Anti AI was founded with a clear mission: to address the risks
              posed by rapidly advancing artificial intelligence before they
              evolve into systemic threats.
            </p>

            <p>
              What began as a research-driven initiative has grown into a
              platform-led effort spanning AI safety, enterprise security,
              and infrastructure resilience.
            </p>

            <p>
              Our work today sits at the intersection of advanced research,
              real-world deployment, and long-term governance.
            </p>
          </div>

          {/* RIGHT: FOOTPRINT CARD */}
          <div className="about-footprint-card">
            <p className="about-footprint-title">Our Footprint</p>

            <p className="about-footprint-text">
              Working across regions with partners, enterprises, and institutions
              focused on responsible AI adoption.
            </p>

            <div className="about-footprint-metric">
              <span className="metric-big">5,000+</span>
              <span className="metric-label">Professionals (Projected)</span>
            </div>

            <p className="about-footprint-sub">
              By 2027
            </p>
          </div>

        </div>
      </section>
      {/* ================= PRINCIPLES ================= */}
<section className="about-principles-wrap">
  <h2 className="about-principles-title">Our Principles</h2>

  <div className="about-principles-grid">
    <div className="about-principle-card">
      <h3>Human Control</h3>
      <p>
        AI systems must remain subordinate to human decision-making and
        oversight at all times. We design systems that respect authority,
        accountability, and intervention.
      </p>
    </div>

    <div className="about-principle-card">
      <h3>Predictive Thinking</h3>
      <p>
        We focus on anticipating risks early rather than reacting after
        damage occurs. Prevention, foresight, and long-term reasoning guide
        every system we build.
      </p>
    </div>

    <div className="about-principle-card">
      <h3>Responsible Scale</h3>
      <p>
        Innovation should scale with governance, transparency, and
        accountability built-in. Growth without control is not progress.
      </p>
    </div>
  </div>
</section>
{/* ================= OUR STRENGTH ================= */}
<section className="about-strength">
  <div className="about-strength-inner">
    <h2 className="about-strength-title">
      Our <span>Strength</span>
    </h2>

    <div className="about-strength-grid">
      <div className="strength-card">
        <h3>3K+</h3>
        <p>Certified Professionals</p>
      </div>

      <div className="strength-card">
        <h3>15+</h3>
        <p>Years of Excellence</p>
      </div>

      <div className="strength-card">
        <h3>50+</h3>
        <p>Fortune 500 Clients</p>
      </div>

      <div className="strength-card">
        <h3>12+</h3>
        <p>Global Locations</p>
      </div>
    </div>
  </div>
</section>

{/* ================= CTA ================= */}
<section className="about-cta">
  <div className="about-cta-inner">
    <h2>
      Ready to Transform Your <span>Enterprise?</span>
    </h2>

    <p>
      Join us on the journey to <span>digital excellence</span>.  
      Let’s create extraordinary solutions together.
    </p>

    <a href="/contact" className="about-cta-btn">
      Get Started →
    </a>
  </div>
</section>

    </>
  );
};

export default About;
