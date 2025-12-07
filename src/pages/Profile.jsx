// // // STUDENT VIEW - Profile.jsx ke andar (data.map wale part ko replace kar do)

// // {data.map((sub, i) => {
// //   const totalQuestions = sub.quiz?.questions?.length || 1;
// //   const percentage = ((sub.score / totalQuestions) * 100).toFixed(1);

// //   // Top 10% = 90% ya zyada
// //   const isTopPerformer = percentage >= 90;

// //   return (
// //     <div 
// //       key={i} 
// //       style={{ 
// //         padding: 20, 
// //         marginBottom: 20, 
// //         border: "2px solid #333", 
// //         borderRadius: 12, 
// //         position: "relative",
// //         background: "#1a1a1a",
// //         boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
// //       }}
// //     >
// //       {/* Top Performer Badge */}
// //       {isTopPerformer && (
// //         <div style={{
// //           position: "absolute",
// //           top: -12,
// //           right: 15,
// //           background: "#FFD700",
// //           color: "black",
// //           padding: "6px 16px",
// //           borderRadius: 20,
// //           fontWeight: "bold",
// //           fontSize: 14,
// //           boxShadow: "0 4px 10px rgba(255,215,0,0.4)",
// //           zIndex: 1
// //         }}>
// //           ⭐ Top Performer
// //         </div>
// //       )}

// //       {/* Rank Circle (#1, #2...) */}
// //       <div style={{
// //         position: "absolute",
// //         top: 15,
// //         left: -20,
// //         width: 50,
// //         height: 50,
// //         background: isTopPerformer ? "#FFD700" : "#1976d2",
// //         color: "white",
// //         borderRadius: "50%",
// //         display: "flex",
// //         alignItems: "center",
// //         justifyContent: "center",
// //         fontSize: 20,
// //         fontWeight: "bold",
// //         boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
// //         border: "3px solid #111"
// //       }}>
// //         #{i + 1}
// //       </div>

// //       {/* Quiz Details */}
// //       <h3 style={{ margin: "0 0 10px 40px", color: "#4caf50" }}>
// //         {sub.quiz?.title || "Unknown Quiz"}
// //       </h3>
// //       <p style={{ margin: "8px 0 8px 40px", color: "#aaa" }}>
// //         <strong>Code:</strong> {sub.quiz?.code || "N/A"}
// //       </p>
// //       <p style={{ margin: "8px 0 8px 40px", fontSize: 18 }}>
// //         <strong>Your Score:</strong> {sub.score} / {totalQuestions} 
// //         <span style={{ color: isTopPerformer ? "#FFD700" : "#4caf50", fontWeight: "bold" }}>
// //           {" "}({percentage}%)
// //         </span>
// //       </p>
// //       <p style={{ margin: "8px 0 8px 40px", color: "#888" }}>
// //         <strong>Date:</strong> {new Date(sub.createdAt).toLocaleDateString()}
// //       </p>
// //     </div>
// //   );
// // })}

// // // File ke end mein yeh line zaroor honi chahiye
// // export default Profile;

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Player } from "@lottiefiles/react-lottie-player";
// import API from "../api";
// import trophyAnimation from "../assets/animations/trophy-success.json"; // Example

// export default function Profile() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchSubmissions = async () => {
//       try {
//         const res = await API.get("/quiz/user/submissions");
//         setData(res.data || []);
//       } catch (err) {
//         console.error("Error fetching profile:", err);
//       }
//     };
//     fetchSubmissions();
//   }, []);

//   return (
//     <div style={{ padding: 40 }}>
//       <h1>Your Quiz History</h1>
//       {data.map((sub, i) => {
//         const totalQuestions = sub.quiz?.questions?.length || 1;
//         const percentage = ((sub.score / totalQuestions) * 100).toFixed(1);
//         const isTopPerformer = percentage >= 90;

