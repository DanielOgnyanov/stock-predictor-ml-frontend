export const sendResetPasswordEmail = async (email) => {
  const response = await fetch("http://localhost:8080/api/auth/reset-password", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error("Failed to send reset link");
  }

  return response.json();
};
