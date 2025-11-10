const API_BASE_URL = "http://localhost:8080/api/user/change-password"; 

export const changePassword = async (payload) => {
  const response = await fetch(`${API_BASE_URL}/change-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const errorMessage =
      errorData.error || "Failed to change password. Please try again.";
    throw new Error(errorMessage);
  }

  return response.json();
};
