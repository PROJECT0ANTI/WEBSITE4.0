import React from "react";
import { useNavigate } from "react-router-dom";
import "./LegalPage.css";

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <section className="legal-page">
      <div className="legal-container">
        <h1 className="legal-title">Privacy Policy</h1>

        <div className="legal-section">
          <p>
            Anti AI ("we", "our", "us") respects your privacy and is committed to
            protecting the personal information you share with us. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website or interact with our
            services.
          </p>
        </div>

        <div className="legal-section">
          <h2>Information We Collect</h2>
          <p>
            We may collect personal information you voluntarily provide, such as
            your name, email address, phone number, and messages submitted
            through our contact forms. We may also collect technical information
            including IP address, browser type, device information, operating
            system, and usage data.
          </p>
        </div>

        <div className="legal-section">
          <h2>How We Use Your Information</h2>
          <p>
            Information collected is used to respond to inquiries, provide
            services, improve our website, enhance user experience, maintain
            security, and comply with legal obligations.
          </p>
        </div>

        <div className="legal-section">
          <h2>Data Protection & Security</h2>
          <p>
            We implement reasonable technical and organizational safeguards to
            protect your personal data. However, no method of transmission over
            the internet is completely secure.
          </p>
        </div>

        <div className="legal-section">
          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to third-party services. We are not
            responsible for their privacy practices and encourage you to review
            their policies.
          </p>
        </div>

        <div className="legal-section">
          <h2>Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have rights to access,
            correct, or request deletion of your personal data. Please contact
            us through the website to exercise these rights.
          </p>
        </div>

        <div className="legal-section">
          <h2>Changes to This Policy</h2>
          <p>
            We reserve the right to update this Privacy Policy at any time.
            Continued use of the website indicates acceptance of the updated
            policy.
          </p>
        </div>

        <div className="legal-close">
          <button onClick={() => navigate(-1)}>Close</button>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
