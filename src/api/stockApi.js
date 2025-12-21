

const RAW_BASE_URL = process.env.REACT_APP_API_URL;


const BASE_API_URL = RAW_BASE_URL
  ? `${RAW_BASE_URL}/api`
  : "http://localhost:8080/api";

if (!BASE_API_URL) {
  throw new Error("REACT_APP_API_URL is not defined");
}


export const fetchStocks = async () => {
  try {
    const response = await fetch(`${BASE_API_URL}/stocks/latest`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching stocks:", error);
    return [];
  }
};


export const fetchPriceHistory = async (symbol) => {
  try {
    const response = await fetch(
      `${BASE_API_URL}/stocks/price/history/open/${symbol}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching price history:", error);
    throw error;
  }
};
