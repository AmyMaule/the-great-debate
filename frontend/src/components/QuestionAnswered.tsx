import Answer from './Answer';

import { QuestionType } from '../types';

type QuestionAnsweredProps = {
  question: QuestionType,
  selectedAnswer: number
}

const QuestionAnswered = ({ question, selectedAnswer }: QuestionAnsweredProps) => {
  const answers = question.answers;

  const getVotePercentage = (answerID: number) => {
    return Math.round(answers[answerID].votes / (answers[0].votes + answers[1].votes) * 100);
  }

  return (
    <>
      <div className="votes-container">
        <Answer
          answerText={answers[0].answer_text}
          isSelectedAnswer={selectedAnswer === 0}
        />

        <div className="votes-bar-container">
          <div
            className="votes-bar"
            style={{width: getVotePercentage(0) + "%", border: getVotePercentage(0) === 0 || getVotePercentage(0) === 100 ? "none": ""}}
          />
        </div>
        
        <Answer
          answerText={answers[1].answer_text}
          isSelectedAnswer={selectedAnswer === 1}
        />

    </div>
    <div className="total-votes-container">
      <div className="total-votes-left">{answers[0].votes} votes</div>
      <div className="total-votes-right">{answers[1].votes} votes</div>
    </div>
    <div className="voter-agreement">
      {getVotePercentage(selectedAnswer)}% of voters agree with you
    </div>
  </>
  )
}

export default QuestionAnswered;
