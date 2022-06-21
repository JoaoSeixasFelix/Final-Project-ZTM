import axios from "axios";

export const clarifaiApi = axios.create({
  baseURL: "https://api.clarifai.com",
});

export const api = axios.create({
  baseURL: "http://localhost:7000",
});
