import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  // baseURL: "https://code-review-blue.vercel.app",
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
