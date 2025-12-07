// // // import React, { useState } from "react";
// // // import { Container, TextField, Button, Typography } from "@mui/material";

// // // export default function StudentHome() {
// // //   const [code, setCode] = useState("");

// // //   return (
// // //     <Container maxWidth="sm">
// // //       <Typography variant="h4" mt={3}>Enter Quiz Code</Typography>

// // //       <TextField
// // //         label="4 Digit Code"
// // //         fullWidth
// // //         margin="normal"
// // //         onChange={(e) => setCode(e.target.value)}
// // //       />

// // //       <Button
// // //         variant="contained"
// // //         fullWidth
// // //         onClick={() => window.location = `/quiz/${code}`}
// // //       >
// // //         Start Quiz
// // //       </Button>
// // //     </Container>
// // //   );
// // // }


// // import React, { useState } from "react";
// // import { Container, TextField, Button, Typography } from "@mui/material";

// // export default function StudentHome() {
// //   const [code, setCode] = useState("");

// //   return (
// //     <Container maxWidth="sm">
// //       <Typography variant="h4" mt={3}>Enter Quiz Code</Typography>

// //       <TextField
// //         label="4 Digit Code"
// //         fullWidth
// //         margin="normal"
// //         onChange={(e) => setCode(e.target.value)}
// //       />

// //       <Button
// //         variant="contained"
// //         fullWidth
// //         onClick={() => window.location = `/quiz/${code}`}
// //       >
// //         Start Quiz
// //       </Button>
// //     </Container>
// //   );
// // }


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";

// export default function StudentHome() {
//   const [code, setCode] = useState("");
//   const navigate = useNavigate();

//   const goToQuiz = () => {
//     if (!code.trim()) {
//       alert("Please enter quiz code");
//       return;
//     }
//     navigate(`/quiz/${code}`);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container-row">
//         <Sidebar />
//         <div className="content">
//           <div className="card">
//             <h2>Enter Quiz Code</h2>

//             <input
//               type="text"
//               placeholder="Enter 4-digit code"
//               onChange={(e) => setCode(e.target.value)}
//               style={{ padding: 10, width: "60%", marginTop: 10 }}
//             />

//             <button
//               onClick={goToQuiz}
//               style={{ padding: "10px 20px", marginTop: 10 }}
//             >
//               Start Quiz
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";

export default function StudentHome() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const goToQuiz = () => {
    const trimmed = code.trim();
    if (!trimmed || trimmed.length !== 4 || isNaN(trimmed)) {
      alert("Please enter a valid 4-digit code!");
      return;
    }
    navigate(`/quiz/${trimmed}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") goToQuiz();
  };

  return (
    <>
      {/* <Navbar /> */}
      
      {/* Mobile-First Responsive Layout */}
      <div style={{
        background: "#000",
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "'Orbitron', 'Rajdhani', sans-serif",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
      }}>
        {/* Background Glow */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "radial-gradient(circle at 30% 70%, rgba(255,107,53,0.3), transparent 50%), radial-gradient(circle at 70% 30%, rgba(255,105,180,0.3), transparent 50%)",
          filter: "blur(100px)",
          opacity: 0.7,
          zIndex: 1
        }} />

        {/* Sidebar (Mobile pe top me, Desktop pe left me) */}
        <div style={{ zIndex: 10, width: "100%", flexShrink: 0 }}>
          {/* <Sidebar /> */}
        </div>

        {/* Main Content */}
        <div style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          position: "relative",
          zIndex: 5
        }}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            style={{
              background: "rgba(15, 15, 15, 0.98)",
              padding: "40px 30px",
              borderRadius: "24px",
              boxShadow: "0 0 80px rgba(255,107,53,0.5), 0 0 120px rgba(255,105,180,0.4)",
              border: "2px solid #333",
              textAlign: "center",
              width: "100%",
              maxWidth: "500px",
              backdropFilter: "blur(12px)"
            }}
          >
            <motion.h1
              initial={{ y: -40 }}
              animate={{ y: 0 }}
              style={{
                fontSize: "clamp(48px, 12vw, 80px)",
                fontWeight: "900",
                margin: "0 0 15px",
                background: "linear-gradient(45deg, #ff6b35, #ff4500)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "4px",
                textShadow: "0 0 40px rgba(255,107,53,0.7)"
              }}
            >
              ENTER QUIZ CODE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                color: "#ff6b35",
                fontSize: "clamp(16px, 4vw, 22px)",
                margin: "20px 0 40px",
                fontWeight: "bold"
              }}
            >
              Only players with the code may enter.
            </motion.p>

            {/* Input + Button - Responsive */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "center"
            }}>
              <motion.input
                whileFocus={{ scale: 1.05, boxShadow: "0 0 40px #00ffcc" }}
                type="text"
                maxLength="4"
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
                onKeyPress={handleKeyPress}
                placeholder="4-digit code"
                style={{
                  padding: "18px 24px",
                  fontSize: "28px",
                  width: "100%",
                  maxWidth: "300px",
                  background: "#0a0a0a",
                  color: "#00ffcc",
                  border: "2px solid #333",
                  borderRadius: "16px",
                  textAlign: "center",
                  letterSpacing: "8px",
                  fontWeight: "bold",
                  outline: "none",
                  boxShadow: "0 0 25px rgba(0,255,204,0.3)"
                }}
              />

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={goToQuiz}
                style={{
                  padding: "18px 50px",
                  fontSize: "24px",
                  background: "#ff6b35",
                  color: "white",
                  border: "none",
                  borderRadius: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  boxShadow: "0 0 50px #ff6b35",
                  textTransform: "uppercase",
                  minWidth: "200px"
                }}
              >
                Start Quiz
              </motion.button>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.8 }}
              style={{
                marginTop: "40px",
                color: "#ff3366",
                fontSize: "16px",
                fontWeight: "bold"
              }}
            >
              Warning: Once you enter, there is no turning back.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </>
  );
}