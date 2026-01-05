import React, { useState } from "react";
import "./Career.css";

export default function Career() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact_no: "",
    current_location: "",
    role: "",
    Resume: null,
  });

  const [fileName, setFileName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFormData((p) => ({ ...p, Resume: file }));
    setFileName(file.name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");

    const body = new FormData();
    Object.entries(formData).forEach(([k, v]) => v && body.append(k, v));

    try {
      const res = await fetch(
        "https://aws.antiai.ltd/api/applyJobProfile",
        {
          method: "POST",
          body,
        }
      );

      if (!res.ok) throw new Error("Submit failed");

      setMessage("Application submitted successfully. Our team will reach out.");
      setFormData({
        name: "",
        email: "",
        contact_no: "",
        current_location: "",
        role: "",
        Resume: null,
      });
      setFileName("");
    } catch (err) {
      setMessage("Submission failed. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="career-page">
      {/* HERO */}
      <section className="career-hero">
        <h1>Careers at ANTI AI</h1>
        <p>
          Join a team working at the intersection of artificial intelligence,
          security, and responsibility.
        </p>
      </section>

      {/* CONTENT */}
      <section className="career-content">
        <div className="career-info">
          <h2>Why work with us?</h2>
          <ul>
            <li>Work on real AI safety and detection problems</li>
            <li>Freedom to explore ideas beyond rigid tech stacks</li>
            <li>Strong engineering and research culture</li>
            <li>Remote-friendly, outcome-driven environment</li>
            <li>Ownership, accountability, and impact</li>
          </ul>
        </div>

        {/* FORM */}
        <div className="career-form-card">
          <h3>Apply for a position</h3>

          <form onSubmit={handleSubmit} className="career-form">
            <input
              name="name"
              placeholder="Full name"
              required
              onChange={handleChange}
              value={formData.name}
            />

            <input
              name="email"
              type="email"
              placeholder="Email address"
              required
              onChange={handleChange}
              value={formData.email}
            />

            <input
              name="contact_no"
              placeholder="Mobile number"
              required
              onChange={handleChange}
              value={formData.contact_no}
            />

            <input
              name="current_location"
              placeholder="Current location"
              required
              onChange={handleChange}
              value={formData.current_location}
            />

            <input
              name="role"
              placeholder="Desired role"
              required
              onChange={handleChange}
              value={formData.role}
            />

            <label className="file-upload">
              <span>{fileName || "Upload resume (PDF, DOC, DOCX)"}</span>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                required
                onChange={handleFile}
              />
            </label>

            <button type="submit" disabled={submitting}>
              {submitting ? "Submitting…" : "Submit application"}
            </button>

            {message && <p className="form-message">{message}</p>}
          </form>
        </div>
      </section>
    </main>
  );
}
