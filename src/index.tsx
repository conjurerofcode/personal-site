import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// ReactDOM.createRoot(

//   document.getElementById("root")
// );
