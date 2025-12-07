import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

export default function SurvivalQuiz() {
  const [question, setQuestion] = useState(null);
  const [showSplash, setShowSplash] = useState(false);
  const quizCode = localStorage.getItem("quizCode");
  const navigate = useNavigate();

  useEffect(() => {
    socket.on("nextQuestion", setQuestion);
    socket.on("correctAnswer", () => alert("Green Light! Proceed."));
    socket.on("eliminated", () => {
      setShowSplash(true);
      const audio = new Audio("/gunshot.mp3"); // Add MP3
      audio.play();
      setTimeout(() => navigate("/eliminated"), 1500);
    });
    socket.on("survivalWinner", winner => navigate("/winner"));
    socket.on("playerEliminated", () => {
      const buzzer = new Audio("/buzzer.mp3");
      buzzer.play();
    });

    return () => { /* Cleanup listeners */ };
  }, [navigate]);

  const submit = (answer) => {
    socket.emit("submitAnswer", { quizCode, answer });
  };

  if (!question) return <div>Waiting for next question...</div>;

  return (
    <div className="survival-container">
      <h1>{question.text}</h1>
      {question.options.map((opt, idx) => (
        <button key={idx} onClick={() => submit(idx)} className="green-light">{opt}</button>
      ))}
      {showSplash && <div className="blood-splash" />}
      <audio src="/tension-music.mp3" autoPlay loop />
    </div>
  );
}