// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// import Sidebar from "../components/Sidebar";
// import API from "../api";

// export default function StudentDashboard() {
//   const [stats, setStats] = useState({
//     totalAttempts: 0,
//     bestScore: 0,
//     bestQuiz: "N/A",
//     averageScore: 0,
//   });

//   useEffect(() => {
//     const load = async () => {
//       try {
//         const res = await API.get("/quiz/user/submissions");
//         const subs = res.data || [];
//         if (subs.length === 0) return;

//         const scores = subs.map(s => ({
//           score: s.score,
//           total: s.quiz?.questions?.length || 1,
//           title: s.quiz?.title
//         }));

//         const best = scores.reduce((a, b) => 
//           (a.score/a.total > b.score/b.total) ? a : b
//         );

//         const avg = scores.reduce((s, c) => s + c.score/c.total, 0) / scores.length;

//         setStats({
//           totalAttempts: subs.length,
//           bestScore: Math.round((best.score / best.total) * 100),
//           bestQuiz: best.title,
//           averageScore: Math.round(avg * 100)
//         });
//       } catch (err) {
//         console.error("Error loading stats:", err);
//       }
//     };
//     load();
//   }, []);

//   return (
//     <>
     
//       <div className="container-row">
//         <Sidebar />
//         <motion.div className="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//           <div className="card" style={{ padding: "50px", textAlign: "center" }}>
//             <motion.div
//               animate={{ rotate: [0, 10, -10, 0] }}
//               transition={{ duration: 3, repeat: Infinity }}
//               style={{ fontSize: "140px", marginBottom: "30px" }}
//             >
//               📊
//             </motion.div>

//             <h1 style={{ color: "#ff9800", fontSize: "40px" }}>Student Dashboard</h1>
//             <p style={{ fontSize: "20px", color: "#ccc", margin: "20px 0 40px" }}>
//               View your stats and take quizzes
//             </p>

//             <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
//               <p>Total Attempts: <strong style={{color:"#2196f3"}}>{stats.totalAttempts}</strong></p>
//               <p>Best: <strong style={{color:"#4caf50"}}>{stats.bestScore}%</strong></p>
//               <p>Average: <strong style={{color:"#ff9800"}}>{stats.averageScore}%</strong></p>
//             </div>

//             <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
//               <Link to="/student/home">
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                   style={{ padding: "16px 40px", fontSize: "20px", background: "#1976d2", color: "white", border: "none", borderRadius: "12px" }}
//                 >
//                   Enter Quiz Code
//                 </motion.button>
//               </Link>
//               <Link to="/profile">
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                   style={{ padding: "16px 40px", fontSize: "20px", background: "#4caf50", color: "white", border: "none", borderRadius: "12px" }}
//                 >
//                   View Profile
//                 </motion.button>
//               </Link>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </>
//   );
// }

// src/pages/StudentDashboard.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import API from "../api";

export default function StudentDashboard() {
  const [stats, setStats] = useState({
    totalAttempts: 0,
    bestScore: 0,
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
          total: s.quiz?.questions?.length || 1
        }));

        const best = Math.max(...scores.map(s => (s.score / s.total) * 100));
        const avg = scores.reduce((a, b) => a + (b.score / b.total) * 100, 0) / scores.length;

        setStats({
          totalAttempts: subs.length,
          bestScore: best.toFixed(0),
          averageScore: avg.toFixed(0)
        });
      } catch (err) {
        console.log(err);
      }
    };
    load();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div style={{
      background: "#000",
      minHeight: "100vh",
      color: "#fff",
      fontFamily: "'Rajdhani', sans-serif",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Background Effects */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "50vh",
        background: "repeating-linear-gradient(0deg, #111 0px, #111 40px, #222 40px, #222 80px)",
        opacity: 0.3
      }} />

      <div style={{
        position: "absolute",
        bottom: "40%",
        left: "10%",
        right: "10%",
        height: "4px",
        background: "#ff6b35",
        boxShadow: "0 0 30px #ff6b35",
        zIndex: 1
      }} />

      {/* Pink Guard */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          position: "absolute",
          top: "10%",
          right: "8%",
          width: "300px",
          height: "500px",
          background: "#ff69b4",
          borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
          boxShadow: "0 0 80px #ff69b4",
          zIndex: 2
        }}
      >
        <div style={{
          position: "absolute",
          top: "80px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "130px",
          height: "130px",
          background: "#00ffcc",
          borderRadius: "50%",
          boxShadow: "0 0 50px #00ffcc"
        }} />
      </motion.div>

      {/* Main Content */}
      <div style={{ position: "relative", zIndex: 10, padding: "60px 40px", textAlign: "center" }}>
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "90px",
            fontWeight: "700",
            background: "linear-gradient(45deg, #ff6b35, #f7931e)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 40px rgba(255,107,53,0.6)",
            letterSpacing: "4px"
          }}
        >
          STUDENT DASHBOARD
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{ fontSize: "26px", margin: "30px 0 60px", color: "#cccccc" }}
        >
          Only the strongest survive.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2 }}
          style={{ margin: "50px 0", fontSize: "24px", color: "#ff6b35" }}
        >
          Attempts: {stats.totalAttempts} | Best Score: {stats.bestScore}% | Avg: {stats.averageScore}%
        </motion.div>

        {/* Action Buttons */}
        <div style={{ display: "flex", gap: "40px", justifyContent: "center", flexWrap: "wrap", marginTop: "80px" }}>
          <Link to="/student/home">
            <motion.button
              whileHover={{ scale: 1.12, boxShadow: "0 0 40px #00ffcc" }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "22px 60px",
                fontSize: "26px",
                background: "#00ffcc",
                color: "#000",
                border: "none",
                borderRadius: "12px",
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow: "0 0 30px #00ffcc",
                textTransform: "uppercase",
                letterSpacing: "2px"
              }}
            >
              Enter Quiz Code
            </motion.button>
          </Link>

          <Link to="/profile">
            <motion.button
              whileHover={{ scale: 1.12, boxShadow: "0 0 40px #ff69b4" }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "22px 60px",
                fontSize: "26px",
                background: "#ff69b4",
                color: "white",
                border: "none",
                borderRadius: "12px",
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow: "0 0 30px #ff69b4",
                textTransform: "uppercase",
                letterSpacing: "2px"
              }}
            >
              View Profile
            </motion.button>
          </Link>
        </div>

        {/* LOGOUT BUTTON - PERFECT POSITION */}
        <motion.button
          whileHover={{ scale: 1.1, background: "#ff3366" }}
          whileTap={{ scale: 0.9 }}
          onClick={handleLogout}
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            padding: "18px 40px",
            background: "#ff0044",
            color: "white",
            border: "none",
            borderRadius: "50px",
            fontSize: "20px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 0 40px #ff0044",
            zIndex: 1000,
            textTransform: "uppercase",
            letterSpacing: "1px"
          }}
        >
          Logout
        </motion.button>
      </div>
    </div>
  );
}