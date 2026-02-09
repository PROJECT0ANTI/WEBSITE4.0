// import React, { useState } from "react";
// import "./Contact.css";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     company: "",
//     message: "",
//     email: "",
//     phone: "",
//     agreed: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted:", formData);
//   };

//   return (
//     <section className="contact-page">
//       {/* Background logo */}
//       <div className="contact-bg-logo" />

//       {/* Ambient glow */}
//       <div className="contact-glow top" />
//       <div className="contact-glow bottom" />

//       <div className="contact-container">
//         {/* LEFT SIDEBAR */}
//         <aside className="contact-sidebar">
//           <div>
//             <p className="sidebar-label">CONTACT</p>

//             <div className="sidebar-block">
//               <span>Ph.1</span>
//               <a href="tel:+919116665513">+91-9116665513</a>
//             </div>

//             <div className="sidebar-block">
//               <span>Ph.2</span>
//               <a href="tel:+919358894622">+91-9358894622</a>
//             </div>

//             <div className="sidebar-block">
//               <span>Em.1</span>
//               <p>
//                 Business Ideas<br />
//                 <a href="mailto:hello@antiai.ltd">hello@antiai.ltd</a>
//               </p>
//             </div>

//             <div className="sidebar-block">
//               <span>Em.2</span>
//               <p>
//                 Press & Media<br />
//                 <a href="mailto:support@antiai.ltd">support@antiai.ltd</a>
//               </p>
//             </div>

//             <div className="sidebar-block">
//               <span>Em.3</span>
//               <p>
//                 Human Resource<br />
//                 <a href="mailto:hr@antiai.ltd">hr@antiai.ltd</a>
//               </p>
//             </div>
//           </div>


//           <div>
//             <p className="sidebar-label">SOCIAL</p>
// <ul className="social-list">
//   <li data-index="01">
//     <a href="/" aria-label="Instagram">Instagram</a>
//   </li>
//   <li data-index="02">
//     <a href="/" aria-label="X">X</a>
//   </li>
//   <li data-index="03">
//     <a href="/" aria-label="YouTube">YouTube</a>
//   </li>
//   <li data-index="04">
//     <a href="/" aria-label="LinkedIn">LinkedIn</a>
//   </li>
// </ul>


//           </div>
//         </aside>

//         {/* FORM */}
//         <div className="contact-form-wrapper">
//           <div className="contact-card">
//             <form onSubmit={handleSubmit}>
//               <div className="form-row">
//                 <h1>
//                   Hello Team <span>ANTI-AI</span>,<br />
//                   my name is
//                 </h1>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="TYPE YOUR NAME"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="form-row">
//                 <h2>and I <span>work</span> in</h2>
//                 <input
//                   type="text"
//                   name="company"
//                   placeholder="TYPE YOUR COMPANY"
//                   value={formData.company}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="form-row">
//                 <h2><span>Also,</span> here’s my brief</h2>
//                 <textarea
//                   name="message"
//                   placeholder="TYPE YOUR MESSAGE"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={3}
//                 />
//               </div>

//               <div className="form-row">
//                 <h2>
//                   You can reach me by <span>email</span> at
//                 </h2>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="TYPE YOUR EMAIL ADDRESS"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="form-row">
//                 <h3>or <span>phone</span> at</h3>
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="TYPE YOUR PHONE NUMBER"
//                   value={formData.phone}
//                   onChange={handleChange}
//                 />
//               </div>

// <div className="form-footer">
//   <label className="privacy">
//     <input
//       type="checkbox"
//       name="agreed"
//       checked={formData.agreed}
//       onChange={handleChange}
//     />
//     <span>
//       I agree to the{" "}
//       <a href="/privacy">Privacy Policy</a> and{" "}
//       <a href="/terms">T&amp;C</a>
//     </span>
//   </label>

//   <div className="send-wrapper">
//     <button type="submit" className="send-btn">
//       ( Send )
//     </button>
//   </div>
// </div>

