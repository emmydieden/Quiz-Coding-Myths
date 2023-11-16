
import {ButtonLink} from "../../components/ButtonLink/ButtonLink"
import "./startPage.css"

// Pagecomponent that displays the startpage
export const StartPage = () => {
  return (
    <div className="main-wrapper start-game-wrapper">
      <div className="title">
        
      </div>
      <h3 className="slogan">Ready to debunk coding myths? </h3>
      <h4 className="slogan">Press 'Start' to begin the quiz!</h4>
      {/* Button to start the quiz */}
      <ButtonLink
        path="/question"
        label="Start quiz!"
        ariaLabel="Click to start the quiz"
      />
    </div>
  );
};