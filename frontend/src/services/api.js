const API_URL = "http://localhost:8000";

export async function getUsers() {
  const response = await fetch(`${API_URL}/api/users`);
  return response.json();
}

export async function createUser(user) {
  const response = await fetch(`${API_URL}/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return response.json();
}