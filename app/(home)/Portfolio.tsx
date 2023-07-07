import React from "react";

interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = () => {
  return (
    <div className="my-5">
      <section id="Portfolio" className="bg-gray-200 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
          <p>This is the Portfolio section.</p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
