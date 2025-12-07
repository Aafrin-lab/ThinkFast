// src/components/Sidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Sidebar() {
  const location = useLocation();
  const role = localStorage.getItem("role");

  const isActive = (path) => location.pathname.startsWith(path);

  const menuItems = role === "admin" 
    ? [
        { to: "/admin", label: "Dashboard", icon: "Dashboard" },
        { to: "/admin/create", label: "Create Quiz", icon: "Create" },
        { to: "/admin/quizzes", label: "All Quizzes", icon: "Quiz" },
        { to: "/profile", label: "Profile", icon: "Profile" },
      ]
    : [
        { to: "/student", label: "Dashboard", icon: "Home" },
        { to: "/student/home", label: "Enter Quiz Code", icon: "Code" },
        { to: "/profile", label: "My Quiz History", icon: "History" },
      ];

  return (
    <div
      style={{
        width: "280px",
        background: "linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)",
        color: "white",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        padding: "20px 0",
        boxShadow: "5px 0 25px rgba(0,0,0,0.4)",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Logo/Title */}
      <div style={{ padding: "0 25px 30px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <h2 style={{ margin: 0, fontSize: "28px", color: "#ff9800", fontWeight: "bold" }}>
          ThinkFast
        </h2>
        <p style={{ margin: "5px 0 0", color: "#aaa", fontSize: "14px" }}>
          {role === "admin" ? "Admin Panel" : "Student Portal"}
        </p>
      </div>

      {/* Menu Items */}
      <nav style={{ flex: 1, padding: "20px 0" }}>
        {menuItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            style={{ textDecoration: "none" }}
          >
            <motion.div
              whileHover={{ x: 8 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "14px 25px",
                margin: "6px 15px",
                borderRadius: "12px",
                background: isActive(item.to) ? "rgba(76, 175, 80, 0.2)" : "transparent",
                border: isActive(item.to) ? "1px solid #4caf50" : "1px solid transparent",
                color: isActive(item.to) ? "#4caf50" : "#ccc",
                fontWeight: isActive(item.to) ? "bold" : "500",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                transition: "all 0.3s ease",
                fontSize: "16px",
              }}
            >
              <span style={{ fontSize: "20px" }}>{item.icon}</span>
              <span>{item.label}</span>
              {isActive(item.to) && (
                <motion.div
                  layoutId="activeIndicator"
                  style={{
                    position: "absolute",
                    left: 0,
                    width: "5px",
                    height: "40px",
                    background: "#4caf50",
                    borderRadius: "0 4px 4px 0",
                  }}
                />
              )}
            </motion.div>
          </Link>
        ))}
      </nav>

      {/* Logout Button */}
      <div style={{ padding: "0 20px 20px" }}>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            localStorage.clear();
            window.location.href = "/login";
          }}
          style={{
            width: "100%",
            padding: "14px",
            background: "linear-gradient(135deg, #d32f2f, #b71c1c)",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(211, 47, 47, 0.4)",
          }}
        >
          Logout
        </motion.button>
      </div>
    </div>
  );
}