//         return (
//           <motion.div 
//             key={i} 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             style={{ 
//               padding: 20, 
//               marginBottom: 20, 
//               border: "2px solid #333", 
//               borderRadius: 12, 
//               position: "relative",
//               background: "#1a1a1a",
//               boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
//             }}
//           >
//             {isTopPerformer && (
//               <Player
//                 autoplay
//                 loop
//                 src={trophyAnimation}
//                 style={{ width: 100, height: 100, position: "absolute", top: -50, right: 0 }}
//               />
//             )}
//             <div style={{
//               position: "absolute",
//               top: 10,
//               left: 15,
//               background: "#4caf50",
//               color: "white",
//               padding: "8px 16px",
//               borderRadius: 20,
//               fontWeight: "bold",
//               boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
//               border: "3px solid #111"
//             }}>
//               #{i + 1}
//             </div>

//             <h3 style={{ margin: "0 0 10px 40px", color: "#4caf50" }}>
//               {sub.quiz?.title || "Unknown Quiz"}
//             </h3>
//             <p style={{ margin: "8px 0 8px 40px", color: "#aaa" }}>
//               <strong>Code:</strong> {sub.quiz?.code || "N/A"}
//             </p>
//             <p style={{ margin: "8px 0 8px 40px", fontSize: 18 }}>
//               <strong>Your Score:</strong> {sub.score} / {totalQuestions} 
//               <span style={{ color: isTopPerformer ? "#FFD700" : "#4caf50", fontWeight: "bold" }}>
//                 {" "}({percentage}%)
//               </span>
//             </p>
//             <p style={{ margin: "8px 0 8px 40px", color: "#888" }}>
//               <strong>Date:</strong> {new Date(sub.createdAt).toLocaleDateString()}
//             </p>
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import API from "../api";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// export default function Profile() {
//   const role = localStorage.getItem("role");
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (role === "admin") loadAdminData();
//     else loadStudentData();
//   }, [role]);

//   const loadStudentData = async () => {
//     try {
//       const res = await API.get("/quiz/user/submissions");
//       setData(res.data || []);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const loadAdminData = async () => {
//     try {
//       const res = await API.get("/quiz");
//       const quizzes = res.data;
//       const detailed = await Promise.all(
//         quizzes.map(async (q) => {
//           const subs = await API.get(`/quiz/${q._id}/submissions`).then(r => r.data || []);
//           const count = subs.length;
//           const avg = count > 0 ? (subs.reduce((s, sub) => s + sub.score, 0) / count).toFixed(1) : 0;
//           return { ...q, participants: count, averageScore: avg, submissions: subs };
//         })
//       );
//       setData(detailed);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) return (
//     <div style={{ background: "#000", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
//       <h2 style={{ color: "#ff6b35", fontSize: "40px" }}>Loading Your Legacy...</h2>
//     </div>
//   );

//   return (
//     <>
//       {/* <Navbar /> */}

//       <div style={{
//         background: "#000",
//         minHeight: "100vh",
//         color: "#fff",
//         fontFamily: "'Orbitron', sans-serif",
//         position: "relative",
//         overflow: "hidden"
//       }}>
//         {/* Background Glow */}
//         <div style={{
//           position: "absolute",
//           top: 0, left: 0, right: 0, bottom: 0,
//           background: "radial-gradient(circle at 20% 80%, rgba(255,107,53,0.4), transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,20,147,0.4), transparent 50%)",
//           filter: "blur(120px)",
//           opacity: 0.6
//         }} />

//         {/* Back Button - Squid Game Style */}
//         <motion.button
//           whileHover={{ scale: 1.1, boxShadow: "0 0 50px #00ffcc" }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => navigate("/student")}
//           style={{
//             position: "fixed",
//             top: "20px",
//             left: "20px",
//             padding: "14px 30px",
//             background: "#00ffcc",
//             color: "#000",
//             border: "none",
//             borderRadius: "12px",
//             fontSize: "18px",
//             fontWeight: "bold",
//             cursor: "pointer",
//             boxShadow: "0 0 40px #00ffcc",
//             zIndex: 1000,
//             textTransform: "uppercase",
//             letterSpacing: "2px"
//           }}
//         >
//           ← Back to Dashboard
//         </motion.button>

