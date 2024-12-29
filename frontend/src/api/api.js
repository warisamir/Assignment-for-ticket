import axios from 'axios';
const VITE_API_URL = "https://localhost:3000";
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Set the base URL for your backend API
});

export default api;