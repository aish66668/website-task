
"use client"
import React, { useState,useEffect } from 'react';
import { useRouter } from "next/navigation";// Importing CSS file
import './page.css';

const Dashboard = () => {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
    const handleNavigation = () => {
      router.push("/jobForm"); // Replace with your target page
    };
    const handleJoblist = () => {
        router.push("/jobList"); // Replace with your target page
      };
      const handleApplicationsList = () => {
        router.push("/applicationsList"); // Replace with your target page
      };
  return (
    <div className="dashboard-page"> {/* Apply background only here */}
      <div className="dashboard-container">
        <h2 className="dashboard-title">Welcome to Job Management</h2>
        <div className="button-container">
          <button className="dashboard-btn" onClick={handleNavigation}>Add Job</button>
          <button className="dashboard-btn" onClick={handleJoblist}>Current Openings</button>
          <button className="dashboard-btn" onClick={handleApplicationsList}>Candidate Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

