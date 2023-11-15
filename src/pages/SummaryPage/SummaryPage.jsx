import { useQuizStore } from "../../stores/useQuizStore";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink"

export const SummaryPage = () => {
  // Gets the restart function from the store and saves it in a variable
  const restartQuiz = useQuizStore((state) => state.restart);
  return (
    <div>
      <ButtonLink
        path="/" // or use 'to' for routing, e.g., "/question-page"
        onClick={restartQuiz}
        ariaLabel="Restart the Quiz"
        label="Restart the Quiz"
      />
    </div>
  )
}
