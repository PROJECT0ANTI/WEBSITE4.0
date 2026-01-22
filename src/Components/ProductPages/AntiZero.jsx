import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductPages.css";

const AntiZero = () => {
  const navigate = useNavigate();

  return (
    <section className="product-page">
      <h1>ANTI-0 Mobile Application</h1>
      <p className="product-subtitle">
        Privacy-first mobile intelligence against AI-generated manipulation
      </p>

      <section>
        <h2>What ANTI.0 Is</h2>
        <p>
          ANTI.0 is a consumer-focused mobile application designed to help
          individuals detect AI-generated, manipulated, and synthetic media
          before it impacts trust, reputation, or decision-making.
        </p>
        <p>
          As generative AI becomes more accessible, the ability to fabricate
          videos, voices, and images is no longer limited to experts. ANTI.0
          exists to give everyday users visibility and control in a landscape
          where authenticity is increasingly difficult to verify.
        </p>
      </section>

      <section>
        <h2>Core Capabilities</h2>
        <ul>
          <li>1. Detection of deepfake and AI-generated video content</li>
          <li>2. Analysis of manipulated and synthetic media</li>
          <li>3. On-device inference for privacy-preserving detection</li>
          <li>4. Optional verification workflows for higher-risk content</li>
        </ul>
      </section>

      <section>
        <h2>How It Works</h2>
        <p>
          ANTI.0 is designed with a hybrid intelligence model. Most detection
          runs directly on the user’s device to minimize data exposure. When
          additional confidence is required, optional verification layers can
          be used without compromising user privacy.
        </p>
        <p>
          The system is built to remain transparent — users are informed what
          is being analyzed and why, rather than relying on opaque, black-box
          decisions.
        </p>
      </section>

      <section>
        <h2>What It Will Become</h2>
        <p>
          ANTI.0 is being developed as a long-term trust utility, not just a
          detection tool. Planned evolutions include broader media formats,
          real-time analysis pipelines, and user-driven reporting mechanisms.
        </p>
        <p>
          The goal is to make media verification intuitive, fast, and accessible
          without forcing users to sacrifice control over their data.
        </p>
      </section>

      <button className="close-btn" onClick={() => navigate(-1)}>
        Close
      </button>
    </section>
  );
};

export default AntiZero;
