"use client";

import React, { useState ,useEffect} from "react";
import { useRouter } from "next/navigation";
import './page.css';

const Register = () => {
  const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
useEffect(() => {
    setIsMounted(true);
  }, []);

  // ✅ Ensure all hooks are called before any conditional return
  if (!isMounted) {
    return null; // Prevents hydration issues
  }

  const handleRegister = async (e:any) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "register", email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Registration successful!");
        setTimeout(() => router.push("/login"), 2000);
      } else {
        setMessage("❌ " + (data.error || "Registration failed"));
      }
    } catch (error:any) {
      setMessage("❌ Error: " + error.message);
    }
  };

  return (
    <div className="container">
      <div className="left-half"><img src="/j2.png" alt="Client Image" /></div>
      <div className="right-half">
        <h2>Employer Register</h2>
        <p style={{color:"green",fontSize:"14px"}}>{message}</p>
        <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
                   className="input"
        />
        <button type="submit"          className="button">Register</button>
      </form>
     

        {/* <div className="login-footer">
          <div className="account">Don't have an account?</div>
          <a href="/Register" className="route">Register</a>
        </div> */}
      </div>
    </div>
  
  );
};

export default Register;
