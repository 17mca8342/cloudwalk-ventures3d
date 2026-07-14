import axios from "axios"

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000"

export const api = axios.create({
  baseURL: `${BACKEND_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message)
    return Promise.reject(error)
  }
)

export const contactApi = {
  submit: (data: { name: string; email: string; message: string }) =>
    api.post("/contact", data),
}

export const statusApi = {
  create: (client_name: string) => api.post("/status", { client_name }),
  getAll: () => api.get("/status"),
}