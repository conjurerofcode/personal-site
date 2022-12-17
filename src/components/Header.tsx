import * as React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="dark-theme rounded">
      <h1>Michael Moore</h1>
      <nav>
        <span> | </span>
        <a href="/">Home</a>
        <span> | </span>
        <a href="/about">About</a>
      </nav>
    </div>
  );
};

export default Header;
