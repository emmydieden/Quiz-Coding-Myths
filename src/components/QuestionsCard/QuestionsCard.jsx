import { CurrentQuestion } from "../CurrentQuestion/CurrentQuestion";
import { CurrentOptions } from "../CurrentOptions/CurrentOption";
import { NextQuestion } from "../NextQuestion/NextQuestion";
import { useQuizStore } from "../../stores/useQuizStore";
import "./questionCard.css"

// Component that holds the current question and the current options
export const QuestionsCard = () => {
  const { questions, currentQuestionIndex } = useQuizStore((state) => ({
    questions: state.questions,
    currentQuestionIndex: state.currentQuestionIndex,
  }));

  const isLastQuestion = currentQuestionIndex === 6

  // Returns current question and current options
  return (
    <div className="current-question-container">
      <CurrentQuestion
        question={questions[currentQuestionIndex]}
        currentQuestionIndex={currentQuestionIndex}
      />
       <CurrentOptions
        question={questions[currentQuestionIndex]}
        currentQuestionIndex={currentQuestionIndex}
      />
    </div>
  );
};