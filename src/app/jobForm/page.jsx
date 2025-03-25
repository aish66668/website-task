"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation"; 
import "./page.css";

const JobForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Store job ID in state to prevent hydration mismatch
  const [jobId, setJobId] = useState(null);
  
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    jobLocation: "",
    employmentType: "",
    salaryRange: "",
    experience: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ✅ Fetch jobId AFTER component has mounted (fix hydration issue)
  useEffect(() => {
    const id = searchParams?.get("id");
    setJobId(id); 
  }, [searchParams]);

  // ✅ Fetch job details if editing (only if jobId is available)
  useEffect(() => {
    if (jobId) {
      setLoading(true);
      fetch(`/api/jobs/${jobId}`)
        .then(async (res) => {
          if (!res.ok) {
            throw new Error(`API error: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          setFormData(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching job:", err);
          setMessage("⚠️ Error loading job details.");
          setLoading(false);
        });
    }
  }, [jobId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = jobId ? "PUT" : "POST"; 
    const endpoint = jobId ? `/api/jobs/${jobId}` : "/api/jobs";

    try {
      const response = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage(`🎉 Job ${jobId ? "updated" : "posted"} successfully!`);
        setTimeout(() => router.push("/jobList"), 2000);
      } else {
        setMessage("⚠️ Failed to process job.");
      }
    } catch (error) {
      console.error("Error submitting job:", error);
      setMessage("🚨 Error processing job.");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    // <div className="dashboard-page">
    <div className="form-container">
      <h2 className="form-title" style={{color:"#0056b3"}}>{jobId ? "✏️ Edit Job" : "🚀 Post a Job"}</h2>
      {message && <p className="message">{message}</p>}

      <form onSubmit={handleSubmit} className="job-form">
        <div className="form-group">
          <label>Job Title</label>
          <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required className="input-field"/>
        </div>

        <div className="form-group">
          <label>Company Name</label>
          <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required className="input-field"/>
        </div>

        <div className="form-group">
          <label>Job Location</label>
          <input type="text" name="jobLocation" value={formData.jobLocation} onChange={handleChange} required className="input-field"/>
        </div>

        <div className="form-group">
          <label>Employment Type</label>
          <select name="employmentType" value={formData.employmentType} onChange={handleChange} required className="input-field">
            <option value="full-time">Full-Time</option>
            <option value="part-time">Part-Time</option>
            <option value="contract">Contract</option>
          </select>
        </div>

        <div className="form-group">
          <label>Salary Range</label>
          <input type="text" name="salaryRange" value={formData.salaryRange} onChange={handleChange} className="input-field" />
        </div>

        <div className="form-group">
          <label>Experience Required</label>
          <input type="text" name="experience" value={formData.experience} onChange={handleChange} required className="input-field"/>
        </div>

        <button type="submit" className="submit-btn">{jobId ? "Update Job" : "Submit Job"}</button>
      </form>
    </div>
    // </div>
  );
};

export default JobForm;
