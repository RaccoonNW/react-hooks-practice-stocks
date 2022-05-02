import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handleStockPurchase }) {

  const renderedStocks = stocks.map(stock => {
    return (
      <Stock
        key={stock.id}
        stock={stock}
        onStockClick = {handleStockPurchase}
      />
    )
  })

  return (
    <div>
      <h2>Stocks</h2>
      {renderedStocks}
    </div>
  );
}

export default StockContainer;
