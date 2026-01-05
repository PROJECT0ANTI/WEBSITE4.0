// import React, { useState, useEffect } from "react";
// import { Card, Button, Spin, Alert, Typography, Row, Col } from "antd";
// import { LoadingOutlined, StarOutlined, StarFilled } from "@ant-design/icons";
// import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";
// import "./JobListing.css";

// const JobListing = () => {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const response = await fetch("https://aws.antiai.ltd/api/fetchAllPosition")

//         ;
//         if (response.ok) {
//           const data = await response.json();
//           setJobs(data);
//         } else {
//           setError("Failed to fetch job positions");
//         }
//       } catch (error) {
//         setError("An error occurred while fetching job positions");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobs();
//   }, []);

//   const handleSaveJob = (jobId) => {
//     const savedJobs = Cookies.get("savedJobs")
//       ? JSON.parse(Cookies.get("savedJobs"))
//       : [];
//     if (savedJobs.includes(jobId)) {
//       const updatedJobs = savedJobs.filter((id) => id !== jobId);
//       Cookies.set("savedJobs", JSON.stringify(updatedJobs));
//     } else {
//       savedJobs.push(jobId);
//       Cookies.set("savedJobs", JSON.stringify(savedJobs));
//     }
//     setJobs((prevJobs) =>
//       prevJobs.map((job) =>
//         job.id === jobId ? { ...job, saved: !job.saved } : job
//       )
//     );
//   };

//   useEffect(() => {
//     const savedJobs = Cookies.get("savedJobs")
//       ? JSON.parse(Cookies.get("savedJobs"))
//       : [];
//     setJobs((prevJobs) =>
//       prevJobs.map((job) =>
//         savedJobs.includes(job.id) ? { ...job, saved: true } : job
//       )
//     );
//   }, []);

//   if (loading) {
//     return (
//       <div className="spin-container">
//         <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
//       </div>
//     );
//   }

//   if (error) {
//     return <Alert message="Error" description={error} type="error" showIcon />;
//   }

//   return (
//     <div className="job-listing-container">
//       <Typography.Title level={2}>Open Positions</Typography.Title>
//       <Row gutter={[16, 16]}>
//         {jobs.map((job) => (
//           <Col key={job.id} xs={24} sm={12} md={8} lg={8}>
//             <Card bordered={false} style={{ width: "100%" }}>
//               <div className="save-button" onClick={() => handleSaveJob(job.id)}>
//                 {job.saved ? <StarFilled /> : <StarOutlined />}
//                 <span>Save</span>
//               </div>
//               <div className="job-title">{job.role}</div>
//               <p className="job-location">
//                 <strong>Location:</strong> {job.location}
//               </p>
//               <p className="job-area">
//                 <strong>Business Area:</strong> {job.business_area}
//               </p>
//               <p className="job-date">
//                 <strong>Posted on:</strong>{" "}
//                 {new Date(job.created_at).toLocaleDateString()}
//               </p>
//               <button
//                 className="apply-button"
//                 onClick={() => navigate("/job", { state: { role: job.role } })}
//               >
//                 Apply
//               </button>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// };

// export default JobListing;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./JobListing.css";

const API_BASE = "https://aws.antiai.ltd/api";

export default function JobListing() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`${API_BASE}/fetchAllPosition`);
        if (!res.ok) throw new Error("API failed");

        const data = await res.json();
        setJobs(data);
        setError(false);
      } catch (err) {
        console.error("Job fetch failed:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div className="career-loading">
        <p>Loading open positions…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="career-error">
        <p>Unable to load job positions at the moment.</p>
        <p>Please try again later.</p>
      </div>
    );
  }

  return (
    <section className="career-section">
      <h1 className="career-title">Open Positions</h1>

      <div className="career-grid">
        {jobs.map((job) => (
          <div key={job.id} className="career-card">
            <h2 className="career-role">{job.role}</h2>

            <p>
              <strong>Location:</strong> {job.location}
            </p>
            <p>
              <strong>Business Area:</strong> {job.business_area}
            </p>
            <p>
              <strong>Posted on:</strong>{" "}
              {new Date(job.created_at).toLocaleDateString()}
            </p>

            <Link to={`/Job?role=${encodeURIComponent(job.role)}`}>
              <button className="career-apply-btn">Apply</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
