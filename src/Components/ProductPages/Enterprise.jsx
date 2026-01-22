import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductPages.css";

const Enterprise = () => {
  const navigate = useNavigate();

  return (
    <section className="product-page">
      <h1>ANTI-AI Shield</h1>
      <p className="product-subtitle">
        Predictive, governed AI security for modern infrastructure
      </p>

      <section>
        <h2>What the Platform Is</h2>
        <p>
          ANTI-AI Shield is a security and intelligence platform designed
          for organizations operating complex, cloud-native, and distributed
          systems. It focuses on anticipating threats rather than reacting
          after damage has already occurred.
        </p>
        <p>
          The platform combines predictive intelligence, policy synthesis, and
          governed automation to help security teams stay ahead without losing
          oversight.
        </p>
      </section>

      <section>
        <h2>Core Capabilities</h2>
        <ul>
          <li>1. Predictive threat and vulnerability forecasting</li>
          <li>2. Automated security policy generation</li>
          <li>3. Multi-agent decision orchestration with human control</li>
          <li>4. Enterprise-grade governance, logging, and auditability</li>
        </ul>
      </section>

      <section>
        <h2>Design Philosophy</h2>
        <p>
          ANTI-AI Shield is built on the belief that autonomy without
          accountability is dangerous. Every automated decision is traceable,
          explainable, and subject to human override.
        </p>
        <p>
          The system is designed to assist security teams — not replace them.
          AI handles scale and prediction; humans retain authority.
        </p>
      </section>

      <section>
        <h2>What It Will Become</h2>
        <p>
          The platform is evolving toward a fully predictive security layer
          capable of coordinating across infrastructure, endpoints, and cloud
          services in real time.
        </p>
        <p>
          Future development focuses on deeper forecasting accuracy, tighter
          governance controls, and seamless integration into enterprise
          security workflows.
        </p>
      </section>

      <button className="close-btn" onClick={() => navigate(-1)}>
        Close
      </button>
    </section>
  );
};

export default Enterprise;
