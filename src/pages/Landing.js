// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/landing.css";

// export default function Landing() {
//   const nav = useNavigate();

//   return (
//     <div className="landing-container">
//       <div className="text-section">
//         <h1 className="title">ThinkFast Quiz Platform</h1>
//         <p className="subtitle">
//           Fast • Smart • Interactive Quiz Website  
//           Test your knowledge anytime!
//         </p>

//         <div className="btn-group">
//           <button onClick={() => nav("/login")} className="btn-primary">
//             Login
//           </button>
//           <button onClick={() => nav("/register")} className="btn-secondary">
//             Signup
//           </button>
//         </div>
//       </div>

//       <div className="hero-animation">
//         <div className="circle"></div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Landing() {
  const nav = useNavigate();

  return (
    <div style={{
      background: "#000",
      minHeight: "100vh",
      color: "#fff",
      fontFamily: "'Orbitron', 'Rajdhani', sans-serif",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Subtle Background Glow (Kam kiya) */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "800px",
        height: "800px",
        background: "radial-gradient(circle, rgba(255,107,53,0.15) 0%, transparent 70%)",
        transform: "translate(-50%, -50%)",
        filter: "blur(140px)",
        opacity: 0.6
      }} />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        style={{
          textAlign: "center",
          zIndex: 10,
          maxWidth: "1000px",
          padding: "40px"
        }}
      >
        {/* Title - Balanced Glow */}
        <motion.h1
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 80 }}
          style={{
            fontSize: "clamp(70px, 12vw, 140px)",
            fontWeight: "900",
            margin: "0 0 20px",
            background: "linear-gradient(45deg, #ff6b35, #ff3366)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 30px rgba(255,107,53,0.5), 0 0 60px rgba(255,51,102,0.3)",
            letterSpacing: "10px"
          }}
        >
          THINKFAST
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{
            fontSize: "clamp(32px, 6vw, 60px)",
            color: "#ff6b35",
            margin: "20px 0 50px",
            fontWeight: "bold",
            letterSpacing: "4px"
          }}
        >
          QUIZ PLATFORM
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            fontSize: "clamp(20px, 4vw, 32px)",
            color: "#ddd",
            margin: "40px 0 80px",
            lineHeight: "1.6",
            fontWeight: "500"
          }}
        >
          Fast • Smart • Deadly<br />
          Only the strongest survive.
        </motion.p>

        {/* Buttons - Perfect Glow */}
        <div style={{ display: "flex", gap: "50px", justifyContent: "center", flexWrap: "wrap" }}>
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 0 40px #00ffcc" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => nav("/login")}
            style={{
              padding: "20px 70px",
              fontSize: "28px",
              background: "#00ffcc",
              color: "#000",
              border: "none",
              borderRadius: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 0 30px #00ffcc",
              textTransform: "uppercase",
              letterSpacing: "4px"
            }}
          >
            Login
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 0 40px #ff69b4" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => nav("/register")}
            style={{
              padding: "20px 70px",
              fontSize: "28px",
              background: "#ff69b4",
              color: "white",
              border: "none",
              borderRadius: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 0 20px #ff69b4",
              textTransform: "uppercase",
              letterSpacing: "4px"
            }}
          >
           Register
          </motion.button>
        </div>

        {/* Warning - Subtle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 1.5 }}
          style={{
            marginTop: "100px",
            color: "#ff3366",
            fontSize: "22px",
            fontWeight: "bold",
            letterSpacing: "2px"
          }}
        >
          Warning: Once you enter, there is no turning back.
        </motion.p>
      </motion.div>
    </div>
  );
}