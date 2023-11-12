import { useQuizStore } from "../../stores/useQuizStore"

export const CurrentAnswer = ({onClose, answerText, answerType}) => {
  
  return (
    <>
      <div id="modal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h1>{answerType}</h1>
          {answerText}
        </div>
      </div>
    </>
  );
};
