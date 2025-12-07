// // // src/pages/TakeQuiz.js  (FINAL 100% WORKING VERSION)

// // import React, { useEffect, useState } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import API from "../api";

// // export default function TakeQuiz() {
// //   const { code } = useParams();
// //   const navigate = useNavigate();

// //   const [quiz, setQuiz] = useState(null);
// //   const [answers, setAnswers] = useState([]);
// //   const [name, setName] = useState("");
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState("");
// //   const [submitting, setSubmitting] = useState(false);

// //   useEffect(() => {
// //     const fetchQuiz = async () => {
// //       try {
// //         const res = await API.get(`/quiz/code/${code}`);
// //         setQuiz(res.data);
// //         setAnswers(new Array(res.data.questions.length).fill(-1));
// //         setLoading(false);
// //       } catch (err) {
// //         setError("Invalid or Expired Quiz Code");
// //         setLoading(false);
// //       }
// //     };
// //     fetchQuiz();
// //   }, [code]);

// //   const handleAnswer = (qIndex, optionIndex) => {
// //     const newAnswers = [...answers];
// //     newAnswers[qIndex] = optionIndex;
// //     setAnswers(newAnswers);
// //   };

// //   const submitQuiz = async () => {
// //     if (!name.trim()) return alert("Please enter your name");
// //     if (answers.includes(-1)) return alert("Answer all questions!");

// //     setSubmitting(true);

// //     try {
// //       // Step 1: Submit to old leaderboard (public)
// //       const publicRes = await API.post("/quiz/submit", {
// //         quizCode: code,
// //         studentName: name,
// //         answers,
// //       });

// //       const score = publicRes.data.score;

// //       // Step 2: Save full submission for Profile (protected)
// //       const token = localStorage.getItem("token");
// //       if (token) {
// //         await API.post(
// //           "/quiz/user/submit", // Yeh naya route bana dena (neeche diya hai)
// //           {
// //             quizId: quiz._id,
// //             answers,
// //             score,
// //             timeTakenSeconds: 120, // Ya timer se le sakte ho
// //           },
// //           {
// //             headers: { Authorization: `Bearer ${token}` },
// //           }
// //         );
// //       }

// //       alert(`Quiz Submitted! Your Score: ${score}/${quiz.questions.length}`);
// //       navigate("/profile"); // Profile pe redirect
// //     } catch (err) {
// //       console.error(err);
// //       alert("Submission failed. Try again.");
// //     } finally {
// //       setSubmitting(false);
// //     }
// //   };

// //   if (loading) return <div style={{ padding: 40, fontSize: 24 }}>Loading Quiz...</div>;
// //   if (error)
// //     return (
// //       <div style={{ padding: 40, textAlign: "center" }}>
// //         <h2 style={{ color: "red" }}>{error}</h2>
// //         <button onClick={() => navigate("/student/home")}>Back</button>
// //       </div>
// //     );

// //   return (
// //     <div style={{ padding: 40, maxWidth: 900, margin: "0 auto" }}>
// //       <h1 style={{ textAlign: "center", color: "#4caf50" }}>{quiz.title}</h1>
// //       <p style={{ textAlign: "center", fontSize: 18 }}>Code: <strong>{quiz.code}</strong></p>

// //       <div style={{ margin: "20px 0", padding: 15, background: "#222", borderRadius: 8 }}>
// //         <input
// //           type="text"
// //           placeholder="Enter Your Name"
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //           style={{ width: "100%", padding: 12, fontSize: 18, borderRadius: 6 }}
// //         />
// //       </div>

// //       {quiz.questions.map((q, i) => (
// //         <div
// //           key={i}
// //           style={{
// //             marginBottom: 30,
// //             padding: 20,
// //             border: "2px solid #333",
// //             borderRadius: 12,
// //             background: "#1a1a1a",
// //           }}
// //         >
// //           <h3 style={{ margin: "0 0 15px 0" }}>
// //             {i + 1}. {q.text}
// //           </h3>
// //           <div style={{ display: "grid", gap: 12 }}>
// //             {q.options.map((opt, j) => (
// //               <label
// //                 key={j}
// //                 style={{
// //                   display: "flex",
// //                   alignItems: "center",
// //                   padding: 12,
// //                   background: answers[i] === j ? "#1976d2" : "#333",
// //                   borderRadius: 8,
// //                   cursor: "pointer",
// //                   transition: "0.3s",
// //                 }}
// //               >
// //                 <input
// //                   type="radio"
// //                   name={`q${i}`}
// //                   checked={answers[i] === j}
// //                   onChange={() => handleAnswer(i, j)}
// //                   style={{ marginRight: 12 }}
// //                 />
// //                 <span style={{ fontSize: 17 }}>{opt}</span>
// //               </label>
// //             ))}
// //           </div>
// //         </div>
// //       ))}

