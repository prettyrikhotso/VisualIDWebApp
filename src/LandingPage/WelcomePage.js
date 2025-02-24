import React from "react";
import { Link } from "react-router-dom";
import styles from "./WelcomePage.module.css";

function WelcomePage() {
  return (
    <div className={styles.welcomePage}>
      {/* Top Navigation Buttons */}
      <div className={styles.topNav}>
        <Link to="/" aria-label="Go to Home">
          <button className={styles.topBtn}>Home</button>
        </Link>
        <Link to="/about" aria-label="Learn more about us">
          <button className={styles.topBtn}>About Us</button>
        </Link>
      </div>

      {/* Main Content */}
      <h1 className={styles.heading}>Welcome to Visual ID Application</h1>

      <div className={styles.mainButtons}>
        <Link to="/register" aria-label="Register an account">
          <button className={styles.registerBtn}>Register</button>
        </Link>
        <Link to="/login" aria-label="Login to your account">
          <button className={styles.loginBtn}>Login</button>
        </Link>
      </div>

      {/* Animated Slogan */}
      <div className={styles.sloganWrapper}>
        <p className={styles.slogan}>Experience the Future of Identification - Secure & Seamless!</p>
      </div>
    </div>
  );
}

export default WelcomePage;
