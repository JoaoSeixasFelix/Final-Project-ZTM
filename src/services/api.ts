import axios from "axios";
import { parseCookies } from 'nookies';
const cookies = parseCookies();
const token = cookies['auth.token'];

export const clarifaiApi = axios.create({
  baseURL: "https://api.clarifai.com",
});

export const api = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token || ''}`
  }
});