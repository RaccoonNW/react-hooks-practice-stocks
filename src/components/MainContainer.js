import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [portfolio, setPortfolio] = useState([])
  const [stocks, setStocks] = useState([])
  const [sortBy, setSoryBy] = useState("Alphabetically")
  const [filterBy, setFilterBy] = useState("Tech")

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then((data) => data.json())
    .then(data => setStocks(data))
  }, [])

  function handleStockPurchase(stockAdd) {
    console.log(portfolio)
    const stockInPortfolio = portfolio.find((stock) => stock.id === stockAdd.id)
    if (!stockInPortfolio) {
      setPortfolio([...portfolio, stockAdd])
    }
  }

  function handleRemoveStock(stockToRemove) {
    setPortfolio((portfolio) => 
      portfolio.filter((stock) => stock.id !== stockToRemove.id)
    )
  }

  const sortedStocks = [...stocks].sort((stock1, stock2) => {
    if (sortBy === "Alphabetically") {
      return stock1.name.localeCompare(stock2.name)
    } else {
      return stock1.price - stock2.price
    }
  })

  const filteredStocks = sortedStocks.filter(
    (stock) => stock.type === filterBy
  )


  return (
    <div>
      <SearchBar
        sortBy={sortBy}
        setSortBy={setSoryBy}
        filterBy={filterBy}
        setFilterBy={setFilterBy} 
      />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} handleStockPurchase={handleStockPurchase} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} handleRemoveStock={handleRemoveStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
