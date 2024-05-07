import { useState, useEffect } from 'react';
import axios from "axios";

import { QuestionType } from '../types';

import Question from './Question';

function App() {
  const [questions, setQuestions] = useState<QuestionType[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/questions/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then(res => setQuestions(res.data))
    .catch((error) => {
      console.log("Message:", error.message, "Code:", error.code, "Response:", error.response)
    });
  }, []);

  if (!questions.length) {
    return <div className="app-container" />;
  }

  return (
    <div className="app-container">
      <div className="main-content-container">
        <div className="questions-container">
          {questions.map(question => (
            <Question
              key={question.question_text}
              question={question}
              setQuestions={setQuestions}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
