import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";


function ForgotPassword() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
  
    const sendOTP = () => {
      alert(`OTP sent to ${email}`);
      navigate("/verify-otp");
    };
  
    return (
      <div className="container">
        <h2>Forgot Password</h2>
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button onClick={sendOTP}>Send OTP</button>
      </div>
    );
  }
  export default ForgotPassword; 