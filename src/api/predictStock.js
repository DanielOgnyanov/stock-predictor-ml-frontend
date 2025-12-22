const BASE_URL =
  process.env.REACT_APP_API_BASE_URL
    ? `${process.env.REACT_APP_API_BASE_URL}/api`
    : "http://localhost:8080/api";

export const fetchLatestPrediction = async (symbol) => {
  try {
    const response = await fetch(`${BASE_URL}/predict/${symbol}/latest`);

    if (!response.ok) {
      throw new Error("Failed to fetch prediction");
    }

    return await response.json();
  } catch (err) {
    throw err;
  }
};

