import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://65.2.132.88:7070/admin",
  headers: {'Content-Type': 'application/json'},
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `${token}`;
  }
  return config;
})

export default apiClient;