//         <div style={{ position: "relative", zIndex: 10, padding: "100px 20px 40px" }}>
//           <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
//             {/* Title */}
//             <motion.h1
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               style={{
//                 fontSize: "clamp(50px, 10vw, 90px)",
//                 textAlign: "center",
//                 background: "linear-gradient(45deg, #ff6b35, #ff0044)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 textShadow: "0 0 60px rgba(255,107,53,0.8)",
//                 margin: "0 0 60px",
//                 letterSpacing: "8px"
//               }}
//             >
//               {role === "admin" ? "ELIMINATION RECORDS" : "YOUR QUIZ HISTORY"}
//             </motion.h1>

//             {data.length === 0 ? (
//               <div style={{ textAlign: "center", padding: "100px 20px" }}>
//                 <h2 style={{ color: "#ff6b35", fontSize: "40px" }}>No Games Played Yet</h2>
//                 <p style={{ color: "#666", fontSize: "22px" }}>Survive your first game...</p>
//               </div>
//             ) : (
//               <div style={{ display: "grid", gap: "30px", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", maxWidth: "1200px", margin: "0 auto" }}>
//                 {role === "admin" ? (
//                   data.map((quiz) => (
//                     <motion.div
//                       key={quiz._id}
//                       whileHover={{ scale: 1.05 }}
//                       style={{
//                         background: "rgba(20,20,20,0.95)",
//                         padding: "30px",
//                         borderRadius: "20px",
//                         border: "2px solid #ff6b35",
//                         boxShadow: "0 0 50px rgba(255,107,53,0.3)"
//                       }}
//                     >
//                       <h3 style={{ color: "#ff6b35", fontSize: "28px" }}>{quiz.title}</h3>
//                       <p><strong>Code:</strong> <span style={{ color: "#00ffcc" }}>{quiz.code}</span></p>
//                       <p><strong>Eliminations:</strong> {quiz.participants}</p>
//                       <p><strong>Avg Score:</strong> {quiz.averageScore}</p>
//                     </motion.div>
//                   ))
//                 ) : (
//                   data.map((sub, i) => {
//                     const percentage = Math.round((sub.score / (sub.quiz?.questions?.length || 1)) * 100);
//                     const isTop = percentage >= 90;

//                     return (
//                       <motion.div
//                         key={i}
//                         initial={{ opacity: 0, x: -50 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: i * 0.1 }}
//                         whileHover={{ scale: 1.05 }}
//                         style={{
//                           background: "rgba(20,20,20,0.95)",
//                           padding: "30px",
//                           borderRadius: "20px",
//                           border: isTop ? "3px solid #FFD700" : "2px solid #333",
//                           boxShadow: isTop ? "0 0 70px rgba(255,215,0,0.6)" : "0 0 30px rgba(255,107,53,0.2)",
//                           position: "relative"
//                         }}
//                       >
//                         {isTop && (
//                           <div style={{
//                             position: "absolute",
//                             top: -12,
//                             right: 15,
//                             background: "#FFD700",
//                             color: "#000",
//                             padding: "8px 20px",
//                             borderRadius: "20px",
//                             fontWeight: "bold",
//                             fontSize: "14px"
//                           }}>
//                             TOP SURVIVOR
//                           </div>
//                         )}
//                         <h3 style={{ color: "#ff6b35" }}>{sub.quiz?.title}</h3>
//                         <p><strong>Score:</strong> {sub.score} / {sub.quiz?.questions?.length} ({percentage}%)</p>
//                         <p><strong>Date:</strong> {new Date(sub.createdAt).toLocaleDateString()}</p>
//                         <div style={{
//                           marginTop: "20px",
//                           fontSize: "40px",
//                           textAlign: "center",
//                           color: percentage >= 80 ? "#00ffcc" : percentage >= 50 ? "#ff6b35" : "#ff0044"
//                         }}>
//                           #{i + 1}
//                         </div>
//                       </motion.div>
//                     );
//                   })
//                 )}
//               </div>
//             )}
//           </motion.div>
//         </div>
//       </div>
//     </>

//   );
// }
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";  // ← Add this import
// import { motion } from "framer-motion";
// import API from "../api";
// import Navbar from "../components/Navbar";

// export default function Profile() {
//   const [user, setUser] = useState(null);
//   const [quizzes, setQuizzes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const role = localStorage.getItem("role");
  
//   const navigate = useNavigate();  // ← Declare navigate here

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         // User info
//         const userRes = await API.get("/auth/me");
//         setUser(userRes.data);

//         let quizData = [];

//         if (role === "admin") {
//           const quizRes = await API.get("/quiz");
//           quizData = quizRes.data || [];
//         } else {
//           const subRes = await API.get("/quiz/user/submissions");
//           quizData = subRes.data
//             .map(submission => submission.quiz)
//             .filter(Boolean);
//         }

//         setQuizzes(quizData);
//       } catch (err) {
//         console.error("Profile load failed:", err);
//         localStorage.clear();
//         alert("Session expired. Please login again.");
//         navigate("/login");  // Now it's defined!
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, [role]);}

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import API from "../api";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userRes = await API.get("/auth/me");
        setUser(userRes.data);

        let quizData = [];
        if (role === "admin") {
          const res = await API.get("/quiz");
          quizData = res.data || [];
        } else {
          const res = await API.get("/quiz/user/submissions");
          quizData = res.data || []; // submissions with populated quiz and score
        }
        setQuizzes(quizData);
      } catch (err) {
        console.error("Profile load failed:", err.response?.data?.error || err.message);
        localStorage.clear();
        alert("Session expired. Please login again.");
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [role, navigate]);

  if (loading) {
    return (
      <div style={{
        background: "#000",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#ff3366",
        fontSize: "40px",
      }}>
        Loading Profile...
      </div>
    );
  }

  return (
    <div style={{
      background: "#000",
      minHeight: "100vh",
      padding: "40px",
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ maxWidth: "1000px", margin: "0 auto" }}
      >
        {/* User Info */}
        <motion.div
          style={{
            background: "rgba(20,20,20,0.95)",
            padding: "50px",
            borderRadius: "24px",
            border: "2px solid #ff3366",
            boxShadow: "0 0 80px rgba(255,51,102,0.5)",
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <h1 style={{ fontSize: "56px", color: "#ff6b35" }}>
            {user?.name || "Player"}
          </h1>
          <p style={{ color: "#00ffcc", fontSize: "28px" }}>{user?.email}</p>
          <p style={{ color: "#ff69b4", fontSize: "22px" }}>
            Role: <strong>{role?.toUpperCase()}</strong>
          </p>
        </motion.div>

        {/* Quizzes Section */}
        <h2 style={{
          fontSize: "48px",
          textAlign: "center",
          color: "#ff3366",
          margin: "40px 0",
        }}>
          {role === "admin" ? "GAMES YOU CREATED" : "GAMES YOU PLAYED"}
        </h2>

        {quizzes.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px", color: "#666", fontSize: "32px" }}>
            No {role === "admin" ? "quizzes created" : "games played"} yet
          </div>
        ) : (
          <div style={{ display: "grid", gap: "30px", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
            {quizzes.map((item, i) => (
              <motion.div
                key={i}
                style={{
                  background: "rgba(30,30,30,0.95)",
                  padding: "30px",
                  borderRadius: "20px",
                  border: "2px solid #ff3366",
                  boxShadow: "0 0 50px rgba(255,51,102,0.4)",
                }}
              >
                <h3 style={{ color: "#ff6b35", fontSize: "26px" }}>
                  {role === "admin" ? item.title : item.quiz?.title}
                </h3>
                <p style={{ color: "#00ffcc" }}>
                  Code: <strong>{role === "admin" ? item.code : item.quiz?.code}</strong>
                </p>
                <p style={{ color: "#fff" }}>
                  Questions: {role === "admin" ? item.questions?.length : item.quiz?.questions?.length}
                </p>
                {role === "student" && (
                  <p style={{ color: "#ff69b4", fontWeight: "bold" }}>
                    Your Score: {item.score}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}