import React, { useState } from "react";
import { motion } from "framer-motion";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function AdminCreateQuiz() {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([
    { text: "", options: ["", "", "", ""], correctIndex: 0 }
  ]);
  const [showCodePopup, setShowCodePopup] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");
  const navigate = useNavigate();

  const addQuestion = () => {
    setQuestions([...questions, { text: "", options: ["", "", "", ""], correctIndex: 0 }]);
  };

  const updateQuestion = (index, field, value) => {
    const newQuestions = [...questions];
    if (field === "correctIndex") {
      newQuestions[index].correctIndex = parseInt(value);
    } else if (field.startsWith("option")) {
      const optIndex = parseInt(field.split("-")[1]);
      newQuestions[index].options[optIndex] = value;
    } else {
      newQuestions[index][field] = value;
    }
    setQuestions(newQuestions);
  };

  const createQuiz = async () => {
    if (!title.trim()) return alert("Quiz title daal bhai!");
    if (questions.some(q => !q.text || q.options.some(opt => !opt.trim()))) {
      return alert("Saare questions aur options bhar do!");
    }

    try {
      const res = await API.post("/quiz/create", { title, questions });
      setGeneratedCode(res.data.quiz.code);
      setShowCodePopup(true);
    } catch (err) {
      alert("Quiz create nahi hua! Error: " + (err.response?.data?.error || err.message));
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(generatedCode);
    alert("Code copied: " + generatedCode);
  };

  return (
    <div style={{ background: "#000", minHeight: "100vh", padding: "40px", color: "white" }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ maxWidth: "900px", margin: "0 auto" }}
      >
        <h1 style={{ fontSize: "60px", textAlign: "center", color: "#ff3366", marginBottom: "40px" }}>
          CREATE QUIZ
        </h1>

        <input
          placeholder="Quiz Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%", padding: "20px", fontSize: "24px", borderRadius: "16px",
            background: "rgba(255,255,255,0.1)", border: "2px solid #ff3366", color: "white", marginBottom: "30px"
          }}
        />

        {questions.map((q, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            style={{
              background: "rgba(30,30,30,0.95)",
              padding: "30px",
              borderRadius: "20px",
              border: "2px solid #ff3366",
              marginBottom: "30px"
            }}
          >
            <input
              placeholder={`Question ${i + 1}`}
              value={q.text}
              onChange={(e) => updateQuestion(i, "text", e.target.value)}
              style={{ width: "100%", padding: "15px", fontSize: "20px", marginBottom: "15px", background: "rgba(255,255,255,0.1)", border: "1px solid #444", borderRadius: "12px", color: "white" }}
            />

            {q.options.map((opt, j) => (
              <div key={j} style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
                <input
                  placeholder={`Option ${j + 1}`}
                  value={opt}
                  onChange={(e) => updateQuestion(i, `option-${j}`, e.target.value)}
                  style={{ flex: 1, padding: "15px", background: "rgba(255,255,255,0.1)", border: "1px solid #444", borderRadius: "12px", color: "white" }}
                />
                <label style={{ marginLeft: "15px", color: "#00ffcc" }}>
                  <input
                    type="radio"
                    name={`correct-${i}`}
                    checked={q.correctIndex === j}
                    onChange={() => updateQuestion(i, "correctIndex", j)}
                  /> Correct
6                </label>
              </div>
            ))}
          </motion.div>
        ))}

        <div style={{ textAlign: "center", margin: "40px 0" }}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={addQuestion}
            style={{
              padding: "15px 40px", background: "#ff6b35", color: "white", border: "none",
              borderRadius: "50px", fontSize: "20px", marginRight: "20px", cursor: "pointer"
            }}
          >
            + Add Question
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={createQuiz}
            style={{
              padding: "20px 80px", background: "#ff3366", color: "white", border: "none",
              borderRadius: "50px", fontSize: "28px", fontWeight: "bold", cursor: "pointer"
            }}
          >
            CREATE QUIZ
          </motion.button>
        </div>
      </motion.div>

      {/* POPUP — QUIZ CODE DIKHEGA */}
      {showCodePopup && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
          background: "rgba(0,0,0,0.95)", display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 9999
        }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            style={{
              background: "linear-gradient(135deg, #ff3366, #ff6b35)",
              padding: "60px", borderRadius: "30px", textAlign: "center",
              border: "5px solid white", boxShadow: "0 0 100px rgba(255,51,102,0.8)"
            }}
          >
            <h1 style={{ fontSize: "80px", color: "white", marginBottom: "30px" }}>
              QUIZ CREATED!
            </h1>
            <div style={{
              background: "black", padding: "40px", borderRadius: "20px",
              fontSize: "100px", color: "#00ffcc", letterSpacing: "20px",
              fontWeight: "bold", margin: "30px 0"
            }}>
              {generatedCode}
            </div>
            <p style={{ fontSize: "28px", color: "white", marginBottom: "30px" }}>
              Ye code students ko do!
            </p>
            <div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={copyCode}
                style={{
                  padding: "15px 50px", background: "white", color: "black",
                  border: "none", borderRadius: "50px", fontSize: "24px", fontWeight: "bold",
                  marginRight: "20px", cursor: "pointer"
                }}
              >
                COPY CODE
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => { setShowCodePopup(false); navigate("/admin/quizzes"); }}
                style={{
                  padding: "15px 50px", background: "black", color: "white",
                  border: "3px solid white", borderRadius: "50px", fontSize: "24px",
                  fontWeight: "bold", cursor: "pointer"
                }}
              >
                DONE
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}