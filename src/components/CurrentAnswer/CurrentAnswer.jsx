
export const CurrentAnswer = ({onClose}) => {
  console.log(onClose)
  return (
    <>
      <div id="modal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          Answers
        </div>
      </div>
    </>
  );
};
