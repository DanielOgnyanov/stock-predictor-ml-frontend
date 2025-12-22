const BASE_URL =
  process.env.REACT_APP_API_BASE_URL
    ? `${process.env.REACT_APP_API_BASE_URL}/api`
    : "http://localhost:8080/api";

export const sendResetPasswordEmail = async (email) => {
  const response = await fetch(`${BASE_URL}/auth/request-password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error("Failed to send reset link");
  }

  return response.json();
};

