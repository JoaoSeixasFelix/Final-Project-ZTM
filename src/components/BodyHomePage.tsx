import Image from "next/image";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Button } from "./Button";
import { Input } from "./Input";

export const BodyHomePage = () => {
  const [link, setLink] = useState();
  const [picture, setPicture] = useState();

  const USER_ID = "vp3fx9nhqq2j";
  const PAT = "4bf991280305438ba4a61e7963875886";
  const APP_ID = "d85b056a98b44bc99fe922613461ae77";
  const MODEL_ID = "general-image-recognition";
  const MODEL_VERSION = "aa7f35c01e0642fda5cf400f543e7c40";
  const IMAGE_URL = link;
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

  const res = () => {
    api
      .post(`/v2/models/${MODEL_ID}/versions/${MODEL_VERSION}/outputs`, raw, {
        headers: {
          Accept: "application/json",
          Authorization: "Key " + PAT,
        },
      })
      .then((response) => response)
      .then((result) => console.log(result.data.outputs[0].data.concepts))
      .catch((error) => console.log("error", error));
    setPicture(link);
  };

  return (
    <div className="flex flex-col xl:flex-row lg:flex-row bg-opacity-60 bg-clip-padding backdrop-blur-3xl bg-transparent xl:w-2/5 lg:h-1/4 lg:w-3/5 h-1/4 w-5/6 !justify-center items-center">
      <Input
        onValueChange={(e) => setLink(e)}
        name="InputLink"
        placeholder="Input Your Picture Here"
        type={"text"}
        value={link}
        borderColor="border-slate-500"
        width="xl:w-96 lg:w-96 w-60"
        padding="py-3"
        bgColor="white"
        textColor="white"
        required
      />
      <Button
        onClick={() => res()}
        type={"submit"}
        width="xl:w-44 lg:w-44 w-60"
        backGroundColor="bg-purple-500"
        textColor="text-white"
        padding="py-2"
        marginLeft="lg:ml-4"
        effects="hover:bg-purple-900"
      >
        Detect!
      </Button>
      <img src={picture} />
    </div>
  );
};
