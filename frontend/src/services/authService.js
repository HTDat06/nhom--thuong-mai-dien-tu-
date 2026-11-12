const API_BASE_URL = import.meta.env.VITE_API_URL || "";

async function request(path, data) {
    const response = await fetch(`${API_BASE_URL}/api/auth${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    if (!response.ok) {
        throw new Error(result.message || "Đã xảy ra lỗi. Vui lòng thử lại.");
    }
    return result;
}

export const loginRequest = (data) => request("/login", data);
export const registerRequest = (data) => request("/register", data);
