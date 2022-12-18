import React, { Component, useState } from "react";

const Home: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  window.addEventListener("load", handleLoad);

  return isLoading ? (
    <></>
  ) : (
    <div className="dark-theme page">
      <h1>Welcome </h1>
    </div>
  );
};

export default Home;
