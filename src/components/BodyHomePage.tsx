import { useState } from "react";
import { api } from "../services/api";
import { Button } from "./Button";
import ImageRecognition from "./ImageRecognition";
import { Input } from "./Input";
import classNames from "classnames";

export const BodyHomePage = () => {
  const [link, setLink] = useState();
  const [picture, setPicture] = useState();
  const [predictionList, setPredictionList] = useState<any[]>([]);

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

  const onSubmitImage = async () => {
    if (link) {
      try {
        const res = await api.post(
          `/v2/models/${MODEL_ID}/versions/${MODEL_VERSION}/outputs`,
          raw,
          {
            headers: {
              Accept: "application/json",
              Authorization: "Key " + PAT,
            },
          }
        );
        const { data } = res.data.outputs[0];
        console.log(res);
        setPredictionList(data.concepts);
      } catch (err) {
        alert(err);
      }
      console.log(predictionList);
      setPicture(link);
    }
  };

  return (
    <div className="flex flex-col w-full h-full !justify-center items-center">
      <div
        className={
          "flex flex-col xl:flex-row lg:flex-row bg-blue-700 bg-opacity-20 bg-clip-padding backdrop-blur-3xl bg-transparent xl:w-2/5 lg:h-1/4 lg:w-3/5 h-2/4 w-5/6 justify-center items-center"
        }
      >
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
          onClick={() => onSubmitImage()}
          type={"submit"}
          width="xl:w-44 lg:w-44 w-60"
          backGroundColor="bg-purple-500"
          textColor="text-white"
          padding="py-2"
          marginTop="lg:mt-0 mt-1"
          marginLeft="lg:ml-4"
          effects="hover:bg-purple-900 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
        >
          Detect!
        </Button>
      </div>
      <div
        className={classNames(
          `flex lg:flex-row lg:w-4/5 lg:justify-center  ${
            link
              ? "bg-blue-700 bg-opacity-20 bg-clip-padding backdrop-blur-3xl bg-transparent"
              : ""
          } flex-col lg:mt-10 lg:items-start items-center lg:w-2/5 h-full `
        )}
      >
        <div className="flex w-full justify-center h-full">
          <ImageRecognition pictures={picture} />
        </div>
        <div className="flex flex-col lg:w-full lg:h-full text-white justify-between lg:ml-8 w-60 lg:overflow-y-auto lg:text-3xl">
          {link ? <p>General</p> : ""}
          <div className="flex lg:w-4/5 lg:h-full justify-between lg:ml-8 w-60 lg:text-3xl">
            <ul className="text-left">
              {predictionList.map((concept, indice) => (
                <li key={indice}>{concept.name.toUpperCase()}</li>
              ))}
            </ul>
            <ul className="lg:ml-7">
              {predictionList.map((concept, indice) => (
                <li key={indice}>{concept.value.toFixed(1) * 100 + "%"}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
