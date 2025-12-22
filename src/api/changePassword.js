const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL
    ? `${process.env.REACT_APP_API_BASE_URL}/api/user`
    : "http://localhost:8080/api/user";

export const changePassword = async (payload) => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No authentication token found. Please login.");
  }

  try {
    const response = await fetch(`${API_BASE_URL}/change-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      let errorMessage = "Failed to change password. Please try again.";

      try {
        const errorData = await response.json();
        if (errorData?.error) errorMessage = errorData.error;
      } catch (_) {}

      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (err) {
    console.error("Change-password request failed:", err);
    throw err;
  }
};
