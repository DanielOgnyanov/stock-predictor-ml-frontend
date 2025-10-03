export const fetchLatestPrediction = async (symbol) => {
  try {
    const response = await fetch(`http://localhost:8080/api/predict/${symbol}/latest`);

    if (!response.ok) {
      throw new Error("Failed to fetch prediction");
    }

    const data = await response.json();
    return data; 
  } catch (err) {
    throw err;
  }
};
