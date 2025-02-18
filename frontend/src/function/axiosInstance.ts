import axios from "axios";

export const axiosInstance = axios.create({
  // baseURL: "https://incrediblesaizan1-code-review-backend.vercel.app",
  baseURL: "http://localhost:3000",
  timeout: 20000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
