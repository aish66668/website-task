// src/pages/ClientLogin.js
import React, { useState } from 'react';
import './login.css';

const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   // For navigation after login

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await loginClient(email, password);
//       localStorage.setItem('clientAuthToken', response.data.token); // Store the client token
//       navigate('/myFiles'); // Redirect to the client's dashboard or another page
//     } catch (error) {
//       setError('Invalid email or password');
//     }
//   };

  return (
    <div className="container">
      <div className="left-half"><img src="/j2.png" alt="Client Image" /></div>
      <div className="right-half">
        <h2 className='recruiter'>Recruiter Login</h2>
         {error && <p style={{ color: 'red' }}>{error}</p>} 
        <form className='form-container'>
          <input
            type="email"
            placeholder="Email"
            value={email}
            // onChange={(e) => setEmail(e.target.value)}
            required
             className='input'
          />
          <input
            type="password"
            placeholder="Password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            required
            className='input'
          />
          <button type="submit" className='button'>Login</button>
        </form>
        <div className="login-footer">
          <div className='account'>Don't have an account?</div>
          <a href="/register" className='route'>Register</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
