import axios from "axios";

const API_URL =
  process.env.REACT_APP_API_BASE_URL
    ? `${process.env.REACT_APP_API_BASE_URL}/api/user/register`
    : "http://localhost:8080/api/user/register";

export const authRegister = async (userData) => {
  try {
    const response = await axios.post(API_URL, userData, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: false,
    });

    return response.data;
  } catch (error) {
    console.error(
      "Registration failed:",
      error.response?.data || error.message
    );

    throw error.response?.data || { message: "Registration error" };
  }
};
