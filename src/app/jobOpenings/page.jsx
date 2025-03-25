// "use client";
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation"; // Import Next.js router
// import "./page.css"; // Importing CSS file

// const JobOpenings = () => {
//   const [jobs, setJobs] = useState([]);
//   const [appliedJobs, setAppliedJobs] = useState([]);
//   const [mounted, setMounted] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     setMounted(true);
//     const fetchJobs = async () => {
//       try {
//         const response = await fetch("/api/jobs");
//         const data = await response.json();
//         setJobs(data);
//         const storedAppliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];
//         setAppliedJobs(storedAppliedJobs);
//       } catch (error) {
//         console.error("Error fetching jobs:", error);
//       }
//     };

//     fetchJobs();
//   }, []);

//   if (!mounted) return null;

//   const handleApply = (id) => {
//     router.push(`/apply/${id}`); // Navigate to the application form
//   };

//   return (
//     <div className="job-list-container">
//       <h2 className="job-list-title">🚀 Job Listings</h2>
//       {jobs.length === 0 ? (
//         <p className="no-jobs">No jobs available</p>
//       ) : (
//         <div className="job-cards">
//           {jobs.map((job) => (
//             <div key={job.id} className="job-card">
//               <div className="job-details">
//                 <h3>{job.jobTitle}</h3>
//                 <p><strong>Company:</strong> {job.companyName}</p>
//                 <p><strong>Location:</strong> {job.jobLocation}</p>
//                 <p><strong>Employment Type:</strong> {job.employmentType}</p>
//                 <p><strong>Salary:</strong> {job.salaryRange || "Not Disclosed"}</p>
//                 <p><strong>Experience:</strong> {job.experience} years</p>
//               </div>
//               <div className="job-actions">
//                 <button
//                   className={`apply-btn ${appliedJobs.includes(job.id) ? "applied" : ""}`}
//                   onClick={() => handleApply(job.id)}
//                   disabled={appliedJobs.includes(job.id)}
//                 >
//                   {appliedJobs.includes(job.id) ? "Applied" : "Apply"}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default JobOpenings;
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import Next.js router
import "./page.css"; // Importing CSS file

const JobOpenings = () => {
  const [jobs, setJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState(new Set()); // Store applied jobs in state
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);

    const fetchJobs = async () => {
      try {
        const response = await fetch("/api/jobs");
        const data = await response.json();
        setJobs(data);

        // ✅ Fetch applied jobs from backend (instead of localStorage)
        const appliedResponse = await fetch("/api/applications");
        const appliedData = await appliedResponse.json();
        const appliedJobIds = new Set(appliedData.map(app => app.jobId));

        setAppliedJobs(appliedJobIds);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  if (!mounted) return null;

  const handleApply = async (id) => {
    router.push(`/apply/${id}`); // Navigate to the application form
  };

  return (
    <div className="job-list-container">
      <h2 className="job-list-title">🚀 Job Listings</h2>
      {jobs.length === 0 ? (
        <p className="no-jobs">No jobs available</p>
      ) : (
        <div className="job-cards">
          {jobs.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-details">
                <h3>{job.jobTitle}</h3>
                <p><strong>Company:</strong> {job.companyName}</p>
                <p><strong>Location:</strong> {job.jobLocation}</p>
                <p><strong>Employment Type:</strong> {job.employmentType}</p>
                <p><strong>Salary:</strong> {job.salaryRange || "Not Disclosed"}</p>
                <p><strong>Experience:</strong> {job.experience} years</p>
              </div>
              <div className="job-actions">
                <button
                  className={`apply-btn ${appliedJobs.has(job.id) ? "applied" : ""}`}
                  onClick={() => handleApply(job.id)}
                  disabled={appliedJobs.has(job.id)}
                >
                  {appliedJobs.has(job.id) ? "Applied" : "Apply"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobOpenings;
