

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { token, username, logout } = useContext(AuthContext); // Access username from context

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">MyApp</Link>
      </div>
      <div className="navbar-center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/bmi">BMI Calculator</Link>
      </div>
      <div className="navbar-right">
        {token ? (
          <>
            <span>Welcome, {username}</span> {/* Display username if logged in */}
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={logout} className="logout-btn">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
