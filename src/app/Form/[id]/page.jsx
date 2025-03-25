"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation"; // ✅ Use useParams() for dynamic route params
import "./page.css";

const JobForm = () => {
  const router = useRouter();
  const params = useParams(); // ✅ Extract dynamic route params
  const jobId = params?.id; // ✅ Get job ID from URL
console.log(jobId,"k")
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    jobLocation: "",
    employmentType: "",
    salaryRange: "",
    experience: "",
  });
  const [loading, setLoading] = useState(!!jobId);
  const [message, setMessage] = useState("");

  // ✅ Fetch job details if editing (only if jobId exists)
  useEffect(() => {
    if (jobId) {
      fetch(`/api/jobs/${jobId}`)
        .then(async (res) => {
          if (!res.ok) throw new Error(`API error: ${res.status}`);
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
    <div className="form-container">
      <h2 className="form-title">{jobId ? "✏️ Edit Job" : "🚀 Post a Job"}</h2>
      {message && <p className="message">{message}</p>}

      <form onSubmit={handleSubmit} className="job-form">
        <div className="form-group">
          <label>Job Title</label>
          <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Company Name</label>
          <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Job Location</label>
          <input type="text" name="jobLocation" value={formData.jobLocation} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Employment Type</label>
          <select name="employmentType" value={formData.employmentType} onChange={handleChange} required>
            <option value="full-time">Full-Time</option>
            <option value="part-time">Part-Time</option>
            <option value="contract">Contract</option>
          </select>
        </div>

        <div className="form-group">
          <label>Salary Range</label>
          <input type="text" name="salaryRange" value={formData.salaryRange} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Experience Required</label>
          <input type="text" name="experience" value={formData.experience} onChange={handleChange} required />
        </div>

        <button type="submit" className="submit-btn">{jobId ? "Update Job" : "Submit Job"}</button>
      </form>
    </div>
  );
};

export default JobForm;
