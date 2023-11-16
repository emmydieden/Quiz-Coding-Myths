import { useQuizStore } from "../../stores/useQuizStore";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";
import "./summaryPage.css";

export const SummaryPage = () => {
  // Gets the restart function from the store and saves it in a variable
  const restartQuiz = useQuizStore((state) => state.restart);
  const score = useQuizStore((state) => state.score);
  const responses = useQuizStore((state) => state.responses);
  const response = responses.find((response) => response.score === score);

  return (
    <>
    <div className="main-wrapper summary-wrapper">
      <div className="score-container">
        <h2>Your score: {score} / 7</h2>
      </div>
<div className="response-text">
      <p className="response-paragraph">{response.text}</p>
      <ButtonLink 
        path="https://codeinstitute.net/se/blog/7-myths-about-coding/"
        ariaLabel="Redirect to blog post"
        label="Read article"
        className="article-btn"
        />
      <ButtonLink
        path="/" // or use 'to' for routing, e.g., "/question-page"
        onClick={restartQuiz}
        ariaLabel="Restart the Quiz"
        label="Restart quiz"
        className="restart-btn"
      />
      </div>
    </div>
    </>
  );
};
