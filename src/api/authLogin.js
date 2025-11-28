import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL + "/api/user/login";


export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(API_URL, { email, password });

    const data = response.data;

    if (!data || !data.token) {
      throw new Error("Invalid login response from server");
    }

    return {
      token: data.token,
      username: data.username || data.lastName || "User",
      userRole: data.userRole || data.role || "USER",
    };

  } catch (error) {
    
    if (error.response) {
      console.error("Server error:", error.response.data);
      throw new Error(error.response.data.message || "Login failed");
    } else if (error.request) {
      console.error("Network error:", error.request);
      throw new Error("Cannot connect to server");
    } else {
      console.error("Unexpected error:", error.message);
      throw new Error(error.message);
    }
  }
};
