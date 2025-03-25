"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import "./page.css"; // Importing CSS file

const JobList = () => {
  const router = useRouter();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch Jobs on Mount
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/api/jobs");
        if (!response.ok) throw new Error("Failed to fetch jobs");
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // ✅ Handle Delete Job
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this job?");
    if (!confirmDelete) return;
  
    try {
      const response = await fetch(`/api/jobs/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }, // Ensure correct headers
      });
  
      console.log("🔍 API Response Status:", response.status); // Log response status
      console.log("🔍 API Response Headers:", response.headers);
  
      if (!response.ok) {
        let errorMessage = `Error ${response.status}: Failed to delete job`;
  
        // Check if response has JSON content before parsing
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          errorMessage = errorData.error || errorMessage;
        } else {
          errorMessage = await response.text();
        }
  
        console.error("❌ API Error Message:", errorMessage);
        throw new Error(errorMessage);
      }
  
      // ✅ Remove job from UI after successful delete
      setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
      alert("✅ Job deleted successfully");
    } catch (error) {
      console.error("❌ Error deleting job:", error);
      alert(`❌ Failed to delete job: ${error.message}`);
    }
  };
  
  
  

  return (
    <div className="job-list-container">
      <h2 className="job-list-title">🚀 Job Listings</h2>

      {loading ? (
        <p className="loading-message">Loading...</p>
      ) : jobs.length === 0 ? (
        <p className="no-jobs">No jobs available</p>
      ) : (
        <div className="job-cards">
          {jobs.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-details">
                <h2 >{job.jobTitle}</h2>
                <p>Company:{job.companyName}</p>
                <p>Location: {job.jobLocation}</p>
                <p>Employment Type: {job.employmentType}</p>
                <p>Salary:{job.salaryRange || "Not Disclosed"}</p>
                <p>Experience: {job.experience} years</p>
              </div>
              <div className="job-actions">
                <button className="edit-btn" onClick={() => router.push(`/Form/${job.id}`)} style={{width:"60px"}}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(job.id)}  style={{width:"60px"}}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobList;
