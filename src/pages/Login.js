// // // import React, { useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import API from "../api";
// // // import "../styles/auth.css";

// // // export default function Register() {
// // //   const [name, setName] = useState("");
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [role, setRole] = useState("student");
// // //   const navigate = useNavigate();

// // //   const submit = async () => {
// // //     try {
// // //       const res = await API.post("/auth/register", {
// // //         name,
// // //         email,
// // //         password,
// // //         role,
// // //       });

// // //       // Auto login after register
// // //       localStorage.setItem("token", res.data.token);
// // //       localStorage.setItem("role", res.data.role);

// // //       alert("Registered & Logged in Successfully!");
// // //       if (res.data.role === "admin") {
// // //         navigate("/admin");
// // //       } else {
// // //         navigate("/student");
// // //       }
// // //     } catch (err) {
// // //       console.log("Registration Error:", err.response?.data);
// // //       alert(err.response?.data?.error || "Registration Failed – Check Console");
// // //     }
// // //   };

// // //   return (
// // //     <div className="auth-container">
// // //       <div className="auth-box">
// // //         <h2 style={{ color: "white" }}>Register</h2>

// // //         <input
// // //           className="auth-input"
// // //           type="text"
// // //           placeholder="Full Name"
// // //           value={name}
// // //           onChange={(e) => setName(e.target.value)}
// // //         />
// // //         <input
// // //           className="auth-input"
// // //           type="email"
// // //           placeholder="Email"
// // //           value={email}
// // //           onChange={(e) => setEmail(e.target.value)}
// // //         />
// // //         <input
// // //           className="auth-input"
// // //           type="password"
// // //           placeholder="Password"
// // //           value={password}
// // //           onChange={(e) => setPassword(e.target.value)}
// // //         />

// // //         <select
// // //           className="auth-input"
// // //           value={role}
// // //           onChange={(e) => setRole(e.target.value)}
// // //           style={{ padding: "12px", borderRadius: 6 }}
// // //         >
// // //           <option value="student">Student</option>
// // //           <option value="admin">Admin</option>
// // //         </select>

// // //         <button className="auth-btn" onClick={submit}>
// // //           Register
// // //         </button>

// // //         <p
// // //           onClick={() => navigate("/login")}
// // //           style={{ color: "white", marginTop: "20px", cursor: "pointer" }}
// // //         >
// // //           Already have an account? Login
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { motion } from "framer-motion";
// // import API from "../api";

// // export default function Login() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const navigate = useNavigate();

// //   const submit = async () => {
// //     try {
// //       const res = await API.post("/auth/login", { email, password });
// //       localStorage.setItem("token", res.data.token);
// //       localStorage.setItem("role", res.data.role);
// //       res.data.role === "admin" ? navigate("/admin") : navigate("/student");
// //     } catch (err) {
// //       alert(err.response?.data?.error || "Login Failed");
// //     }
// //   };

// //   return (
// //     <div style={{
// //       background: "#000",
// //       minHeight: "100vh",
// //       display: "flex",
// //       alignItems: "center",
// //       justifyContent: "center",
// //       position: "relative",
// //       overflow: "hidden",
// //       fontFamily: "'Orbitron', sans-serif"
// //     }}>
// //       {/* Background Glow */}
// //       <div style={{
// //         position: "absolute",
// //         top: "50%",
// //         left: "50%",
// //         width: "800px",
// //         height: "800px",
// //         background: "radial-gradient(circle, rgba(255,107,53,0.2), transparent 70%)",
// //         transform: "translate(-50%, -50%)",
// //         filter: "blur(120px)"
// //       }} />

// //       <motion.div
// //         initial={{ scale: 0.8, opacity: 0 }}
// //         animate={{ scale: 1, opacity: 1 }}
// //         style={{
// //           background: "rgba(15,15,15,0.95)",
// //           padding: "60px 50px",
// //           borderRadius: "24px",
// //           boxShadow: "0 0 80px rgba(255,107,53,0.4)",
// //           border: "2px solid #333",
// //           width: "100%",
// //           maxWidth: "500px",
// //           textAlign: "center",
// //           position: "relative",
// //           zIndex: 10
// //         }}
// //       >
// //         <motion.h1
// //           initial={{ y: -40 }}
// //           animate={{ y: 0 }}
// //           style={{
// //             fontSize: "72px",
// //             fontWeight: "900",
// //             background: "linear-gradient(45deg, #ff6b35, #ff3366)",
// //             WebkitBackgroundClip: "text",
// //             WebkitTextFillColor: "transparent",
// //             textShadow: "0 0 40px rgba(255,107,53,0.6)",
// //             margin: "0 0 50px"
// //           }}
// //         >
// //           LOGIN
// //         </motion.h1>

