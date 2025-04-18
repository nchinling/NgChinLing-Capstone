function StockList({ title, stockListData }) {
    return (
      <div className="stock-list">
        <h2>{title}</h2>
        {Array.isArray(stockListData) && stockListData.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Quantity</th>
                <th>Purchase Price</th>
                <th>Current Price</th>
              </tr>
            </thead>
            <tbody>
              {stockListData.map((stock) => (
                <tr key={stock.symbol}>
                  <td>{stock.symbol}</td>
                  <td>{stock.quantity}</td>
                  <td>{stock.purchasePrice}</td>
                  <td>{stock.currentPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No stocks added yet</p>
        )}
      </div>
    );
  }
  
  export { StockList };
  