//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import React, { useState } from "react";
import "./Contact.css";
import { supabase } from "../../lib/supabase";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    message: "",
    email: "",
    phone: "",
    agreed: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!formData.agreed) {
      setStatus("Please agree to the Privacy Policy and T&C.");
      return;
    }

    setSubmitting(true);

    try {
      const { error } = await supabase.from("contact_us").insert([
        {
          full_name: formData.name,
          company: formData.company,
          message: formData.message,
          email: formData.email,
          phone: formData.phone,
        },
      ]);

      if (error) throw error;

      setStatus("Message sent successfully. We’ll get back to you soon.");

      setFormData({
        name: "",
        company: "",
        message: "",
        email: "",
        phone: "",
        agreed: false,
      });
    } catch (err) {
      console.error("Contact submit error:", err);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact-page">
      {/* Background logo */}
      <div className="contact-bg-logo" />

      {/* Ambient glow */}
      <div className="contact-glow top" />
      <div className="contact-glow bottom" />

      <div className="contact-container">
        {/* LEFT SIDEBAR */}
        <aside className="contact-sidebar">
          <div>
            <p className="sidebar-label">CONTACT</p>

            <div className="sidebar-block">
              <span>Ph.1</span>
              <a href="tel:+919116665513">+91-9116665513</a>
            </div>

            <div className="sidebar-block">
              <span>Ph.2</span>
              <a href="tel:+919358894622">+91-9358894622</a>
            </div>

            <div className="sidebar-block">
              <span>Em.1</span>
              <p>
                Business Ideas<br />
                <a href="mailto:hello@antiai.ltd">hello@antiai.ltd</a>
              </p>
            </div>

            <div className="sidebar-block">
              <span>Em.2</span>
              <p>
                Press & Media<br />
                <a href="mailto:support@antiai.ltd">support@antiai.ltd</a>
              </p>
            </div>

            <div className="sidebar-block">
              <span>Em.3</span>
              <p>
                Human Resource<br />
                <a href="mailto:hr@antiai.ltd">antiai.hr@gmail.com</a>
              </p>
            </div>
          </div>

          <div>
            <p className="sidebar-label">SOCIAL</p>
            <ul className="social-list">
              <li data-index="01"><a href="https://www.instagram.com/antiaishield?igsh=MTY2aGkxdjRiOWhvMA==">Instagram</a></li>
              <li data-index="02"><a href="https://youtube.com/@anti.ai_15?si=trudg-TXKz21JPv-">YouTube</a></li>
              <li data-index="03"><a href="https://www.linkedin.com/company/anti-ai/">LinkedIn</a></li>
              <li data-index="04"><a href="https://www.threads.com/@antiaishield?igshid=NTc4MTIwNjQ2YQ==">Threads</a></li>
            </ul>
          </div>
        </aside>

        {/* FORM */}
        <div className="contact-form-wrapper">
          <div className="contact-card">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <h1>
                  Hello Team <span>ANTI-AI</span>,<br />
                  my name is
                </h1>
                <input
                  type="text"
                  name="name"
                  placeholder="TYPE YOUR NAME"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <h2>and I <span>work</span> in</h2>
                <input
                  type="text"
                  name="company"
                  placeholder="TYPE YOUR COMPANY"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <h2><span>Also,</span> here’s my brief</h2>
                <textarea
                  name="message"
                  placeholder="TYPE YOUR MESSAGE"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  required
                />
              </div>

              <div className="form-row">
                <h2>You can reach me by <span>email</span> at</h2>
                <input
                  type="email"
                  name="email"
                  placeholder="TYPE YOUR EMAIL ADDRESS"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <h3>or <span>phone</span> at</h3>
                <input
                  type="tel"
                  name="phone"
                  placeholder="TYPE YOUR PHONE NUMBER"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-footer">
                <label className="privacy">
                  <input
                    type="checkbox"
                    name="agreed"
                    checked={formData.agreed}
                    onChange={handleChange}
                  />
                  <span>
                    I agree to the{" "}
                    <a href="/privacy">Privacy Policy</a> and{" "}
                    <a href="/terms">T&amp;C</a>
                  </span>
                </label>

                <div className="send-wrapper">
                  <button
                    type="submit"
                    className="send-btn"
                    disabled={submitting}
                  >
                    {submitting ? "( Sending… )" : "( Send )"}
                  </button>
                </div>
              </div>

              {status && <p className="form-status">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
