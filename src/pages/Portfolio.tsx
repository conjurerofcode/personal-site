import React, { useState } from "react";

interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  window.addEventListener("load", handleLoad);

  return isLoading ? (
    <></>
  ) : (
    <div className="dark-theme page">
      <h1>Portfolio</h1>
    </div>
  );
};

export default Portfolio;
