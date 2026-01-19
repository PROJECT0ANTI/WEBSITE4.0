import React from "react";
import { useNavigate } from "react-router-dom";
import "./LegalPage.css";

const AppSupport = () => {
  const navigate = useNavigate();

  return (
    <section className="legal-page">
      <div className="legal-container">
        <h1 className="legal-title">App Support</h1>

        <div className="legal-section">
          <p>
            If you need help with the ANTI AI mobile application, we’re here to
            support you.
          </p>
        </div>

        <div className="legal-section">
          <ul>
            <li>Account or login issues</li>
            <li>App functionality questions</li>
            <li>Bug reports or unexpected behavior</li>
            <li>Data, privacy, or security-related concerns</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>How to contact us</h2>
          <p>
            Email:{" "}
            <a href="mailto:support@antiai.ltd">
              support@antiai.ltd
            </a>
          </p>
          <p className="legal-muted">
            We usually respond within 24–48 business hours.
          </p>
        </div>

        <div className="legal-section">
          <p className="legal-muted">
            For details on how we handle user data, please review our{" "}
            <a href="/privacy">Privacy Policy</a>.
          </p>
        </div>

        <div className="legal-close">
          <button onClick={() => navigate(-1)}>Close</button>
        </div>
      </div>
    </section>
  );
};

export default AppSupport;
