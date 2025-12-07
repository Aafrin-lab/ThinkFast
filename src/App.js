// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Landing from "./pages/Landing";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Profile from "./pages/Profile";

// import AdminDashboard from "./pages/AdminDashboard";
// import AdminCreateQuiz from "./pages/AdminCreateQuiz";
// import AdminQuizzesList from "./pages/AdminQuizzesList";

// import StudentDashboard from "./pages/StudentDashboard";
// import StudentHome from "./pages/StudentHome";
// import TakeQuiz from "./pages/TakeQuiz";

// import QuizPage from "./pages/QuizPage";
// import Leaderboard from "./pages/Leaderboard";

// import ProtectedRoute from "./components/ProtectedRoute";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/profile" element={<Profile />} />

//         <Route path="/quiz/:code" element={<TakeQuiz />} />
//         <Route path="/leaderboard/:code" element={<Leaderboard />} />
//         <Route path="/quizpage/:id" element={<QuizPage />} />

//         {/* Admin Routes */}
//         <Route
//           path="/admin"
//           element={
//             <ProtectedRoute allowedRoles={["admin"]}>
//               <AdminDashboard />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/admin/create"
//           element={
//             <ProtectedRoute allowedRoles={["admin"]}>
//               <AdminCreateQuiz />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/admin/quizzes"
//           element={
//             <ProtectedRoute allowedRoles={["admin"]}>
//               <AdminQuizzesList />
//             </ProtectedRoute>
//           }
//         />

//         {/* Student Routes */}
//         <Route
//           path="/student"
//           element={
//             <ProtectedRoute allowedRoles={["student"]}>
//               <StudentDashboard />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/student/home"
//           element={
//             <ProtectedRoute allowedRoles={["student"]}>
//               <StudentHome />
//             </ProtectedRoute>
//           }
//         />

//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import TakeQuiz from "./pages/TakeQuiz";
import AdminCreateQuiz from "./pages/AdminCreateQuiz";
import AdminQuizzesList from "./pages/AdminQuizzesList";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import StudentHome from "./pages/StudentHome";

import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/quiz/:code" element={<TakeQuiz />} />

        {/* Admin Routes */}
        <Route path="/admin" element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminDashboard />
          </ProtectedRoute>
        } />
        <Route path="/admin/create" element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminCreateQuiz />
          </ProtectedRoute>
        } />
        <Route path="/admin/quizzes" element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminQuizzesList />
          </ProtectedRoute>
        } />

        {/* Student Routes */}
        <Route path="/student" element={
          <ProtectedRoute allowedRoles={["student"]}>
            <StudentDashboard />
          </ProtectedRoute>
        } />
        <Route path="/student/home" element={
          <ProtectedRoute allowedRoles={["student"]}>
            <StudentHome />
          </ProtectedRoute>
        } />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}