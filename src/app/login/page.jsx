"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import "./page.css";

const Login = () => {
      const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState('');
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // ✅ Ensure all hooks are called before any conditional return
  if (!isMounted) {
    return null; // Prevents hydration issues
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages
  
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, type: "login" }), // ✅ Ensure "type" is "login"
      });
  
      const text = await response.text();
      if (!text) throw new Error("Empty response from server"); // ✅ Catch empty responses
  
      const data = JSON.parse(text);
  
      if (response.ok) {
        setMessage("Login Successful! ");
        setTimeout(() => {
          router.push("/AddJob"); // ✅ Redirect after login
        }, 1000);
      } else {
        setMessage(data.error || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error.message);
      setMessage("Error: " + error.message);
      setError("Invalid email id or password")
    }
  };
  
  
  return (
    <div className="container">
      <div className="left-half"><img src="/j2.png" alt="Client Image" /></div>
      <div className="right-half">
        <h2>Employer Login</h2>
        <p style={{color:"green",fontSize:"14px"}}>{message}</p>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
             className='input'
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
             className='input'
          />
          <button type="submit" className='button'>Login</button>
        </form>
       

        <div className="login-footer">
          <div className="account">Don't have an account?</div>
          <a href="/Register" className="route">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
