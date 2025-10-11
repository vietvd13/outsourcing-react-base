import axios from "axios";
import {toast} from "react-toast";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res.data,
  (err) => {
    if (err.response?.status === 401 || err.response?.status === 403) {

    }
    const message = err.response?.data?.message || err.message ||"An error occurred. Please try again.";
    toast.error(message);
    console.error("API Error", err.response?.data || err.message);
    return Promise.reject(err);
  }
);

export default api;
