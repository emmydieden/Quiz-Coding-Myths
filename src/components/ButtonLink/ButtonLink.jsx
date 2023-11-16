import { Link } from "react-router-dom";
import "./buttonLink.css"


// Component for the button-element, utilizes the Link-component from react-router-dom
export const ButtonLink = ({ path, onClick, label, ariaLabel, className }) => {
  return (
    <Link to={path} className="btn-layout">
      <button
        // sets standard classnames and adds any classnames passed as props
        className={className}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        <span className="btn-text">{label}</span>
      </button>
    </Link>
  );
};