// "use client";
// import React, { useState, useEffect } from "react";
// import { useRouter, useParams } from "next/navigation";
// import "./page.css"; // Import styles

// const ApplyPage = () => {
//   const router = useRouter();
//   const params = useParams();

//   // State variables
//   const [isMounted, setIsMounted] = useState(false);
//   const [jobId, setJobId] = useState(null);
//   const [applied, setApplied] = useState(false);
//   const [formData, setFormData] = useState({ name: "", email: "" });

//   // ✅ Prevents hydration mismatch issues
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   useEffect(() => {
//     if (params?.id) {
//       setJobId(params.id);
//     }
//   }, [params]);

//   // Show nothing until hydration completes
//   if (!isMounted) return null;

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formDataToSend = { name: formData.name, email: formData.email, jobId };

//     try {
//       const response = await fetch("/api/applications", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formDataToSend),
//       });

//       if (response.ok) {
//         setApplied(true);
//         alert("Application Submitted!");
//       } else {
//         alert("Failed to submit application.");
//       }
//     } catch (error) {
//       console.error("Error submitting application:", error);
//     }
//   };

//   return (
//     <div className="apply-container">
//       <h2 className="apply-title">
//         {jobId ? `Apply for Job ID: ${jobId}` : "Loading..."}
//       </h2>

//       {applied ? (
//         <p className="applied-message">✅ Application Submitted!</p>
//       ) : (
//         <form onSubmit={handleSubmit} className="apply-form">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit" className="apply-btn">Submit Application</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default ApplyPage;
"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import "./page.css"; // Import styles

const ApplyPage = () => {
  const router = useRouter();
  const params = useParams();

  const [isMounted, setIsMounted] = useState(false);
  const [jobId, setJobId] = useState(null);
  const [applied, setApplied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    skills: "",
    preferredLocation: "",
    currentCTC: "",
    expectedCTC: "",
    coverLetter: "",
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (params?.id) {
      setJobId(params.id);
    }
  }, [params]);

  if (!isMounted) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = { ...formData, jobId };

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataToSend),
      });

      if (response.ok) {
        setApplied(true);
        alert("Application Submitted!");
        router.push("/");
      } else {
        alert("Failed to submit application.");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
    }
  };

  return (
    <div className="apply-container">
      <h2 className="apply-title">
        {jobId ? `Job Application` : "Loading..."}
      </h2>

      {applied ? (
        <p className="applied-message">✅ Application Submitted!</p>
      ) : (
        <form onSubmit={handleSubmit} className="apply-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="experience"
            placeholder="Relevant Experience (Years)"
            value={formData.experience}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="skills"
            placeholder="Skills (comma-separated)"
            value={formData.skills}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="preferredLocation"
            placeholder="Preferred Location"
            value={formData.preferredLocation}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="currentCTC"
            placeholder="Current CTC (in LPA)"
            value={formData.currentCTC}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="expectedCTC"
            placeholder="Expected CTC (in LPA)"
            value={formData.expectedCTC}
            onChange={handleChange}
            required
          />
          <textarea
            name="coverLetter"
            placeholder="Cover Letter (Optional)"
            value={formData.coverLetter}
            onChange={handleChange}
            rows="4"
          />
          <button type="submit" className="apply-btn">Submit Application</button>
        </form>
      )}
    </div>
  );
};

export default ApplyPage;
