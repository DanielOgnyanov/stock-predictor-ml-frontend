

const BASE_URL = "http://localhost:8080/api"; 


export const fetchNews = async () => {
  try {
    const response = await fetch(`${BASE_URL}/news/all`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

   
    return data.map(item => ({
      title: item.title || "No title",
      symbol: item.symbol || "",
      description: item.description || "",
      snippet: item.snippet || ""
    }));
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
