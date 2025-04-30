// const APIKEY = '1C3Q5L578EQ701SU'
const APIKEY = import.meta.env.VITE_ALPHAVANTAGE_APIKEY;


const getClosingPriceFromAPI = async (symbol = 'IBM') => {
  try {
    const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${APIKEY}`);
    // const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo`);
    const data = await response.json();


    // Access the 'Global Quote' from the response data
    const globalQuote = data['Global Quote'];

    if (globalQuote) {
      const latestClose = globalQuote['05. price'];

      // Send the response with symbol and closing price
      return {
        symbol: symbol,
        closing_price: latestClose
      };
    } else {
      // Handle the case where no data is returned for the symbol
      throw new Error('No data found for the given symbol');
    }

  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export { getClosingPriceFromAPI }

