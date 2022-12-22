import React, { useState, CSSProperties } from "react";
import menu from "../../assets/icons/more.png";
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={wrapperStyle}
      onMouseEnter={() => setIsOpen(!isOpen)}
      onMouseLeave={() => setIsOpen(!isOpen)}
    >
      {isOpen && (
        <div style={popOutStyle}>
          <ul
            style={{ listStyle: "none", display: "flex", flexDirection: "row" }}
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/experiment">Experiment</a>
            </li>
          </ul>
        </div>
      )}
      <div style={btnStyle}>
        <img style={btnStyle} src={menu}></img>
      </div>
    </div>
  );
};

const btnStyle = {
  backgroundColor: "transparent",
  borderWidth: "2px",
  height: "40px",
  width: "40px",
};

const popOutStyle: CSSProperties = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "pink",
  height: "75px",
  width: "200px",
  borderWidth: "2px",
  margin: "2px",
};

const wrapperStyle = {
  height: "100%",
  margin: "10px",
  display: "flex",
  flexdirection: "row",
  justifycontent: "center",
  alignitems: "center",
};

export default Menu;
