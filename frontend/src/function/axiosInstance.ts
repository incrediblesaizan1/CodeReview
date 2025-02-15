import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "incrediblesaizan1-code-review-backend.vercel.app",
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
