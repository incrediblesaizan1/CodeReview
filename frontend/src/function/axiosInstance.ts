import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://incrediblesaizan1-code-review-backend.vercel.app",
  timeout: 20000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
