import { BrowserRouter, Routes, Link} from "react-router-dom";
import {routes} from "./routes/routes"; 

export const App = () => {
  return (
    <>
      <BrowserRouter>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li >
              <Link to="/question">Question</Link>
            </li>
            <li >
              <Link to="/answer">Answer</Link>
            </li>
            <li >
              <Link to="/summary">Summary</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Routes>{routes}</Routes>
        </main>
      </BrowserRouter>
    </>
  );
};
