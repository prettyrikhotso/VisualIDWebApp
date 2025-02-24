import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Register.module.css'; // Import the CSS module

function Register() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (!validatePassword(newPassword)) {
      setPasswordError([
        'Password must be at least 8 characters long.',
        'Password must include at least one uppercase letter.',
        'Password must include at least one lowercase letter.',
        'Password must include at least one number.',
        'Password must include at least one special character (e.g., @$!%*?&).'
      ]);
    } else {
      setPasswordError('');
    }
  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.formFrame}>
        <h1>Welcome to Your New Account</h1>
        <h2>Register</h2>
        <p>Create a new account to get started.</p>
        <form>
          {/* Form Inputs */}
          <div className={styles.inputGroup}>
            <label htmlFor="idNumber">South African ID Number</label>
            <input type="text" id="idNumber" placeholder="South African ID Number" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" placeholder="First Name" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="surname">Surname</label>
            <input type="text" id="surname" placeholder="Surname" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="birthDate">Date of Birth</label>
            <input type="date" id="birthDate" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="gender">Gender</label>
            <select id="gender">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" id="phoneNumber" placeholder="Phone Number" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" />
          </div>

          {/* Password Field */}
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {passwordError && (
              <ul className={styles.errorText}>
                {passwordError.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {confirmPassword && confirmPassword !== password && (
              <p className={styles.errorText}>Passwords do not match.</p>
            )}
          </div>

          {/* Register Button */}
          <Link to="/my_register">
            <button className={styles.registerButton} type="submit">Register</button>
          </Link>

          {/* Back to Login Button */}
          <Link to="/login">
            <button className={styles.backToLoginButton}>Back to Login</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
