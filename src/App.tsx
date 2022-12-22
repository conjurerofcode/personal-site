import * as React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Header from "./components/Header";
import Experiment from "./pages/Experiment";

interface IApplicationProps {}

const App: React.FC<IApplicationProps> = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/experiment" element={<Experiment />} />
      </Routes>
    </div>
  );
};

export default App;
{
  /* 
          <Route path="/contact">
            <Contact />
          </Route> */
}
