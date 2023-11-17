import "./footer.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="name-icons">
        Emmy Dieden 2023 ||
        <a href="https://www.linkedin.com/in/emmy-dieden-774574283" className="link">
          <FaLinkedin className="icon" />
        </a>{" "}
        <a href="https://github.com/emmydieden" className="link">
          <FaGithub className="icon" />
        </a>
      </div> 
      <p>The questions for this quiz come from <a className="article-link" href="https://gtscholars.org/the-7-coding-myths-and-why-its-easier-than-you-think" target="_blank" rel="noreferrer noopener">this</a> blog post on GT Scholars Programme</p>
    </footer>
  );
};
