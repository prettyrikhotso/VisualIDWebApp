import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./NavigatePage.module.css"; // Corrected CSS Module import

const NavigatePage = () => {
  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <nav className={styles.sidebar}>
        <h2>Home Affairs</h2>
        <div className={styles.menu}>
          {/* Navigation Links */}
          <div className={styles.menuItem}>
            <NavLink to="/apply" className={({ isActive }) => isActive ? styles.activeLink : ""}>
              Apply
            </NavLink>
          </div>
          <div className={styles.menuItem}>
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? styles.activeLink : ""}>
              Applicant Dashboard
            </NavLink>
          </div>
          <div className={styles.menuItem}>
            <NavLink to="/generate-id" className={({ isActive }) => isActive ? styles.activeLink : ""}>
              Generate ID
            </NavLink>
          </div>
          <div className={styles.menuItem}>
            <NavLink to="/view" className={({ isActive }) => isActive ? styles.activeLink : ""}>
              View ID
            </NavLink>
          </div>
          <div className={styles.menuItem}>
            <NavLink to="/admin-dashboard" className={({ isActive }) => isActive ? styles.activeLink : ""}>
              Admin Dashboard
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <Outlet /> {/* Allows nested route components to be rendered here */}
      </div>
    </div>
  );
};

export default NavigatePage;
