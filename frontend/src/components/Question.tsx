import { useState } from 'react';

import { devServer } from '../utilities';
import { 
  AnswerType,
  QuestionType 
} from "../types";

type QuestionProps = {
  question: QuestionType,
  setQuestions: React.Dispatch<React.SetStateAction<QuestionType[]>>
};

const Question = ({ question, setQuestions }: QuestionProps) => {
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleSubmitVote = (answer: AnswerType) => {
    devServer.patch(`/api/question/${question.id}/`, {answerID: answer.id}, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then(res => {
      setQuestions(prevQuestions => (
        prevQuestions.filter(question => {
          if (question.id === res.data.id) {
            question.answers = res.data.answers;
          }
          return question;
        })
      ));
      const selectedAnswer = answer.id === question.answers[0].id ? 0 : 1;
      setSelectedAnswer(selectedAnswer);
      setAnswered(true);
    })
    .catch(err => console.log(err));
  }

  return (
    <div className="question-container">
      <div className="question-container-overlay" />
      <h3 className="question-title">{question.question_text}</h3>
      {answered && selectedAnswer !== null
        ? <div className="votes-container"></div>
        : <div className="answers-container">
            {question?.answers?.map((answer: AnswerType) => (
              <div key={answer.answer_text} className="answer-container">
                <h4 className="answer-text" onClick={() => handleSubmitVote(answer)}>{answer.answer_text}</h4>
              </div>
            ))}
          </div>
      }
    </div>
  )
}

export default Question;
