import axios, { AxiosRequestConfig } from "axios";
import { parseCookies } from 'nookies';

const cookies = parseCookies();
const token = cookies['auth.token'];

const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token || ''}`
  }
});

api.interceptors.request.use(config => {
  const updatedConfig: AxiosRequestConfig = { ...config };
  updatedConfig.headers = updatedConfig.headers || {}
  if (token) {
    updatedConfig.headers.Authorization = `Bearer ${token}`;
  }
  return updatedConfig;
}, error => {
  return Promise.reject(error);
});

export default api;