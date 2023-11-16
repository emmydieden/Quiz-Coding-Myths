import { BrowserRouter, Routes, Link} from "react-router-dom";
import {routes} from "./routes/routes"; 
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <main className="">
          <Routes>{routes}</Routes>
        </main>
      </BrowserRouter>
      <Footer />

    </>
  );
};
