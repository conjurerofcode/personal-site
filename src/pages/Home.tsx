import React, { Component, useEffect, useState } from "react";

const Home: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = "pink";
    return () => {
      document.body.style.backgroundColor = "grey";
    };
  }, []);

  return (
    <div>
      <h1>Welcome </h1>
    </div>
  );
};

export default Home;
