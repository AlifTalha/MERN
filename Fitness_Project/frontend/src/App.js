

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import BMI from "./pages/BMI"; 
import Details from "./pages/Details"; // Import Details component
import AuthProvider from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/bmi" element={<BMI />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/details/:id" element={<Details />} /> {/* Add Details route */}
      </Routes>
    </AuthProvider>
  );
};

export default App;
