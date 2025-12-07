// import React, { useEffect, useState } from "react";
// import API from "../api";

// export default function QuizList() {
//   const [quizzes, setQuizzes] = useState([]);

//   useEffect(() => {
//     const load = async () => {
//       const res = await API.get("/quiz");
//       setQuizzes(res.data);
//     };
//     load();
//   }, []);

//   return (
//     <div style={{ width: "80%", margin: "30px auto" }}>
//       <h2>All Quizzes</h2>
//       <a href="/create-quiz">
//         <button>Create Quiz</button>
//       </a>

//       <ul>
//         {quizzes.map((q) => (
//           <li key={q._id}>
//             <h3>{q.title}</h3>
//             <p>{q.questions.length} Questions</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import API from "../api";

export default function QuizList() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await API.get("/quiz");
      setQuizzes(res.data);
    };
    load();
  }, []);

  return (
    <div style={{ width: "80%", margin: "30px auto" }}>
      <h2>All Quizzes</h2>
      <a href="/admin/create"><button>Create Quiz</button></a>

      <ul>
        {quizzes.map((q) => (
          <li key={q._id} style={{ marginBottom: 12 }}>
            <h3>{q.title}</h3>
            <p>{q.questions.length} Questions</p>
            <a href={`/quiz/${q.code}`}><button>Join by Code</button></a>
            <a href={`/quizpage/${q._id}`} style={{ marginLeft: 8 }}><button>View</button></a>
          </li>
        ))}
      </ul>
    </div>
  );
}
