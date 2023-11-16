import { useQuizStore } from "../../stores/useQuizStore";
import { QuestionsCard } from "../../components/QuestionsCard/QuestionsCard";
import { NextQuestion } from "../../components/NextQuestion/NextQuestion";
import { CurrentAnswer } from "../../components/CurrentAnswer/CurrentAnswer";
import "./questionPage.css"

export const QuestionPage = () => {
  const { showNextButton, setShowNextButton, showAnswer, setShowAnswer, questions, currentQuestionIndex } = useQuizStore((state) => ({
    showNextButton: state.showNextButton, //DELETE LATER?
    setShowNextButton: state.setShowNextButton, //DELETE LATER?
    showAnswer: state.showAnswer, //DELETE LATER?
    setShowAnswer: state.setShowAnswer, //DELETE LATER?
    questions: state.questions,
    currentQuestionIndex: state.currentQuestionIndex,
  }))

  // Destructure values from useQuizStore.
  const { answers, submitAnswer } = useQuizStore();
  // Retrieve the selected answer for the current question.
  const selectedAnswer = answers[currentQuestionIndex];
  // Determine the index of the selected answer, if any.
  const selectedAnswerIndex = selectedAnswer?.answerIndex;
  // Determine if the selected answer is correct.
  // 'isCorrect' is a boolean indicating whether the selected answer is correct.
  const isAnswerCorrect = selectedAnswer?.isCorrect;
  // Handle the click event when an option is selected.

  const handleModalClose = () => {
    setShowAnswer(false);
    setShowNextButton(true);
  };

  return (
    <>
    {showAnswer &&  <CurrentAnswer
          isAnswerCorrect={isAnswerCorrect}
          answerText={questions[currentQuestionIndex].answerText}
          answerType={questions[currentQuestionIndex].answerType}
          onClose={handleModalClose}
        />}
    <section className="main-wrapper">
    <section className="questions-wrapper">
      <QuestionsCard />
      
    </section>
    {showNextButton && <NextQuestion />}
    </section>
    </>
  );
};
