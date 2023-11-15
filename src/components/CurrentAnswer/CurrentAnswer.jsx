import { useQuizStore } from "../../stores/useQuizStore"

import "./currentAnswer.css"

export const CurrentAnswer = ({onClose, answerText, answerType, isAnswerCorrect}) => {
  console.log(isAnswerCorrect)
  
  return (
    <>
      <div id="modal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2>{isAnswerCorrect? `Correct, it's ${answerType}!` : `Incorrect, it's ${answerType}!`}</h2>
          {answerText}
        </div>
      </div>
    </>
  );
};
