export type QuestionType = {
  answers: AnswerType[],
  question_text: string,
  id: number
}

export type AnswerType = {
  question: QuestionType,
  answer_text: string,
  votes: number,
  id: number
}
