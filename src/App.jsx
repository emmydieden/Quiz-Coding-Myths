import { BrowserRouter, Routes, Link} from "react-router-dom";
import {routes} from "./routes/routes"; 

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <main className="">
          <Routes>{routes}</Routes>
        </main>
      </BrowserRouter>
    </>
  );
};
