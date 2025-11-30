const BASE_URL =
  process.env.REACT_APP_API_URL
    ? process.env.REACT_APP_API_URL + "/api"
    : "http://localhost:8080/api";

export const fetchLatestPrediction = async (symbol) => {
  try {
    const response = await fetch(`${BASE_URL}/predict/${symbol}/latest`);

    if (!response.ok) {
      throw new Error("Failed to fetch prediction");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
};
