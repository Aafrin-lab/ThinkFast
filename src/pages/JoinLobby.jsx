import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

export default function JoinLobby() {
  const [playerName, setPlayerName] = useState("");
  const [quizCode, setQuizCode] = useState("");
  const [isAdmin, setIsAdmin] = useState(false); // Checkbox for admin
  const navigate = useNavigate();

  const join = () => {
    if (!playerName || !quizCode) return alert("Enter name and code!");
    localStorage.setItem("playerName", playerName);
    localStorage.setItem("quizCode", quizCode);
    localStorage.setItem("isAdmin", isAdmin);

    socket.emit("joinLobby", { quizCode, playerName });
    navigate("/lobby");
  };

  return (
    <div className="survival-container">
      <h1>Squid Game Quiz: Join Lobby</h1>
      <input placeholder="Your Name" value={playerName} onChange={e => setPlayerName(e.target.value)} />
      <input placeholder="Quiz Code" value={quizCode} onChange={e => setQuizCode(e.target.value)} />
      <label>
        <input type="checkbox" checked={isAdmin} onChange={e => setIsAdmin(e.target.checked)} /> I am Admin
      </label>
      <button onClick={join}>Join</button>
    </div>
  );
}