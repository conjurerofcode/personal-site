import * as React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";

interface IApplicationProps {}

const App: React.FC<IApplicationProps> = () => {
  return (
    <Routes>
      {/* <Header /> */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
{
  /* 
          <Route path="/contact">
            <Contact />
          </Route> */
}
