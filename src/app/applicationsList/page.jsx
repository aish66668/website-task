"use client";
import React, { useState, useEffect } from "react";
import "./page.css"; // Import styles

const ApplicationsList = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch("/api/applications") // Fetch stored applications
      .then((res) => res.json())
      .then((data) => setApplications(data))
      .catch((err) => console.error("Error fetching applications:", err));
  }, []);

  return (
    <div className="background-container">
         <h2 style={{textAlign:"center",marginTop:"25px",marginBottom:"25px"}}>📋 Submitted Applications</h2>
    <div className="applications-container">
     
      {applications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <div className="applications-grid">
          {applications.map((app, index) => (
            <div key={index} className="application-card">
              {/* <h3>Job ID: {app.jobId}</h3> */}
              <p><strong>Name:</strong> {app.name}</p>
              <p><strong>Email:</strong> {app.email}</p>
              <p><strong>Phone:</strong> {app.phone}</p>
              <p><strong>Experience:</strong> {app.experience} years</p>
              <p><strong>Skills:</strong> {app.skills}</p>
              <p><strong>Preferred Location:</strong> {app.preferredLocation}</p>
              <p><strong>Current CTC:</strong> {app.currentCTC} LPA</p>
              <p><strong>Expected CTC:</strong> {app.expectedCTC} LPA</p>
              <p><strong>Cover Letter:</strong> {app.coverLetter || "N/A"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default ApplicationsList;
