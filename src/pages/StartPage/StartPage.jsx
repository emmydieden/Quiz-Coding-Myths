
import {ButtonLink} from "../../components/ButtonLink/ButtonLink"

// Pagecomponent that displays the startpage
export const StartPage = () => {
  return (
    <div className="start-game-wrapper">
      <div className="title">
        <img style={{ height: '200px' }}src="coding.jpeg" alt="Coding image" />
      </div>
      <h2 className="slogan">Embark on code, let your knowledge flow, hit 'Start Quiz,' let the coding wisdom grow!</h2>
      {/* Button to start the quiz */}
      <ButtonLink
        path="/question"
        label="Start quiz!"
        ariaLabel="Click to start the quiz"
      />
    </div>
  );
};