
const BASE_URL =
  process.env.REACT_APP_API_URL
    ? process.env.REACT_APP_API_URL + "/api"
    : "http://localhost:8080/api";

export const fetchStocks = async () => {
  try {
    const response = await fetch(`${BASE_URL}/stocks/latest`);

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





const BASE_URL_ =
  process.env.REACT_APP_API_URL
    ? process.env.REACT_APP_API_URL + "/api"
    : "http://localhost:8080/api";

export const fetchPriceHistory = async (symbol) => {
  try {
    const response = await fetch(`${BASE_URL_}/stocks/price/history/open/${symbol}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching price history:", error);
    throw error;
  }
};