// //       <div style={{ textAlign: "center", marginTop: 40 }}>
// //         <button
// //           onClick={submitQuiz}
// //           disabled={submitting}
// //           style={{
// //             padding: "15px 50px",
// //             fontSize: 20,
// //             background: submitting ? "#666" : "#1976d2",
// //             color: "white",
// //             border: "none",
// //             borderRadius: 8,
// //             cursor: submitting ? "not-allowed" : "pointer",
// //           }}
// //         >
// //           {submitting ? "Submitting..." : "Submit Quiz"}
// //         </button>
// //         // Success state add करो: const [showSuccess, setShowSuccess] = useState(false);
// // // Submit के बाद: setShowSuccess(true);

// // {showSuccess && (
// //   <motion.div
// //     initial={{ scale: 0, rotate: 180 }}
// //     animate={{ scale: 1, rotate: 0 }}
// //     transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
// //     style={{ textAlign: "center", marginTop: 40, padding: 20 }}
// //   >
// //     <Player
// //       autoplay
// //       loop={false}
// //       keepLastFrame
// //       src="https://assets4.lottiefiles.com/packages/lf20_jgxaqypp.json"  // Trophy + Confetti
// //       style={{ width: 250, height: 250, margin: "0 auto" }}
// //     />
// //     <motion.h2
// //       initial={{ y: 20, opacity: 0 }}
// //       animate={{ y: 0, opacity: 1 }}
// //       transition={{ delay: 1 }}
// //       style={{ color: "#FFD700", fontSize: 28, marginTop: 10 }}
// //     >
// //       🎉 Amazing! Score: {score}/10
// //     </motion.h2>
// //     <motion.button
// //       whileHover={{ scale: 1.05 }}
// //       onClick={() => navigate(`/leaderboard/${code}`)}
// //       style={{ marginTop: 15, padding: "12px 24px", background: "#4caf50", color: "white", border: "none", borderRadius: 8 }}
// //     >
// //       View Leaderboard
// //     </motion.button>
// //   </motion.div>
// // )}
// //       </div>
// //     </div>
// //   );
// // }
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Player } from "@lottiefiles/react-lottie-player"; // Ensure installed
// import API from "../api";
// import trophyAnimation from "../assets/animations/trophy-success.json"; // Update path

// export default function TakeQuiz() {
//   const { code } = useParams();
//   const navigate = useNavigate();

//   const [quiz, setQuiz] = useState(null);
//   const [answers, setAnswers] = useState([]);
//   const [name, setName] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [submitting, setSubmitting] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [score, setScore] = useState(0); // Added for success display

//   useEffect(() => {
//     const fetchQuiz = async () => {
//       try {
//         const res = await API.get(`/quiz/code/${code}`);
//         setQuiz(res.data);
//         setAnswers(new Array(res.data.questions.length).fill(-1));
//         setLoading(false);
//       } catch (err) {
//         setError("Invalid or Expired Quiz Code");
//         setLoading(false);
//       }
//     };
//     fetchQuiz();
//   }, [code]);

//   const handleAnswer = (qIndex, optionIndex) => {
//     const newAnswers = [...answers];
//     newAnswers[qIndex] = optionIndex;
//     setAnswers(newAnswers);
//   };

//   const submitQuiz = async () => {
//     if (!name.trim()) return alert("Enter your name");
//     if (answers.some(a => a === -1)) return alert("Answer all questions");

//     setSubmitting(true);
//     try {
//       const res = await API.post(`/quiz/submit/${code}`, { name, answers });
//       setScore(res.data.score);
//       setShowSuccess(true);
//     } catch (err) {
//       alert(err.response?.data?.error || "Submission failed");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;
//   if (!quiz) return <div>Quiz not found</div>;

//   return (
//     <div style={{ padding: 40 }}>
//       {!showSuccess ? (
//         <>
//           <h2>{quiz.title}</h2>
//           <input
//             type="text"
//             placeholder="Your Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             style={{ marginBottom: 20, padding: 10 }}
//           />

//           {quiz.questions.map((q, i) => (
//             <div key={i} style={{ marginBottom: 30 }}>
//               <h3>{q.text}</h3>
//               {q.options.map((opt, j) => (
//                 <motion.button
//                   key={j}
//                   onClick={() => handleAnswer(i, j)}
//                   whileHover={{ scale: 1.05 }}
//                   style={{
//                     display: "block",
//                     margin: "10px 0",
//                     padding: 10,
//                     background: answers[i] === j ? "#4caf50" : "#2196f3",
//                     color: "white",
//                     border: "none",
//                     borderRadius: 8
//                   }}
//                 >
//                   {opt}
//                 </motion.button>
//               ))}
//             </div>
//           ))}

