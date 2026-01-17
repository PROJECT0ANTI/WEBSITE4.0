import React from "react";
import { useNavigate } from "react-router-dom";
import "./LegalPage.css";

const LegalPage = ({ title, children }) => {
  const navigate = useNavigate();

  return (
    <section className="legal-page">
      <div className="legal-container">
        <header className="legal-header">
          <h1>{title}</h1>

          <button
            className="legal-close"
            onClick={() => navigate(-1)}
          >
            Close
          </button>
        </header>

        <div className="legal-content">
          {children}
        </div>
      </div>
    </section>
  );
};

export default LegalPage;
