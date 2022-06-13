import axios from "axios";

const USER_ID = "vp3fx9nhqq2j";
const PAT = "4bf991280305438ba4a61e7963875886";
const APP_ID = "d85b056a98b44bc99fe922613461ae77";
const MODEL_ID = "general-image-recognition";
const MODEL_VERSION = "aa7f35c01e0642fda5cf400f543e7c40";
const IMAGE_URL = "https://samples.clarifai.com/metro-north.jpg";
const raw = JSON.stringify({
  user_app_id: {
    user_id: USER_ID,
    app_id: APP_ID,
  },
  inputs: [
    {
      data: {
        image: {
          url: IMAGE_URL,
        },
      },
    },
  ],
});

const requestOptions = {
  method: "POST",
  headers: {
    Accept: "application/json",
    Authorization: "Key " + PAT,
  },
  body: raw,
};

export const api = axios.create({
  baseURL: "https://api.clarifai.com",
});

export const res = () => {api
  .post(
    `/v2/models/${MODEL_ID}/versions/${MODEL_VERSION}/outputs`,
    { body: raw },
    {
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
    }
  )
  .then((response) => console.log(response))
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));}