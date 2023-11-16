import { useQuizStore } from "../../stores/useQuizStore"
import { ButtonLink } from "../ButtonLink/ButtonLink"
import { MdOutlineNavigateNext } from "react-icons/md"

import "./nextQuestion.css"


export const NextQuestion = () => {
  // Gets the required state variables and functions from the store, instead of writing each useQuizStore() separately, we here destructured the object returned by the useQuizStore() hook
  const { quizOver, currentQuestionIndex, answers, errorMessage, setErrorMessage, goToNextQuestion, setShowNextButton } =
    useQuizStore((state) => ({
      quizOver: state.quizOver,
      currentQuestionIndex: state.currentQuestionIndex,
      answers: state.answers,
      errorMessage: state.errorMessage,
      setErrorMessage: state.setErrorMessage,
      goToNextQuestion: state.goToNextQuestion,
      showNextButton: state.showNextButton, 
      setShowNextButton: state.setShowNextButton
    }));
   
  
    

  // Gets the selected answer index from the answers array and saves it in a variable
  const selectedAnswerIndex = answers?.[currentQuestionIndex]?.answerIndex;

  // Function to handle the "Next" button click.
  const handleNextQuestionClick = () => {
    if (selectedAnswerIndex !== undefined) {
      // If an answer is selected, go to the next question and clear any previous error messages.
      goToNextQuestion();
      setErrorMessage(null);
      setShowNextButton(false)
    } else {
      // If no answer is selected, set an error message and clear it after 1,5 seconds
      setErrorMessage("Choose an option!");
      setTimeout(() => {
        setErrorMessage(null);
      }, 1500); // 1500 milliseconds = 2 seconds
    }
  };

  // Check if the current question is the last one, save the result in a variable
  const isLastQuestion = currentQuestionIndex === 6;
 
  // If the user is on the last question and the quiz is over, save the result in a variable
  const showGetScoreButton = isLastQuestion && quizOver === true;
  

  return (
    <div className="next-summary-btn">
       {isLastQuestion ? <ButtonLink
        path="/summary"
        label="Get score!"
        ariaLabel="Click to start the quiz"
        className="finish-btn"
      />  :  <button
      className="next-btn btn-layout"
      onClick={handleNextQuestionClick}
      aria-label="next"
    >Next</button>}
    </div>
  )

};

