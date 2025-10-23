
export const fetchStocks = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/stocks/latest");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data; 
  } catch (error) {
    console.error("Error fetching stocks:", error);
    return []; 
  }
};




export const fetchPriceHistory = async (symbol) => {
  try {
    const response = await fetch(`http://localhost:8080/api/stocks/price/history/open/${symbol}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching price history:", error);
    throw error;
  }
};




