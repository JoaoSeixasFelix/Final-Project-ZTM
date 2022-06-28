import axios from "axios";
import { useState } from "react";

export const clarifaiApi = axios.create({
  baseURL: "https://api.clarifai.com",
});

export const api = axios.create({
  baseURL: "http://localhost:3000",
});
