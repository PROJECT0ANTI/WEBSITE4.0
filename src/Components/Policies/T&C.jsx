import React from "react";
import { useNavigate } from "react-router-dom";
import "./LegalPage.css";

const TnC = () => {
  const navigate = useNavigate();

  return (
    <section className="legal-page">
      <div className="legal-container">
        <h1 className="legal-title">Terms & Conditions</h1>

        <div className="legal-section">
          <p>
            These Terms & Conditions govern your access to and use of the Anti AI
            website, products, services, and related communications. By using
            this website, you agree to comply with these terms.
          </p>
        </div>

        <div className="legal-section">
          <h2>Purpose of the Website</h2>
          <p>
            The Anti AI website provides information about our services,
            research, and initiatives related to artificial intelligence and
            ethical technology. Content is for informational purposes only.
          </p>
        </div>

        <div className="legal-section">
          <h2>Acceptable Use</h2>
          <p>
            You agree to use this website only for lawful purposes and not to
            misuse the platform, attempt unauthorized access, disrupt services,
            or submit false information.
          </p>
        </div>

        <div className="legal-section">
          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, branding,
            layouts, and code, is the property of Anti AI unless stated
            otherwise. Unauthorized use is prohibited.
          </p>
        </div>

        <div className="legal-section">
          <h2>User Submissions</h2>
          <p>
            Any information submitted through contact forms must be accurate and
            lawful. Submission does not create any contractual or employment
            relationship unless formally agreed in writing.
          </p>
        </div>

        <div className="legal-section">
          <h2>Limitation of Liability</h2>
          <p>
            Anti AI shall not be liable for any direct, indirect, incidental, or
            consequential damages arising from your use of this website.
          </p>
        </div>

        <div className="legal-section">
          <h2>Governing Law</h2>
          <p>
            These Terms & Conditions shall be governed by and interpreted in
            accordance with the laws of India.
          </p>
        </div>

        <div className="legal-close">
          <button onClick={() => navigate(-1)}>Close</button>
        </div>
      </div>
    </section>
  );
};

export default TnC;
