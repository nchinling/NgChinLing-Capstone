const API_BASE_URL = 'http://localhost:5000';

const getClosingPriceFromAPI = async (symbol = 'IBM') => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/data?symbol=${symbol}`);
        // const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${APIKEY}`);

        if (!response.ok) {
            throw new Error('Error fetching data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export { getClosingPriceFromAPI }