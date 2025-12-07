// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import API from "../api";
// // import "../styles/auth.css";

// // export default function Register() {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [role, setRole] = useState("student");
// //   const navigate = useNavigate();

// //   const submit = async () => {
// //     try {
// //       const res = await API.post("/auth/register", {
// //         name,
// //         email,
// //         password,
// //         role,
// //       });

// //       // Auto login after register
// //       localStorage.setItem("token", res.data.token);
// //       localStorage.setItem("role", res.data.role);

// //       alert("Registered & Logged in Successfully!");
// //       if (res.data.role === "admin") {
// //         navigate("/admin");
// //       } else {
// //         navigate("/student");
// //       }
// //     } catch (err) {
// //       console.log("Registration Error:", err.response?.data);
// //       alert(err.response?.data?.error || "Registration Failed – Check Console");
// //     }
// //   };

// //   return (
// //     <div className="auth-container">
// //       <div className="auth-box">
// //         <h2 style={{ color: "white" }}>Register</h2>

// //         <input
// //           className="auth-input"
// //           type="text"
// //           placeholder="Full Name"
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //         />
// //         <input
// //           className="auth-input"
// //           type="email"
// //           placeholder="Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //         />
// //         <input
// //           className="auth-input"
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //         />

// //         <select
// //           className="auth-input"
// //           value={role}
// //           onChange={(e) => setRole(e.target.value)}
// //           style={{ padding: "12px", borderRadius: 6 }}
// //         >
// //           <option value="student">Student</option>
// //           <option value="admin">Admin</option>
// //         </select>

// //         <button className="auth-btn" onClick={submit}>
// //           Register
// //         </button>

// //         <p
// //           onClick={() => navigate("/login")}
// //           style={{ color: "white", marginTop: "20px", cursor: "pointer" }}
// //         >
// //           Already have an account? Login
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }


// export default function Register() {
//   // ... states

//   // YEHI STYLE YAHAN BHI ADD KARO
//   const inputStyle = {
//     width: "100%",
//     padding: "18px 24px",
//     margin: "15px 0",
//     background: "#0f0f0f",
//     border: "1px solid #333",
//     borderRadius: "12px",
//     color: "#fff",
//     fontSize: "18px",
//     outline: "none",
//     transition: "all 0.3s",
//     boxShadow: "0 4px 15px rgba(0,0,0,0.6)"
//   };

//   const focusStyle = {
//     border: "1px solid #ff6b35",
//     boxShadow: "0 0 20px rgba(255,107,53,0.2)"
//   };

//   const handleFocus = (e) => Object.assign(e.target.style, focusStyle);
//   const handleBlur = (e) => Object.assign(e.target.style, { border: "1px solid #333", boxShadow: "0 4px 15px rgba(0,0,0,0.6)" });

//   // ... baaki code

//   return (
//     // inputs me onFocus aur onBlur laga do
//     <input style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
//   );
// }

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import API from "../api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email); // Simple email validation
  };

  const submit = async () => {
    if (!isValidEmail(email)) {
      return alert("Please enter a valid email (e.g., example@gmail.com)");
    }

    if (password.length < 6) {
      return alert("Password must be at least 6 characters");
    }

    try {
      const res = await API.post("/auth/register", { name, email, password, role });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("name", res.data.name);
      alert("Registered Successfully!");
      navigate(role === "admin" ? "/admin" : "/student");
    } catch (err) {
      const message = err.response?.data?.error || "Registration failed. Try a different email.";
      alert(message);
    }
  };

  return (
    <div style={{
      background: "#000",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Orbitron', sans-serif"
    }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          background: "rgba(20,20,20,0.95)",
          padding: "60px",
          borderRadius: "32px",
          border: "2px solid #ff3366",
          boxShadow: "0 0 100px rgba(255,51,102,0.5)",
          maxWidth: "500px",
          textAlign: "center"
        }}
      >
        <h1 style={{ fontSize: "64px", color: "#ff6b35", marginBottom: "40px" }}>
          REGISTER
        </h1>

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "20px",
            margin: "15px 0",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid #444",
            borderRadius: "16px",
            color: "white",
            fontSize: "22px"
          }}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "20px",
            margin: "15px 0",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid #444",
            borderRadius: "16px",
            color: "white",
            fontSize: "22px"
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "20px",
            margin: "15px 0",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid #444",
            borderRadius: "16px",
            color: "white",
            fontSize: "22px"
          }}
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{
            width: "100%",
            padding: "20px",
            margin: "15px 0",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid #444",
            borderRadius: "16px",
            color: "white",
            fontSize: "22px"
          }}
        >
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={submit}
          style={{
            padding: "20px 60px",
            fontSize: "28px",
            background: "#ff3366",
            color: "white",
            border: "none",
            borderRadius: "16px",
            cursor: "pointer",
            fontWeight: "bold",
            marginTop: "30px"
          }}
        >
          Register
        </motion.button>

        <p
          onClick={() => navigate("/login")}
          style={{ color: "#00ffcc", cursor: "pointer", fontSize: "20px", marginTop: "30px" }}
        >
          Already have an account? Login
        </p>
      </motion.div>
    </div>
  );
}