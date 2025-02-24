import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";


function VerifyOTPPage() {
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();
  
    const verifyOTP = () => {
      if (otp === "1234") { // Simulated OTP
        navigate("/reset-password");
      } else {
        alert("Invalid OTP");
      }
    };
  
    return (
      <div className="container">
        <h2>Verify OTP</h2>
        <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
        <button onClick={verifyOTP}>Verify</button>
      </div>
    );
  }
  export default VerifyOTPPage;
