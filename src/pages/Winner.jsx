import React from "react";
import { useNavigate } from "react-router-dom";

export default function Winner() {
  const navigate = useNavigate();

  return (
    <div className="survival-container green-light">
      <h1>🏆 YOU WIN!</h1>
      <p>Last Survivor!</p>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}