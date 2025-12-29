import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-wrapper" id="about">
      <div className="about-inner">

        <div className="about-text-column">
          <p className="about-kicker">ABOUT US</p>

          <h1 className="about-heading">
            We are building safe and smart
            <span className="about-heading-accent"> solutions against AGI.</span>
          </h1>

          <p className="about-body">
            Anti AI is an AI research and development company. Our mission is to
            ensure that the threat from artificial general intelligence are
            mitigated even before they arise.
          </p>

          <p className="about-body">
            We believe that humanity should benefit from AI, and we're
            developing our own first-in-class Anti AI software to ensure safe
            usage.
          </p>

          <p className="about-body">
            We are a small team of passionate people working together to make a
            dream come true, a dream of making AI safe and accessible for
            everyone. Our motto is
          </p>

          <p className="about-motto-hi">अन्ते सत्यं विजयते।</p>

          <p className="about-body">
            We are always looking for talented and stubborn individuals to join
            our team. If you are passionate about our goal enough and have a
            strong interest, you can visit our careers page.
          </p>
        </div>

        <div className="about-highlight-column">
          <div className="about-highlight-card">
            <p className="about-highlight-label">Our Focus</p>
            <p className="about-highlight-text">
              Protecting humanity from uncontrolled AI systems,
              while enabling responsible, high‑impact innovation
              for businesses and governments.
            </p>
            <div className="about-highlight-grid">
              <div className="about-highlight-chip">AI Safety</div>
              <div className="about-highlight-chip">Infra & Defence</div>
              <div className="about-highlight-chip">Enterprise Solutions</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
