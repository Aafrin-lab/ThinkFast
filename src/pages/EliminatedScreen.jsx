import React from "react";
import { useNavigate } from "react-router-dom";

export default function EliminatedScreen() {
  const navigate = useNavigate();

  return (
    <div className="survival-container red-light">
      <h1>ELIMINATED 💀</h1>
      <p>Wrong Answer!</p>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}