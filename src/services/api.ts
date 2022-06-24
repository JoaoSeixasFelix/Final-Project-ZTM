import axios from "axios";

export const clarifaiApi = axios.create({
  baseURL: "https://api.clarifai.com",
});

export const api = axios.create({
  baseURL: "http://localhost:7000",
});

api.interceptors.response.use(
  function (response: any) {
    return response;
  },
  function (error: any) {
    return Promise.reject(error);
  }
);

console.log("eu aqui");
