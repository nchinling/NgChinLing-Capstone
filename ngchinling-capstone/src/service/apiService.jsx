const API_BASE_URL = 'http://localhost:5000'; 

const getLatestClosingPrice = async (symbol= 'IBM') => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/data?symbol=${symbol}`);
    if (!response.ok) {
      throw new Error('Error fetfching data');
    }
    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export {getLatestClosingPrice}
