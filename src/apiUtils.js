import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://zenstudentdashboard-backend.onrender.com/api",
});
