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
          <div className="modal-text">
          <h2>{isAnswerCorrect? `Correct, this is ${answerType}!` : `No, this is ${answerType}!`}</h2>
          {answerText}
          </div>
        </div>
      </div>
    </>
  );
};
