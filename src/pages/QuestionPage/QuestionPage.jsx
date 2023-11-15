import { useQuizStore } from "../../stores/useQuizStore";
import { QuestionsCard } from "../../components/QuestionsCard/QuestionsCard"
import { NextQuestion } from "../../components/NextQuestion/NextQuestion"

export const QuestionPage = () => {
  const {  showNextButton, setShowNextButton } =
    useQuizStore((state) => ({
      showNextButton: state.showNextButton, //DELETE LATER? 
      setShowNextButton: state.setShowNextButton //DELETE LATER?

    }));
  return (
    <section className="questions-wrapper">
  
    <QuestionsCard />

    {showNextButton && (
        <NextQuestion />
      )}
   
  
  </section>
  )
}
