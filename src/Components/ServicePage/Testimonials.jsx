import React, { useState } from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      company: "TechCorp Solutions",
      author: "Sarah Johnson",
      position: "CTO",
      review:
        "Anti AI transformed our customer service with their intelligent chatbots. Implementation was seamless and ROI was immediate.",
      rating: 5,
      image: "🏢",
    },
    {
      id: 2,
      company: "Innovation Labs",
      author: "Raj Patel",
      position: "Founder",
      review:
        "Outstanding technical expertise and constant support. Their AI solutions exceeded our expectations by 40%.",
      rating: 5,
      image: "🚀",
    },
    {
      id: 3,
      company: "Digital Ventures",
      author: "Emma Chen",
      position: "Product Manager",
      review:
        "Fast turnaround, excellent quality, and very affordable pricing. Highly recommend Anti AI for any AI project.",
      rating: 5,
      image: "💼",
    },
    {
      id: 4,
      company: "CloudSync Inc",
      author: "Michael Brown",
      position: "Operations Lead",
      review:
        "Their cloud services have optimized our infrastructure costs by 35%. Professional team with great communication.",
      rating: 4,
      image: "☁️",
    },
    {
      id: 5,
      company: "Web Innovations",
      author: "Lisa Rodriguez",
      position: "CEO",
      review:
        "Best decision we made for our digital transformation. Anti AI team is responsive, skilled, and truly cares about results.",
      rating: 5,
      image: "💻",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section className="testimonials-wrapper">
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Our Clients Say</h2>
        <p className="testimonials-subtitle">
          Real feedback from companies we've worked with
        </p>

        <div className="testimonial-card-large">
          <div className="testimonial-avatar">{current.image}</div>

          <div className="testimonial-content">
            <div className="testimonial-stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < current.rating ? "star-filled" : "star-empty"}>
                  ★
                </span>
              ))}
            </div>

            <p className="testimonial-text">"{current.review}"</p>

            <div className="testimonial-author">
              <p className="author-name">{current.author}</p>
              <p className="author-info">
                {current.position} at {current.company}
              </p>
            </div>
          </div>

          <div className="testimonial-controls">
            <button className="testimonial-btn" onClick={prevTestimonial}>
              ←
            </button>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`dot ${index === currentIndex ? "active" : ""}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            <button className="testimonial-btn" onClick={nextTestimonial}>
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
