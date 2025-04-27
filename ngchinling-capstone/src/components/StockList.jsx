import { StockContext } from "../contexts/StockContext";
import { useContext } from 'react';
import { ProfitLossContext } from '../contexts/ProfitLossContext';
import './styles/StockList.css'

function StockList({ title }) {

  const { stocks } = useContext(StockContext);
  const { profitLossData } = useContext(ProfitLossContext);

  return (
    <div className="stock-list">
      <h2>{title}</h2>
      {Array.isArray(stocks) && stocks.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Quantity</th>
              <th>Purchase Price</th>
              <th>Current Price</th>
              <th>Profit/Loss</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock, index) => {
              const profitOrLoss = profitLossData[stock.symbol] || 0;
              const formattedProfitOrLoss = profitOrLoss.toFixed(2);

              return (
                <tr key={index}>
                  <td>{stock.symbol}</td>
                  <td>{stock.quantity}</td>
                  <td>${stock.purchasePrice}</td>
                  <td>${stock.currentPrice}</td>
                  <td style={{ color: profitOrLoss >= 0 ? 'green' : 'red', fontWeight: 'bold' }}>
                    {profitOrLoss >= 0 ? `+ $${formattedProfitOrLoss}` : `- $${Math.abs(formattedProfitOrLoss)}`}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>No stocks added yet</p>
      )}
    </div>
  );
}

export { StockList };
