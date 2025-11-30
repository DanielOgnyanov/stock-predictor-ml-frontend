const BASE_URL =
  process.env.REACT_APP_API_URL
    ? process.env.REACT_APP_API_URL + "/api"
    : "http://localhost:8080/api";

export const resetPassword = async (token, password) => {
  const response = await fetch(`${BASE_URL}/auth/reset-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token, newPassword: password }),
  });

  if (!response.ok) {
    throw new Error("Failed to reset password");
  }

  return response.json();
};
