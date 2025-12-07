// src/components/Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const role = localStorage.getItem("role");
  const name = localStorage.getItem("name") || "User";
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div style={{
      background: "#000",
      padding: "15px 30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "2px solid #333",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    }}>
      <Link to={role === "admin" ? "/admin" : "/student"} style={{ textDecoration: "none" }}>
        <h1 style={{
          background: "linear-gradient(45deg, #ff3366, #ff6b35)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: "32px",
          margin: 0,
        }}>
          THINKFAST
        </h1>
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        {/* Profile Button */}
        <Link to="/profile">
          <motion.button
            whileHover={{ scale: 1.05 }}
            style={{
              padding: "10px 25px",
              background: "#ff69b4",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 0 30px rgba(255,105,180,0.5)",
            }}
          >
            {name} 👤
          </motion.button>
        </Link>

        {/* Logout */}
        <button
          onClick={handleLogout}
          style={{
            padding: "10px 25px",
            background: "#ff0044",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 0 30px rgba(255,0,68,0.5)",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}