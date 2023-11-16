
import {ButtonLink} from "../../components/ButtonLink/ButtonLink"
import "./startPage.css"

// Pagecomponent that displays the startpage
export const StartPage = () => {
  return (
    <div className="main-wrapper start-game-wrapper">
      <div className="title">
        
      </div>
      <h2 className="slogan">Ready to debunk coding myths? </h2>
      {/* <p className="slogan">Press 'Start' to begin the quiz!</p> */}
      {/* Button to start the quiz */}
      <ButtonLink
        path="/question"
        label="Start the quiz!"
        ariaLabel="Click to start the quiz"
        className="btn-gradient"
      />
    </div>
  );
};