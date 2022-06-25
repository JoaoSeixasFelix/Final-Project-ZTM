import axios from "axios";

export const clarifaiApi = axios.create({
  baseURL: "https://api.clarifai.com",
});

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

api.interceptors.response.use(
  function (response: any) {
    console.log(response);
    return response;
  },
  function (error: any) {
    return Promise.reject(error);
  }
);