//           <motion.button
//             onClick={submitQuiz}
//             disabled={submitting}
//             whileHover={{ scale: 1.1 }}
//             style={{ padding: "12px 24px", background: "#ff9800", color: "white", border: "none", borderRadius: 8 }}
//           >
//             {submitting ? "Submitting..." : "Submit Quiz"}
//           </motion.button>
//         </>
//       ) : (
//         <motion.div
//           initial={{ scale: 0, rotate: 180 }}
//           animate={{ scale: 1, rotate: 0 }}
//           transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
//           style={{ textAlign: "center", marginTop: 40, padding: 20 }}
//         >
//           <Player
//             autoplay
//             loop={false}
//             keepLastFrame
//             src={trophyAnimation}  // Your JSON file
//             style={{ width: 250, height: 250, margin: "0 auto" }}
//           />
//           <motion.h2
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 1 }}
//             style={{ color: "#FFD700", fontSize: 28, marginTop: 10 }}
//           >
//             🎉 Amazing! Score: {score}/{quiz.questions.length}
//           </motion.h2>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             onClick={() => navigate(`/leaderboard/${code}`)}
//             style={{ marginTop: 15, padding: "12px 24px", background: "#4caf50", color: "white", border: "none", borderRadius: 8 }}
//           >
//             View Leaderboard
//           </motion.button>
//         </motion.div>
//       )}
//     </div>
//   );
// }

// useEffect(() => {
//   socket.on("eliminated", (msg) => {
//     alert(msg);
//     window.location.href = "/eliminated";
//   });
// }, []);


import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import API from "../api";

export default function TakeQuiz() {
  const { code } = useParams();
  const navigate = useNavigate();

  const [quiz, setQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);

  // Fetch quiz by code
  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const res = await API.get(`/quiz/code/${code}`);
        setQuiz(res.data);
        setAnswers(new Array(res.data.questions.length).fill(null));
      } catch (err) {
        alert("Quiz not found!");
        navigate("/");
      }
    };
    fetchQuiz();
  }, [code, navigate]);

  // Handle option select
  const selectOption = (index) => {
    if (quizEnded) return;
    setSelectedOption(index);
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = index;
    setAnswers(newAnswers);
  };

  // Go to next question
  const nextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      endQuiz();
    }
  };

  // End quiz and submit
  const endQuiz = async () => {
    if (submitting || quizEnded) return;
    setSubmitting(true);

    try {
      let score = 0;
      answers.forEach((ans, i) => {
        if (ans === quiz.questions[i].correctIndex) score++;
      });

      // SAVE SUBMISSION TO BACKEND
      await API.post("/quiz/submit", {
        quizId: quiz._id,
        score: score,
        totalQuestions: quiz.questions.length,
      });

      setQuizEnded(true);
      alert(`Quiz Complete! Your Score: ${score}/${quiz.questions.length}`);
      navigate("/profile");
    } catch (err) {
      console.error("Submit failed:", err);
      alert("Failed to save score. Try again.");
      setSubmitting(false);
    }
  };

  if (!quiz) {
    return (
      <div style={{ color: "#ff3366", textAlign: "center", marginTop: "100px", fontSize: "32px" }}>
        Loading Quiz...
      </div>
    );
  }

  const q = quiz.questions[currentQuestion];

  return (
    <div style={{
      background: "#000",
      minHeight: "100vh",
      color: "white",
      padding: "40px",
      fontFamily: "'Orbitron', sans-serif",
    }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "48px", textAlign: "center", color: "#ff6b35" }}>
          {quiz.title}
        </h1>
        <p style={{ textAlign: "center", color: "#00ffcc", fontSize: "20px" }}>
          Question {currentQuestion + 1} of {quiz.questions.length}
        </p>

        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          style={{
            background: "rgba(30,30,30,0.95)",
            padding: "40px",
            borderRadius: "20px",
            border: "2px solid #ff3366",
            margin: "40px 0",
          }}
        >
          <h2 style={{ fontSize: "32px", marginBottom: "30px", color: "#ff69b4" }}>
            {q.text}
          </h2>

          <div style={{ display: "grid", gap: "20px" }}>
            {q.options.map((opt, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => selectOption(i)}
                disabled={quizEnded}
                style={{
                  padding: "20px",
                  fontSize: "22px",
                  background: selectedOption === i ? "#ff3366" : "rgba(255,255,255,0.1)",
                  border: selectedOption === i ? "3px solid #fff" : "2px solid #444",
                  borderRadius: "16px",
                  color: "white",
                  cursor: quizEnded ? "not-allowed" : "pointer",
                  textAlign: "left",
                }}
              >
                {opt}
              </motion.button>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextQuestion}
              disabled={selectedOption === null || submitting}
              style={{
                padding: "18px 60px",
                fontSize: "28px",
                background: selectedOption === null ? "#444" : "#ff3366",
                color: "white",
                border: "none",
                borderRadius: "16px",
                cursor: selectedOption === null ? "not-allowed" : "pointer",
              }}
            >
              {currentQuestion === quiz.questions.length - 1 ? "Submit Quiz" : "Next Question"}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}