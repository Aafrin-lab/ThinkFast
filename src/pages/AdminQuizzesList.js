// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// // import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import API from "../api";

// export default function AdminQuizzesList() {
//   const [quizzes, setQuizzes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     API.get("/quiz")
//       .then((res) => {
//         setQuizzes(res.data || []);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError("Failed to load quizzes: " + (err.response?.data?.error || err.message));
//         setQuizzes([]);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <>
//         {/* <Navbar /> */}
//         <div className="container-row">
//           <Sidebar />
//           <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
//             <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
//               Loading
//             </motion.div>
//           </div>
//         </div>
//       </>
//     );
//   }

//   if (error) {
//     return (
//       <>
//         {/* <Navbar /> */}
//         <div className="container-row">
//           <Sidebar />
//           <div style={{ flex: 1, padding: "40px", textAlign: "center" }}>
//             <p style={{ color: "#ef4444", fontSize: "20px" }}>{error}</p>
//           </div>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       {/* <Navbar /> */}
//       <div className="container-row">
//         <Sidebar />

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           style={{
//             flex: 1,
//             padding: "30px",
//             background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
//             minHeight: "100vh",
//           }}
//         >
//           <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
//             <motion.h1
//               initial={{ scale: 0.9 }}
//               animate={{ scale: 1 }}
//               style={{
//                 color: "#ff9800",
//                 textAlign: "center",
//                 fontSize: "42px",
//                 marginBottom: "10px",
//                 fontWeight: "bold",
//               }}
//             >
//               All Quizzes ({quizzes.length})
//             </motion.h1>
            

//             {quizzes.length === 0 ? (
//               // Empty State - Beautiful & Motivating
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 style={{
//                   textAlign: "center",
//                   padding: "60px 20px",
//                   background: "rgba(255,255,255,0.05)",
//                   borderRadius: "20px",
//                   marginTop: "40px",
//                   boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
//                 }}
//               >
//                 <motion.div
//                   animate={{ y: [0, -10, 0] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                   style={{ fontSize: "120px", marginBottom: "20px" }}
//                 >
//                   Quiz
//                 </motion.div>
//                 <h2 style={{ color: "#aaa", fontSize: "28px", margin: "20px 0" }}>
//                   No Quizzes Yet!
//                 </h2>
//                 <p style={{ color: "#ccc", fontSize: "18px", maxWidth: "600px", margin: "0 auto 30px" }}>
//                   Start creating your first quiz and engage your students with interactive learning!
//                 </p>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => window.location.href = "/admin/create"}
//                   style={{
//                     padding: "16px 40px",
//                     fontSize: "20px",
//                     background: "#ff9800",
//                     color: "white",
//                     border: "none",
//                     borderRadius: "12px",
//                     cursor: "pointer",
//                     fontWeight: "bold",
//                     boxShadow: "0 8px 25px rgba(255, 152, 0, 0.4)",
//                   }}
//                 >
//                   Create Your First Quiz
//                 </motion.button>
//               </motion.div>
//             ) : (
//               // Quizzes List
//               <div style={{ display: "grid", gap: "25px", marginTop: "30px", margin:"0 auto", maxWidth:"800px" }}>
//                 {quizzes.map((q, i) => (
//                   <motion.div
//                     key={q._id}
//                     initial={{ opacity: 0, x: -50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: i * 0.1 }}
//                     whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
//                     style={{
//                       background: "rgba(255,255,255,0.05)",
//                       padding: "25px",
//                       borderRadius: "16px",
//                       border: "1px solid rgba(255,255,255,0.1)",
//                       boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
//                     }}
//                   >
//                     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
//                       <div>
//                         <h3 style={{ color: "#fff", fontSize: "22px", margin: "0 0 8px" }}>
//                           {q.title}
//                         </h3>
//                         <p style={{ color: "#aaa", margin: "5px 0" }}>
//                           <strong>Questions:</strong> {q.questions?.length || 0}
//                         </p>
//                         <p style={{ color: "#4caf50", margin: "5px 0", fontWeight: "bold" }}>
//                           <strong>Code:</strong> {q.code || "N/A"}
//                         </p>
//                       </div>
//                       <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
//                         <a href={`/quizpage/${q._id}`}>
//                           <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             style={{
//                               padding: "10px 20px",
//                               background: "#333",
//                               color: "white",
//                               border: "none",
//                               borderRadius: "8px",
//                               cursor: "pointer",
//                             }}
//                           >
//                             View Preview
//                           </motion.button>
//                         </a>
//                         <a href={`/quiz/${q.code}`}>
//                           <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             style={{
//                               padding: "10px 20px",
//                               background: "#1976d2",
//                               color: "white",
//                               border: "none",
//                               borderRadius: "8px",
//                               cursor: "pointer",
//                             }}
//                           >
//                             Test as Student
//                           </motion.button>
//                         </a>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </motion.div>
//       </div>
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function AdminQuizzesList() {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Yeh function har baar call hoga — fresh data layega
  const loadQuizzes = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      const res = await API.get("/quiz", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setQuizzes(res.data || []);
    } catch (err) {
      console.error(err);
      if (err.response?.status === 401) {
        localStorage.clear();
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  // Page load pe + jab bhi focus aaye tab refresh
  useEffect(() => {
    loadQuizzes();

    // Jab user wapas aaye (jaise quiz create karke), refresh karo
    const handleFocus = () => loadQuizzes();
    window.addEventListener("focus", handleFocus);

    return () => window.removeEventListener("focus", handleFocus);
  }, [navigate]);

  if (loading) {
    return (
      <div style={{ background: "#000", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} style={{ fontSize: "60px", color: "#ff3366" }}>
          Loading Games...
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <div className="container-row">
        <Sidebar />

        <div style={{
          flex: 1,
          background: "#000",
          minHeight: "100vh",
          padding: "40px",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            top: "10%",
            right: "10%",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(255,51,102,0.3), transparent 70%)",
            filter: "blur(120px)",
            opacity: 0.5,
          }} />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 10 }}
          >
            <motion.h1
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              style={{
                fontSize: "80px",
                textAlign: "center",
                background: "linear-gradient(45deg, #ff3366, #ff6b35)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 60px rgba(255,51,102,0.8)",
                margin: "0 0 20px",
                letterSpacing: "8px",
              }}
            >
              YOUR QUIZZES
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                textAlign: "center",
                color: "#ff6b35",
                fontSize: "28px",
                marginBottom: "60px",
                fontWeight: "bold",
              }}
            >
              {quizzes.length} Active Game{quizzes.length !== 1 ? "s" : ""} Running
            </motion.p>

            {/* Agar quiz hai to dikhao */}
            {quizzes.length > 0 ? (
              <div style={{ display: "grid", gap: "30px", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))" }}>
                {quizzes.map((q, i) => (
                  <motion.div
                    key={q._id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    style={{
                      background: "rgba(20,20,20,0.95)",
                      padding: "30px",
                      borderRadius: "20px",
                      border: "2px solid #ff3366",
                      boxShadow: "0 0 60px rgba(255,51,102,0.4)",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div style={{
                      position: "absolute",
                      top: -2, left: -2, right: -2, bottom: -2,
                      background: "linear-gradient(45deg, #ff3366, #ff69b4)",
                      borderRadius: "22px",
                      opacity: 0.3,
                      filter: "blur(20px)",
                      zIndex: -1,
                    }} />

                    <h3 style={{ color: "#ff6b35", fontSize: "28px", margin: "0 0 15px", fontWeight: "bold" }}>
                      {q.title}
                    </h3>

                    <div style={{ margin: "20px 0", color: "#00ffcc" }}>
                      <p><strong>Code:</strong> <span style={{ fontSize: "26px", letterSpacing: "6px" }}>{q.code}</span></p>
                      <p><strong>Questions:</strong> {q.questions?.length || 0}</p>
                    </div>

                    <div style={{ display: "flex", gap: "15px", marginTop: "25px" }}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate(`/quizpage/${q._id}`)}
                        style={{
                          flex: 1,
                          padding: "14px",
                          background: "#333",
                          color: "#fff",
                          border: "none",
                          borderRadius: "12px",
                          fontWeight: "bold",
                          cursor: "pointer",
                        }}
                      >
                        View Preview
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.open(`/quiz/${q.code}`, "_blank")}
                        style={{
                          flex: 1,
                          padding: "14px",
                          background: "#00ffcc",
                          color: "#000",
                          border: "none",
                          borderRadius: "12px",
                          fontWeight: "bold",
                          cursor: "pointer",
                        }}
                      >
                        Test Live
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              // Empty State
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{
                  textAlign: "center",
                  padding: "80px 20px",
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: "24px",
                  border: "2px dashed #333",
                }}
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  style={{ fontSize: "100px", marginBottom: "30px" }}
                >
                  No Quizzes
                </motion.div>
                <h2 style={{ color: "#666", fontSize: "32px" }}>No Games Created Yet</h2>
                <p style={{ color: "#aaa", fontSize: "20px", margin: "20px 0 40px" }}>
                  Create your first deadly quiz now.
                </p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/admin/create")}
                  style={{
                    padding: "18px 50px",
                    fontSize: "24px",
                    background: "#ff3366",
                    color: "white",
                    border: "none",
                    borderRadius: "16px",
                    cursor: "pointer",
                    boxShadow: "0 0 50px #ff3366",
                    fontWeight: "bold",
                  }}
                >
                  CREATE FIRST QUIZ
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
}