// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import styles from "../styles/StudentDashboard.css"; // SAME CSS REUSE

// export default function student() {
//   return (
//     <>
//       <Navbar />

//       <div className="container-row">
//         <Sidebar />

//         {/* Center content */}
//         <div className="content">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//             className="card"
//           >
//             {/* Big Robot Emoji */}
//             <motion.div
//               className="big-emoji"
//               animate={{ rotate: [0, 10, -10, 0] }}
//               transition={{ duration: 3, repeat: Infinity }}
//             >
//               🤖
//             </motion.div>

//             {/* Title */}
//             <h1>Admin Panel</h1>
//             <p className="subtitle">Create quizzes and manage everything</p>

//             {/* Buttons */}
//             <div className="btn-row">
//               <Link to="/admin/create">
//                 <motion.button
//                   className="btn-primary"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Create Quiz
//                 </motion.button>
//               </Link>

//               <Link to="/admin/quizzes">
//                 <motion.button
//                   className="btn-success"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   All Quizzes
//                 </motion.button>
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function AdminDashboard() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="container-row">
        <Sidebar />

        {/* Main Content - Full Squid Game Vibe */}
        <div
          style={{
            flex: 1,
            background: "#000",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background Glow Effects */}
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: "10%",
              width: "600px",
              height: "600px",
              background: "radial-gradient(circle, #ff3366 10%, transparent 70%)",
              opacity: 0.3,
              filter: "blur(100px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "10%",
              right: "10%",
              width: "700px",
              height: "700px",
              background: "radial-gradient(circle, #00ffcc 10%, transparent 70%)",
              opacity: 0.3,
              filter: "blur(120px)",
            }}
          />

          {/* Main Card */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              background: "rgba(15,15,15,0.95)",
              padding: "70px 90px",
              borderRadius: "30px",
              boxShadow: "0 0 100px rgba(255,51,102,0.5), 0 0 150px rgba(0,255,204,0.3)",
              border: "3px solid #333",
              textAlign: "center",
              maxWidth: "800px",
              backdropFilter: "blur(12px)",
              position: "relative",
              zIndex: 10,
            }}
          >
            {/* Robot Guard (Squid Game Style) */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{
                fontSize: "140px",
                marginBottom: "30px",
              }}
            >
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              style={{
                fontSize: "82px",
                fontWeight: "900",
                margin: "0 0 20px",
                background: "linear-gradient(45deg, #ff3366, #ff6b35)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "8px",
                textShadow: "0 0 60px rgba(255,51,102,0.8)",
              }}
            >
              ADMIN PANEL
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{
                fontSize: "28px",
                color: "#ff6b35",
                margin: "30px 0 70px",
                fontWeight: "bold",
                letterSpacing: "2px",
              }}
            >
              You control the game.
            </motion.p>

            {/* Buttons */}
            <div style={{ display: "flex", gap: "40px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/admin/create">
                <motion.button
                  whileHover={{ scale: 1.1, boxShadow: "0 0 60px #ff3366" }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: "22px 60px",
                    fontSize: "28px",
                    background: "#ff3366",
                    color: "white",
                    border: "none",
                    borderRadius: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    boxShadow: "0 0 50px #ff3366",
                    textTransform: "uppercase",
                    letterSpacing: "4px",
                  }}
                >
                  Create Quiz
                </motion.button>
              </Link>

              <Link to="/admin/quizzes">
                <motion.button
                  whileHover={{ scale: 1.1, boxShadow: "0 0 60px #00ffcc" }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: "22px 60px",
                    fontSize: "28px",
                    background: "#00ffcc",
                    color: "#000",
                    border: "none",
                    borderRadius: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    boxShadow: "0 0 50px #00ffcc",
                    textTransform: "uppercase",
                    letterSpacing: "4px",
                  }}
                >
                  All Quizzes
                </motion.button>
              </Link>
            </div>

            {/* Warning */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ delay: 1.2 }}
              style={{
                marginTop: "80px",
                color: "#ff3366",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              With great power comes great responsibility.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </>
  );
}