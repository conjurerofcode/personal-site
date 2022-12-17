import * as React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <h1>My Website</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
};

export default Header;
