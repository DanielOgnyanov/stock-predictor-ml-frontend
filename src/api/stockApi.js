
export const fetchStocks = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/stocks");
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
