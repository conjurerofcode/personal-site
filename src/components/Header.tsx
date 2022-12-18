import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  window.addEventListener("load", handleLoad);
  return isLoading ? (
    <div className="dark-theme"></div>
  ) : (
    <div className="dark-theme rounded header">
      <h1 className="title">
        <a href="/" id="noHover">
          Michael Moore
        </a>
      </h1>
      <div className="links">
        <nav>
          <a href="/">Home</a>
          <span> | </span>
          <a href="/about">About</a>
          <span> | </span>
          <a href="/portfolio">Portfolio</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
