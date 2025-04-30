import './styles/StockCard.css';

function StockCard({ symbol, quantity, purchasePrice, currentPrice, profitOrLoss }) {
    const formattedProfitOrLoss = profitOrLoss.toFixed(2);
    const isProfit = profitOrLoss >= 0;

    return (
        <div className="stock-card">
            <div><strong>Symbol:</strong> {symbol}</div>
            <div><strong>Quantity:</strong> {quantity}</div>
            <div><strong>Purchase Price:</strong> ${purchasePrice}</div>
            <div><strong>Current Price:</strong> ${currentPrice}</div>
            <div style={{ color: isProfit ? 'green' : 'red', fontWeight: 'bold' }}>
                {isProfit ? `+ $${formattedProfitOrLoss}` : `- $${Math.abs(formattedProfitOrLoss)}`}
            </div>
        </div>
    );
}

export default StockCard;
