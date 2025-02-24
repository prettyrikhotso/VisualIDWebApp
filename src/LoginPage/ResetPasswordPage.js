import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";

function ResetPasswordPage() {
    const [newPassword, setNewPassword] = useState("");
    const navigate = useNavigate();
  
    const resetPassword = () => {
      alert("Password reset successfully!");
      navigate("/");
    };
  
    return (
      <div className="container">
        <h2>Reset Password</h2>
        <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        <button onClick={resetPassword}>Reset</button>
      </div>
    );
  }
  export default ResetPasswordPage;