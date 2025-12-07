import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

export default function Spectator() {
  const { code } = useParams();
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    socket.emit("joinQuiz", code); // Join as spectator (no player add)
    socket.on("updatePlayers", setPlayers);

    return () => socket.off("updatePlayers");
  }, [code]);

  return (
    <div className="survival-container">
      <h1>Spectator Mode: {code}</h1>
      <h2>Remaining Players: {players.length}</h2>
      <ul>{players.map(p => <li key={p.id}>{p.name}</li>)}</ul>
    </div>
  );
}