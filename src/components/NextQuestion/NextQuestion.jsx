import { useQuizStore } from "../../stores/useQuizStore"
import { ButtonLink } from "../ButtonLink/ButtonLink"


export const NextQuestion = () => {
  // Gets the required state variables and functions from the store, instead of writing each useQuizStore() separately, we here destructured the object returned by the useQuizStore() hook
  const { quizOver, currentQuestionIndex, answers, errorMessage, setErrorMessage, goToNextQuestion } =
    useQuizStore((state) => ({
      quizOver: state.quizOver,
      currentQuestionIndex: state.currentQuestionIndex,
      answers: state.answers,
      errorMessage: state.errorMessage,
      setErrorMessage: state.setErrorMessage,
      goToNextQuestion: state.goToNextQuestion,
    }));

  // Gets the selected answer index from the answers array and saves it in a variable
  const selectedAnswerIndex = answers?.[currentQuestionIndex]?.answerIndex;

  // Function to handle the "Next" button click.
  const handleNextQuestionClick = () => {
    if (selectedAnswerIndex !== undefined) {
      // If an answer is selected, go to the next question and clear any previous error messages.
      goToNextQuestion();
      setErrorMessage(null);
    } else {
      // If no answer is selected, set an error message and clear it after 1,5 seconds
      setErrorMessage("Oopsie 👻, choose an option!");
      setTimeout(() => {
        setErrorMessage(null);
      }, 1500); // 1500 milliseconds = 2 seconds
    }
  };

  // Check if the current question is the last one, save the result in a variable
  const isLastQuestion = currentQuestionIndex === 9;
  // If the user is on the last question and the quiz is over, save the result in a variable
  const showGetScoreButton = isLastQuestion && quizOver === true;

  return (
    <div className="next-summary-btn">
      {/* if the user is on the last question, and quizOver is set tu true, then Show the "Get your score" button. */}
      {showGetScoreButton ? (
        // Button for getting the final score
        <ButtonLink
          path="/summary"
          className="summary-btn"
          label="Get your score"
          ariaLabel="Get your score"
        />
      ) : (
        <div>
          {/* Display error message if an option is not selected */}
          {errorMessage && (
            <p className="error-message" role="alert" aria-live="assertive">
              {errorMessage}
            </p>
          )}
          {/* "Next" button for moving to the next question or finishing the quiz */}
          <button
            className="next-btn btn-layout"
            onClick={handleNextQuestionClick}
            aria-label={isLastQuestion ? "Finish" : "Next"}
          // disabled={disableNextButton} // Disable the "Next" button when no option is selected
          >
            <div id="btn-pseudocontent"></div>
            <div className="next-btn-content">
              {/* If the user is on the last question, then change the text to Finish */}
              {isLastQuestion ? (
                <span className="btn-text">Finish</span>
              ) : (
                <span className="btn-text">Next</span>
              )}
              {/* Conditionally render the "BiSolidChevronRight" icon if not on the last question */}
              {isLastQuestion ? null : (
                <p></p>
              )}
            </div>
          </button>
        </div>
      )}
    </div>
  );
};