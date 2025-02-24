import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css'; // Importing the CSS module

function Login() {
  return (
    <div className={styles['login-container']}>
      <h2>Login to Your Account</h2>
      <p>Welcome back! Please enter your credentials.</p>

      <form>
        <div className={styles['input-group']}>
          <label htmlFor="idNumber">ID Number</label>
          <input type="text" id="idNumber" placeholder="Enter your ID Number" />
        </div>

        <div className={styles['input-group']}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your Password" />
        </div>

        <button type="submit" className={styles['login-btn']}>Login</button>
        <Link to="/forgot-password" className={styles['forgot-password']}>Forgot Password?</Link>
      </form>
    </div>
  );
}

export default Login;
