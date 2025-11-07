export const resetPassword = async (token, password) => {
  const response = await fetch("http://localhost:8080/api/auth/reset-password", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token, newPassword: password }),
  });

  if (!response.ok) {
    throw new Error("Failed to reset password");
  }

  return response.json();
};
