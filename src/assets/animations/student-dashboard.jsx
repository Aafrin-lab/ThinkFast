import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import API from "../../api";

export default function StudentDashboard() {
  const [stats, setStats] = useState({
    totalAttempts: 0,
    bestScore: 0,
    bestQuiz: "N/A",
    averageScore: 0,
  });

  useEffect(() => {
    const load = async () => {
      try {
        const res = await API.get("/quiz/user/submissions");
        const subs = res.data || [];
        if (subs.length === 0) return;

        const scores = subs.map(s => ({
          score: s.score,
          total: s.quiz?.questions?.length || 1,
          title: s.quiz?.title
        }));

        const best = scores.reduce((a, b) => 
          (a.score/a.total > b.score/b.total) ? a : b
        );

        const avg = scores.reduce((s, c) => s + c.score/c.total, 0) / scores.length;

        setStats({
          totalAttempts: subs.length,
          bestScore: Math.round((best.score / best.total) * 100),
          bestQuiz: best.title,
          averageScore: Math.round(avg * 100)
        });
      } catch (e) { console.log("No stats"); }
    };
    load();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-row">
        <Sidebar />
        <motion.div className="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="card" style={{ padding: "40px", textAlign: "center" }}>
            
            {/* Animated Student Character */}
            <motion.div
              animate={{ y: [-20, 0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ fontSize: "160px", margin: "20px 0" }}
            >
              Student
            </motion.div>

            <motion.h1
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring" }}
              style={{ color: "#4caf50", fontSize: "38px" }}
            >
              Welcome Back!
            </motion.h1>

            <div style={{ margin: "40px 0", fontSize: "22px", lineHeight: "2" }}>
              <p>Total Quizzes: <strong>{stats.totalAttempts}</strong></p>
              <p>Best Score: <strong style={{color:"#4caf50"}}>{stats.bestScore}%</strong></p>
              <p>Average: <strong style={{color:"#ff9800"}}>{stats.averageScore}%</strong></p>
            </div>

            <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/student/home">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ padding: "16px 40px", fontSize: "20px", background: "#1976d2", color: "white", border: "none", borderRadius: "12px" }}
                >
                  Enter Quiz Code
                </motion.button>
              </Link>
              <Link to="/profile">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ padding: "16px 40px", fontSize: "20px", background: "#4caf50", color: "white", border: "none", borderRadius: "12px" }}
                >
                  View Profile
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}