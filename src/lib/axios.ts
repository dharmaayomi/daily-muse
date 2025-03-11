import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://servicestew-us.backendless.app/api",
});
