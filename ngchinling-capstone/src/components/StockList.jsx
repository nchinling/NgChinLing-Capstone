import { StockContext } from "../contexts/StockContext";
import { useContext } from 'react';
import { ProfitLossContext } from '../contexts/ProfitLossContext';
import StockCard from './StockCard';
import './styles/StockList.css'

function StockList({ title }) {

  const { stocks } = useContext(StockContext);
  const { profitLossData } = useContext(ProfitLossContext);

  return (
    <div className="stock-list">
      <h2>{title}</h2>
      {Array.isArray(stocks) && stocks.length > 0 ? (
        stocks.map((stock, index) => {
          const profitOrLoss = profitLossData[stock.symbol] || 0;
          return (
            <StockCard
              key={index}
              symbol={stock.symbol}
              quantity={stock.quantity}
              purchasePrice={stock.purchasePrice}
              currentPrice={stock.currentPrice}
              profitOrLoss={profitOrLoss}
            />
          );
        })
      ) : (
        <p>No stocks added yet</p>
      )}
    </div>
  );
}

export { StockList };
