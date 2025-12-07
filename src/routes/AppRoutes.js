import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";

import StudentHome from "../pages/StudentHome";
import QuizPage from "../pages/QuizPage";
import Leaderboard from "../pages/Leaderboard";

import AdminCreateQuiz from "../pages/AdminCreateQuiz";
import AdminQuizzesList from "../pages/AdminQuizzesList";

import ProtectedRoute from "../components/ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* STUDENT ROUTES */}
      <Route path="/" element={
        <ProtectedRoute role="student">
          <StudentHome />
        </ProtectedRoute>
      }/>

      <Route path="/quiz/:code" element={
        <ProtectedRoute role="student">
          <QuizPage />
        </ProtectedRoute>
      }/>

      <Route path="/leaderboard/:id" element={
        <ProtectedRoute role="student">
          <Leaderboard />
        </ProtectedRoute>
      }/>

      {/* ADMIN ROUTES */}
      <Route path="/admin/create" element={
        <ProtectedRoute role="admin">
          <AdminCreateQuiz />
        </ProtectedRoute>
      }/>

      <Route path="/admin/quizzes" element={
        <ProtectedRoute role="admin">
          <AdminQuizzesList />
        </ProtectedRoute>
      }/>
    </Routes>
  );
}
