const BASE_URL =
  process.env.REACT_APP_API_URL
    ? process.env.REACT_APP_API_URL + "/api"
    : "http://localhost:8080/api";

export const fetchNews = async () => {
  try {
    const response = await fetch(`${BASE_URL}/news/all`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    
    if (!response.ok) {
      let errorMessage = `HTTP error! status: ${response.status}`;

      try {
        const errData = await response.json();
        if (errData?.error) errorMessage = errData.error;
      } catch (_) {
        
      }

      throw new Error(errorMessage);
    }

    const data = await response.json();

    return data.map((item) => ({
      title: item.title || "No title",
      symbol: item.symbol || "",
      description: item.description || "",
      snippet: item.snippet || "",
    }));
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
