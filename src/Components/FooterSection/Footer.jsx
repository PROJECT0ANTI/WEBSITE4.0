import React from "react";
import "./Footer.css";

const Footer = () => {
  // ✅ JS must live here, NOT inside JSX
  const hindiText = "अन्ते सत्यं विजयते।";

  const segments = new Intl.Segmenter("hi", {
    granularity: "grapheme",
  }).segment(hindiText);

  return (
    <footer className="footer-root footer-grid-7">
      {/* Background Sanskrit */}
      <div className="footer-bg-text">
        {[...segments].map((segment, i) => (
          <span key={i} className="sanskrit-letter">
            {segment.segment}
          </span>
        ))}
      </div>

      {/* 1. Logo + CTA */}
      <div className="footer-col footer-left">
        <img
          src="/static/anti-ai-logo.png"
          alt="ANTI AI"
          className="footer-logo"
        />
        <p className="footer-cta">The Truth Prevails.</p>
      </div>

      {/* 2. Navigate */}
      <div className="footer-col">
        <h4>NAVIGATE</h4>
        <a href="/home">The Prologue</a>
        <a href="/services">Capabilities</a>
        <a href="/about">Our Story</a>
        <a href="/team">The Makers</a>
        <a href="/career">New Chapters</a>
        <a href="/contact">Collaborate?</a>
      </div>

      {/* 3. Follow Us */}
      <div className="footer-col">
        <h4>FOLLOW US</h4>
        <a href="https://www.instagram.com/antiai.ltd/" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href="https://x.com/" target="_blank" rel="noreferrer">
          X
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          YouTube
        </a>
        <a href="https://www.linkedin.com/company/anti-ai" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>

      {/* 4. Write to us */}
      <div className="footer-col">
        <h4>WRITE TO US</h4>
        <a href="mailto:hello@antiai.ltd">hello@antiai.ltd</a>
        <a href="mailto:support@antiai.ltd">support@antiai.ltd</a>
        <a href="mailto:hr@antiai.ltd">hr@antiai.ltd</a>
      </div>

      {/* 5. Call us at */}
      <div className="footer-col">
        <h4>CALL US AT</h4>
        <a href="tel:+919116665513">+91 91166 65513</a>
        <a href="tel:+919358894622">+91 93588 94622</a>
      </div>

      {/* 6. Legal */}
      <div className="footer-col footer-center">
        <h4>LEGAL</h4>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms & Conditions</a>
        <a href="/support">App Support</a>
        <a
          href="https://maps.app.goo.gl/yfi9vDLxQViZL8b88"
          target="_blank"
          rel="noreferrer"
          className="locate-link"
        >
          Locate us →
        </a>
      </div>

      {/* Bottom */}
      <div className="footer-bottom" />
    </footer>
  );
};

export default Footer;
