// // src/pages/Leaderboard.jsx
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import API from "../api";
// import io from "socket.io-client";

// const socket = io("http://localhost:5000", { transports: ["websocket"] });

// export default function Leaderboard() {
//   const { code } = useParams();
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Load initial data
//   useEffect(() => {
//     API.get(`/quiz/leaderboard/${code}`)
//       .then(res => {
//         const sorted = (res.data || []).sort((a, b) => b.score - a.score || a.createdAt - b.createdAt);
//         setData(sorted);
//         setLoading(false);
//       })
//       .catch(() => {
//         setData([]);
//         setLoading(false);
//       });

//     // Join room for live updates
//     socket.emit("joinQuiz", code);

//     // Listen for new submissions
//     socket.on("newSubmission", (newEntry) => {
//       setData(prev => {
//         const updated = [...prev, newEntry];
//         return updated
//           .sort((a, b) => b.score - a.score || new Date(a.createdAt) - new Date(b.createdAt))
//           .slice(0, 50); // Top 50 only
//       });
//     });

//     return () => {
//       socket.off("newSubmission");
//       socket.emit("leaveQuiz", code);
//     };
//   }, [code]);

//   const getMedal = (index) => {
//     if (index === 0) return "Gold Medal";
//     if (index === 1) return "Silver Medal";
//     if (index === 2) return "Bronze Medal";
//     return null;
//   };

//   if (loading) return <h2 style={{ padding: 40, textAlign: "center" }}>Loading Leaderboard...</h2>;

//   return (
//     <div style={{ padding: 40, maxWidth: 800, margin: "0 auto" }}>
//       <h1 style={{ textAlign: "center", marginBottom: 30, color: "#4caf50" }}>
//         Live Leaderboard
//       </h1>
//       <p style={{ textAlign: "center", fontSize: 20, marginBottom: 30 }}>
//         Quiz Code: <strong>{code}</strong>
//       </p>

//       {data.length === 0 ? (
//         <div style={{ textAlign: "center", padding: 50, background: "#222", borderRadius: 12 }}>
//           <h3>No entries yet</h3>
//           <p>Be the first to submit!</p>
//         </div>
//       ) : (
//         <div style={{ background: "#111", borderRadius: 16, overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
//           {data.map((s, i) => (
//             <div
//               key={i}
//               style={{
//                 padding: "18px 20px",
//                 background: i < 3 ? (i === 0 ? "#1e3a8a" : i === 1 ? "#1e40af" : "#1e3a8a") : "#1a1a1a",
//                 borderBottom: i !== data.length - 1 ? "1px solid #333" : "none",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 15,
//                 transition: "0.3s",
//                 animation: "slideIn 0.5s ease"
//               }}
//             >
//               {/* Rank */}
//               <div style={{
//                 width: 50,
//                 height: 50,
//                 borderRadius: "50%",
//                 background: i === 0 ? "#FFD700" : i === 1 ? "#C0C0C0" : i === 2 ? "#CD7F32" : "#1976d2",
//                 color: "white",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 fontSize: 22,
//                 fontWeight: "bold",
//                 boxShadow: "0 4px 15px rgba(0,0,0,0.4)"
//               }}>
//                 {i < 3 ? getMedal(i) : i + 1}
//               </div>

//               {/* Name & Score */}
//               <div style={{ flex: 1 }}>
//                 <h3 style={{ margin: 0, fontSize: 20, color: i < 3 ? "white" : "#fff" }}>
//                   {s.studentName}
//                 </h3>
//                 {i < 3 && <small style={{ color: "#aaa" }}>Top Performer</small>}
//               </div>

//               <div style={{
//                 fontSize: 28,
//                 fontWeight: "bold",
//                 color: i === 0 ? "#FFD700" : "#fff"        
//       }}>
//                 {s.score}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       <div style={{ textAlign: "center", marginTop: 30 }}>
//         <p style={{ color: "#4caf50", fontSize: 14 }}>
//           Live Updates • New submissions appear instantly!
//         </p>
//       </div>

//       <style jsx>{`
//         @keyframes slideIn {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import API from "../api";
import io from "socket.io-client";

const socket = io("http://localhost:5000", { transports: ["websocket"] });

export default function Leaderboard() {
  const { code } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get(`/quiz/leaderboard/${code}`)
      .then(res => {
        const sorted = (res.data || []).sort((a, b) => b.score - a.score || a.createdAt - b.createdAt);
        setData(sorted);
        setLoading(false);
      })
      .catch(() => {
        setData([]);
        setLoading(false);
      });

    socket.emit("joinQuiz", code);

    socket.on("newSubmission", (newEntry) => {
      setData(prev => {
        const updated = [...prev, newEntry];
        return updated.sort((a, b) => b.score - a.score || a.createdAt - b.createdAt);
      });
    });

    return () => {
      socket.off("newSubmission");
    };
  }, [code]);

  const getMedal = (i) => {
    if (i === 0) return "🥇";
    if (i === 1) return "🥈";
    if (i === 2) return "🥉";
    return "";
  };

  if (loading) return <h2 style={{ padding: 20 }}>Loading leaderboard...</h2>;

  return (
    <div style={{ padding: 40 }}>
      <h1>Leaderboard for Quiz {code}</h1>
      {data.length === 0 ? (
        <p>No submissions yet</p>
      ) : (
        <div>
          {data.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              style={{
                display: "flex",
                alignItems: "center",
                padding: 20,
                marginBottom: 15,
                borderRadius: 12,
                background: i < 3 ? "linear-gradient(135deg, #FFD700, #FF9800)" : "#222",
                color: i < 3 ? "black" : "white",
                boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
              }}
            >
              <div style={{ fontSize: 32, marginRight: 20 }}>
                {i < 3 ? getMedal(i) : i + 1}
              </div>

              <div style={{ flex: 1 }}>
                <h3 style={{ margin: 0, fontSize: 20, color: i < 3 ? "black" : "#fff" }}>
                  {s.studentName}
                </h3>
                {i < 3 && <small style={{ color: i < 3 ? "black" : "#aaa" }}>Top Performer</small>}
              </div>

              <div style={{
                fontSize: 28,
                fontWeight: "bold",
                color: i === 0 ? "#FFD700" : "#fff"
              }}>
                {s.score}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <div style={{ textAlign: "center", marginTop: 30 }}>
        <p style={{ color: "#4caf50", fontSize: 14 }}>
          Live Updates • New submissions appear instantly!
        </p>
      </div>
    </div>
  );
}