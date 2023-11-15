import { useState } from "react";
import { useQuizStore } from "../../stores/useQuizStore";
import { ImCross } from "react-icons/im";
import { ImCheckmark } from "react-icons/im";
import { CurrentAnswer } from "../CurrentAnswer/CurrentAnswer";
import { NextQuestion } from "../NextQuestion/NextQuestion";
import "./currentOptions.css";

import "./currentOptions.css";

export const CurrentOptions = ({ question, currentQuestionIndex }) => {
  const { showAnswer, setShowAnswer, showNextButton, setShowNextButton } =
    useQuizStore((state) => ({
      showAnswer: state.showAnswer, //DELETE LATER?
      setShowAnswer: state.setShowAnswer, //DELETE LATER?
      showNextButton: state.showNextButton,
      setShowNextButton: state.setShowNextButton,
    }));

  // const [showCurrentAnswer, setShowCurrentAnswer] = useState(false); //OLD STATE
  // Get the available options.
  const options = question.options;

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

  const handleOptionClick = (index) => {
    // Check if option is already choosen.
    if (selectedAnswerIndex !== undefined) {
      // Do nothing if the user attempts to change their answer.
      return;
    }

    setTimeout(() => {
      setShowAnswer(true);
    }, 500);

    // Submit the selected answer to the store.
    submitAnswer(question.id, index);

    // Set focus to the next interactive element after an option is selected.
    const nextElement = document.querySelector(".next-btn");
    if (nextElement) {
      nextElement.focus();
    }
  };

  // Handle keydown events, allowing users to press Enter to select an option.
  const handleOptionKeyDown = (event, index) => {
    if (event.key === "Enter") {
      handleOptionClick(index);
    }
  };

  const handleModalClose = () => {
    setShowAnswer(false);
    setShowNextButton(true);
  };

  return (
    // Container for the answer options.
    <div className="options-next-container">
      <div className="options-container">
        {options.map((option, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleOptionClick(index)} // Handle a click event when an option is selected.
            onKeyDown={(event) => handleOptionKeyDown(event, index)} // Handle keydown events to allow users to press Enter to select an option.
            aria-label={`Select option: ${option}`} // Provide an accessible label for screen readers.
            // Apply a CSS class based on whether the option that is selected is correct or incorrect.
            className={
              selectedAnswerIndex === index
                ? isAnswerCorrect
                  ? "correct"
                  : "incorrect"
                : ""
            }
          >
            {option}
            {/* Use conditional rendering to display icons based on the answer correctness */}
            {/* If the answer is correct, display a checkmark. */}
            {isAnswerCorrect && selectedAnswerIndex === index && (
              <ImCheckmark />
            )}
            {/* If the answer is incorrect, display a X. */}
            {!isAnswerCorrect && selectedAnswerIndex === index && <ImCross />}
          </button>
        ))}
      </div>
      {showAnswer && (
        <CurrentAnswer
          isAnswerCorrect={isAnswerCorrect}
          answerText={question.answerText}
          answerType={question.answerType}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};
