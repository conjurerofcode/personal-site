import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

// const container = document.getElementById("app-root")!;
// const root = createRoot(container);
// root.render(<App />);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
