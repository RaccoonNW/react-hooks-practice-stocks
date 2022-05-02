import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, handleRemoveStock }) {

  const renderedPortfolio = portfolio.map((stock) => (
    <Stock
      key={stock.id}
      stock={stock}
      onStockClick={handleRemoveStock}
    />
  ))

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        renderedPortfolio
      }
    </div>
  );
}

export default PortfolioContainer;
