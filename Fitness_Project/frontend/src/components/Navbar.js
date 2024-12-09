


import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const context = useContext(AuthContext);

  if (!context) {
    console.error("AuthContext is not available.");
    return null; // Prevents rendering if context is undefined
  }

  const { token, logout } = context;

  return (
    <nav>
      {/* Centered links */}
      <div className="center-links">
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/contact">Contact Us</Link> {/* New Contact Us link */}
</div>


      {/* Right-aligned links */}
      <div className="right-links">
        {token ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={logout}>Logout</button>
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