// //         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
// //           <input
// //             type="email"
// //             placeholder="Email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             style={{
// //               width: "100%",
// //               padding: "18px 24px",
// //               margin: "15px 0",
// //               background: "#111",
// //               border: "2px solid #333",
// //               borderRadius: "12px",
// //               color: "#00ffcc",
// //               fontSize: "20px",
// //               outline: "none",
// //               boxShadow: "0 0 20px rgba(0,255,204,0.2)"
// //             }}
// //           />
// //           <input
// //             type="password"
// //             placeholder="Password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             style={{
// //               width: "100%",
// //               padding: "18px 24px",
// //               margin: "15px 0",
// //               background: "#111",
// //               border: "2px solid #333",
// //               borderRadius: "12px",
// //               color: "#00ffcc",
// //               fontSize: "20px",
// //               outline: "none",
// //               boxShadow: "0 0 20px rgba(0,255,204,0.2)"
// //             }}
// //           />

// //           <motion.button
// //             whileHover={{ scale: 1.05, boxShadow: "0 0 50px #ff6b35" }}
// //             whileTap={{ scale: 0.95 }}
// //             onClick={submit}
// //             style={{
// //               width: "100%",
// //               padding: "20px",
// //               margin: "30px 0",
// //               background: "#ff6b35",
// //               color: "white",
// //               border: "none",
// //               borderRadius: "12px",
// //               fontSize: "24px",
// //               fontWeight: "bold",
// //               cursor: "pointer",
// //               boxShadow: "0 0 40px #ff6b35"
// //             }}
// //           >
// //             LOGIN
// //           </motion.button>

// //           <p
// //             onClick={() => navigate("/register")}
// //             style={{
// //               color: "#ff69b4",
// //               cursor: "pointer",
// //               fontSize: "18px",
// //               marginTop: "20px"
// //             }}
// //           >
// //             Don't have an account? <strong>Join Game</strong>
// //           </p>
// //         </motion.div>
// //       </motion.div>
// //     </div>
// //   );
// // }
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import API from "../api";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   // YE STYLE YAHAN ADD KARO (component ke andar)
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

//   const handleFocus = (e) => {
//     Object.assign(e.target.style, focusStyle);
//   };

//   const handleBlur = (e) => {
//     Object.assign(e.target.style, {
//       border: "1px solid #333",
//       boxShadow: "0 4px 15px rgba(0,0,0,0.6)"
//     });
//   };

//   const submit = async () => {
//     // ... tumhara login code
//   };

//   return (
//     // ... tumhara return
//     <input
//       type="email"
//       placeholder="Email"
//       value={email}
//       onChange={(e) => setEmail(e.target.value)}
//       style={inputStyle}
//       onFocus={handleFocus}
//       onBlur={handleBlur}
//     />
//     // baaki inputs bhi same
//   );
// }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import API from "../api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      res.data.role === "admin" ? navigate("/admin") : navigate("/student");
    } catch (err) {
      alert(err.response?.data?.error || "Login Failed");
    }
  };

  return (
    <div style={{
      background: "#000",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'Orbitron', sans-serif"
    }}>
      {/* Background Glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "800px",
        height: "800px",
        background: "radial-gradient(circle, rgba(255,107,53,0.2), transparent 70%)",
        transform: "translate(-50%, -50%)",
        filter: "blur(120px)"
      }} />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        style={{
          background: "rgba(15,15,15,0.95)",
          padding: "60px 50px",
          borderRadius: "24px",
          boxShadow: "0 0 80px rgba(255,107,53,0.4)",
          border: "2px solid #333",
          width: "100%",
          maxWidth: "500px",
          textAlign: "center",
          position: "relative",
          zIndex: 10
        }}
      >
        <motion.h1
          initial={{ y: -40 }}
          animate={{ y: 0 }}
          style={{
            fontSize: "72px",
            fontWeight: "900",
            background: "linear-gradient(45deg, #ff6b35, #ff3366)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 40px rgba(255,107,53,0.6)",
            margin: "0 0 50px"
          }}
        >
          LOGIN
        </motion.h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "18px 24px",
              margin: "15px 0",
              background: "#111",
              border: "2px solid #333",
              borderRadius: "12px",
              color: "#00ffcc",
              fontSize: "20px",
              outline: "none",
              boxShadow: "0 0 20px rgba(0,255,204,0.2)"
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "18px 24px",
              margin: "15px 0",
              background: "#111",
              border: "2px solid #333",
              borderRadius: "12px",
              color: "#00ffcc",
              fontSize: "20px",
              outline: "none",
              boxShadow: "0 0 20px rgba(0,255,204,0.2)"
            }}
          />

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 50px #ff6b35" }}
            whileTap={{ scale: 0.95 }}
            onClick={submit}
            style={{
              width: "100%",
              padding: "20px",
              margin: "30px 0",
              background: "#ff6b35",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontSize: "24px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 0 40px #ff6b35"
            }}
          >
            LOGIN
          </motion.button>

          <p
            onClick={() => navigate("/register")}
            style={{
              color: "#ff69b4",
              cursor: "pointer",
              fontSize: "18px",
              marginTop: "20px"
            }}
          >
            Don't have an account? <strong>Register</strong>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}