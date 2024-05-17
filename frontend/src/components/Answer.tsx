type AnswerProps = {
  answerText: string,
  isSelectedAnswer: boolean
}

const Answer = ({ answerText, isSelectedAnswer }: AnswerProps) => {
  return (
    <div className={`${isSelectedAnswer ? "votes-answer-text-selected" : "votes-answer-text"}`}>
      {answerText}
    </div>
  )
}

export default Answer;
