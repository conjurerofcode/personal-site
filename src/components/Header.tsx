import React, { CSSProperties, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const Header: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  window.addEventListener("load", handleLoad);
  return (
    <div style={headerStyle}>
      <h1 style={titleStyle}>
        <a href="/" id="noHover">
          MxM
        </a>
      </h1>
      <ul style={linkStyle} id="noHover">
        <li>
          <Link to="/">Home</Link>
          {/* <a href="/">Home</a> */}
        </li>
        <li>
          <Link to="/about">About</Link>
          {/* <a href="/about">About</a> */}
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
          {/* <a href="/portfolio">Portfolio</a> */}
        </li>
        <li>
          <Link to="/experiment">Experiment</Link>
          {/* <a href="/experiment">Experiment</a> */}
        </li>
      </ul>
    </div>
  );
};

const titleStyle: CSSProperties = {
  color: "white",
  background: "transparent",
  display: "inline-block",
};

const headerStyle: CSSProperties = {
  position: "sticky",
  top: "0px",
  display: "flex",
  alignItems: " center",
};

const linkStyle: CSSProperties = {
  background: "transparent",
  listStyle: "none",
  display: "flex",
  flexDirection: "row",
};

export default Header;
