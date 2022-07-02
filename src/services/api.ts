import axios from "axios";

export const clarifaiApi = axios.create({
  baseURL: "https://api.clarifai.com",
});

export const api = axios.create({
  baseURL: "https://back-end-ztm.herokuapp.com",
});
