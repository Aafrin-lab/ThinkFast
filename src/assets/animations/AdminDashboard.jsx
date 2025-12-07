import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

export default function AdminDashboard() {
  return (
    <>
      <Navbar />
      <div className="container-row">
        <Sidebar />
        <motion.div className="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="card" style={{ padding: "50px", textAlign: "center" }}>
            
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ fontSize: "140px", marginBottom: "30px" }}
            >
              Robot
            </motion.div>

            <h1 style={{ color: "#ff9800", fontSize: "40px" }}>Admin Panel</h1>
            <p style={{ fontSize: "20px", color: "#ccc", margin: "20px 0 40px" }}>
              Create quizzes and manage everything
            </p>

            <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "30px" }}>
  <Link to="/admin/create">
    <motion.button 
      whileHover={{ scale: 1.1 }} 
      whileTap={{ scale: 0.95 }}
      style={{ 
        padding: "16px 40px", 
        fontSize: "20px", 
        background: "#ff9800", 
        color: "white", 
        border: "none", 
        borderRadius: "12px",
        cursor: "pointer"
      }}
    >
      Create Quiz
    </motion.button>
  </Link>

  <Link to="/admin/quizzes">
    <motion.button 
      whileHover={{ scale: 1.1 }} 
      whileTap={{ scale: 0.95 }}
      style={{ 
        padding: "16px 40px", 
        fontSize: "20px", 
        background: "#2196f3", 
        color: "white", 
        border: "none", 
        borderRadius: "12px",
        cursor: "pointer"
      }}
    >
      All Quizzes
    </motion.button>
  </Link>
</div>
          </div>
        </motion.div>
      </div>
    </>
  );
}