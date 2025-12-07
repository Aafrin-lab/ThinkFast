import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ allowedRoles, children }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // Not logged in → send to login
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  

  // Role is not allowed → send to its dashboard
  if (!allowedRoles.includes(role)) {
    if (role === "admin") return <Navigate to="/admin" replace />;
    if (role === "student") return <Navigate to="/student" replace />;
  }

  return children;
}
