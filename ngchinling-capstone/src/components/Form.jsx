import React, { useState, useContext, useEffect } from 'react';
import { getClosingPriceFromAPI } from '../service/apiService';
import { calculateProfitOrLoss } from '../service/profitLossService';
import { StockContext } from '../contexts/StockContext';
import { ProfitLossContext } from '../contexts/ProfitLossContext';
import './styles/Form.css'

function Form() {
  const [symbol, setSymbol] = useState(''); // Store stock symbol
  const [closingPrice, setClosingPrice] = useState(null); // Store closing price
  const [quantity, setQuantity] = useState(''); // store quantity
  const [purchasePrice, setPurchasePrice] = useState(''); // Store purchase price
  const [error, setError] = useState(null); // Store error messages
  const { addStock } = useContext(StockContext);
  const { calculateProfitLoss } = useContext(ProfitLossContext);



  useEffect(() => {
    const fetchClosingPrice = async () => {
      if (symbol.trim() === '') {
        setClosingPrice(null);
        return;
      }

      try {
        //getLatestClosingPrice uses fetch at the service layer
        const data = await getClosingPriceFromAPI(symbol);
        setClosingPrice(data.closing_price);
        setError(null);
      } catch (err) {
        setError('Error fetching data. Please try again.');
        setClosingPrice(null);
      }
    };

    fetchClosingPrice();
  }, [symbol]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);

    const newStock = {
      symbol,
      quantity,
      purchasePrice,
      currentPrice: closingPrice,
    };

    addStock(newStock);

    // calculate and store profit/loss
    calculateProfitLoss(symbol, quantity, purchasePrice, closingPrice);

    //reset form fields
    setSymbol('');
    setQuantity('');
    setPurchasePrice('');
  };


  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <input type="text" placeholder="Stock Symbol" name="stockSymbol" value={symbol}
            onChange={(event) => setSymbol(event.target.value)} required />
        </label>

        <label>
          <input type="text" placeholder="Quantity" name="quantity" value={quantity}
            onChange={(event) => setQuantity(event.target.value)} required />
        </label>

        <label>
          <input type="text" placeholder="Purchase Price" name="purchasePrice" value={purchasePrice}
            onChange={(event) => setPurchasePrice(event.target.value)} required />
        </label>

        <button type="submit">Add Stock</button>
      </form>

      {/* Display price */}
      {closingPrice !== null && (
        <div>
          <h2>Latest Closing Price for {symbol.toUpperCase()}</h2>
          <p>${closingPrice}</p>
        </div>
      )}
    </>
  );
}


export default Form;


