import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

export default function LobbyScreen() {
  const [players, setPlayers] = useState([]);
  const quizCode = localStorage.getItem("quizCode");
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  const navigate = useNavigate();

  useEffect(() => {
    socket.on("lobbyPlayers", setPlayers);
    socket.on("survivalStarted", () => navigate("/survival-quiz"));

    return () => {
      socket.off("lobbyPlayers");
      socket.off("survivalStarted");
    };
  }, [navigate]);

  const start = () => socket.emit("startSurvivalQuiz", quizCode);

  return (
    <div className="survival-container">
      <h1>Lobby: {quizCode}</h1>
      <h2>Players ({players.length}/100):</h2>
      <ul>{players.map(p => <li key={p.id}>{p.name}</li>)}</ul>
      {isAdmin && <button onClick={start}>Start Survival Quiz</button>}
      <audio src="/tension-music.mp3" autoPlay loop /> {/* Add your MP3 file */}
    </div>
  );
}