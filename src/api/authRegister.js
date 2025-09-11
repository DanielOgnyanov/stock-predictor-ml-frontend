import axios from "axios";

const API_URL = "http://localhost:8080/api/user/register";

export const authRegister = async (userData) => {
  try {
    const response = await axios.post(API_URL, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Registration failed:", error.response?.data || error.message);
    throw error.response?.data || error;
  }
};