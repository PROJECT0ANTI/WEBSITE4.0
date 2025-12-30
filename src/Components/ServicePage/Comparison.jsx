import React from "react";
import "./Comparison.css";

const Comparison = () => {
  return (
    <section className="comparison-wrapper">
      <div className="comparison-container">
        <h2 className="comparison-title">Why Choose Anti AI?</h2>
        <p className="comparison-subtitle">
          We deliver superior quality, faster turnaround, and better pricing
        </p>

        <div className="comparison-grid">
          {/* Affordability */}
          <div className="comparison-card">
            <div className="comparison-icon">💰</div>
            <h3 className="comparison-card-title">30% More Affordable</h3>
            <p className="comparison-card-text">
              Competitive pricing without compromising on quality or features
            </p>
            <div className="comparison-badge">Industry Leading</div>
          </div>

          {/* Speed */}
          <div className="comparison-card featured">
            <div className="comparison-icon">⚡</div>
            <h3 className="comparison-card-title">2x Faster Delivery</h3>
            <p className="comparison-card-text">
              Agile methodology ensures quick turnaround without quality loss
            </p>
            <div className="comparison-badge">Average 2-4 weeks</div>
          </div>

          {/* Quality */}
          <div className="comparison-card">
            <div className="comparison-icon">⭐</div>
            <h3 className="comparison-card-title">Premium Quality</h3>
            <p className="comparison-card-text">
              Enterprise-grade solutions with rigorous testing and support
            </p>
            <div className="comparison-badge">99.9% Uptime</div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="comparison-table-wrapper">
          <h3 className="table-title">How We Compare</h3>
          <div className="comparison-table">
            <div className="table-row header">
              <div className="table-cell">Metric</div>
              <div className="table-cell highlight">Anti AI</div>
              <div className="table-cell">Industry Average</div>
            </div>

            <div className="table-row">
              <div className="table-cell">Turnaround Time</div>
              <div className="table-cell highlight">2-4 weeks</div>
              <div className="table-cell">6-8 weeks</div>
            </div>

            <div className="table-row">
              <div className="table-cell">Cost Efficiency</div>
              <div className="table-cell highlight">30% Lower</div>
              <div className="table-cell">Standard</div>
            </div>

            <div className="table-row">
              <div className="table-cell">Quality Assurance</div>
              <div className="table-cell highlight">99.9% Uptime</div>
              <div className="table-cell">99.5% Uptime</div>
            </div>

            <div className="table-row">
              <div className="table-cell">24/7 Support</div>
              <div className="table-cell highlight">✓ Included</div>
              <div className="table-cell">✗ Extra Cost</div>
            </div>

            <div className="table-row">
              <div className="table-cell">Custom Solutions</div>
              <div className="table-cell highlight">✓ Unlimited</div>
              <div className="table-cell">✗ Limited</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
