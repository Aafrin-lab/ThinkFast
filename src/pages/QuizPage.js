// import React, { useEffect, useState } from "react";
// import { Container, Button, Typography } from "@mui/material";
// import { useParams } from "react-router-dom";
// import API from "../api";

// export default function QuizPage() {
//   const { code } = useParams();
//   const [quiz, setQuiz] = useState(null);
//   const [answers, setAnswers] = useState([]);

//   useEffect(() => {
//     (async () => {
//       const res = await API.get(`/quiz/code/${code}`);
//       setQuiz(res.data);
//       setAnswers(Array(res.data.questions.length).fill(null));
//     })();
//   }, [code]);

//   const submit = async () => {
//     const res = await API.post(`/quiz/${quiz._id}/submit`, {
//       answers,
//       timeTakenSeconds: 20
//     });
//     alert("Your Score: " + res.data.score);
//     window.location = `/leaderboard/${quiz._id}`;
//   };

//   if (!quiz) return <div>Loading...</div>;

//   return (
//     <Container>
//       <Typography variant="h4" mt={3}>{quiz.title}</Typography>

//       {quiz.questions.map((q, i) => (
//         <div key={i}>
//           <Typography mt={2}>{i + 1}. {q.text}</Typography>

//           {q.options.map((opt, j) => (
//             <Button
//               key={j}
//               variant={answers[i] === j ? "contained" : "outlined"}
//               sx={{ margin: "5px" }}
//               onClick={() => {
//                 answers[i] = j;
//                 setAnswers([...answers]);
//               }}
//             >
//               {opt}
//             </Button>
//           ))}
//         </div>
//       ))}

//       <Button variant="contained" fullWidth sx={{ mt: 3 }} onClick={submit}>
//         Submit Quiz
//       </Button>
//     </Container>
//   );
// }


import React, { useEffect, useState } from "react";
import API from "../api";
import { useParams } from "react-router-dom";

export default function QuizPage() {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    API.get(`/quiz/id/${id}`).then(res => setQuiz(res.data)).catch(()=>setQuiz(null));
  }, [id]);

  // QuizPage.js (Final Working Version)
if (!quiz) return <div>Loading...</div>;

return (
  <div style={{ padding: 40 }}>
    <h2>{quiz.title}</h2>
    <p><strong>Code:</strong> {quiz.code}</p>
    <ol>
      {quiz.questions.map((q, i) => (
        <li key={i} style={{ marginBottom: 30 }}>
          <strong>{q.text || q.question || "No Question Text"}</strong>
          <ul style={{ marginTop: 10 }}>
            {(q.options || [q.optionA, q.optionB, q.optionC, q.optionD]).map((opt, idx) => (
              <li key={idx}>
                {opt || "Empty Option"} 
                {(q.correctIndex === idx || q.correct === String.fromCharCode(65 + idx)) && " ← Correct"}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  </div>
);
}