import { 
  QuestionType 
} from "../types";

type QuestionProps = {
  question: QuestionType,
  setQuestions: React.Dispatch<React.SetStateAction<QuestionType[]>>
};

const Question = ({ question, setQuestions }: QuestionProps) => {

  return (
    <div className="question-container">
      <div className="question-container-overlay" />
      <h3 className="question-title">{question.question_text}</h3>
    </div>
  )
}

export default Question;
