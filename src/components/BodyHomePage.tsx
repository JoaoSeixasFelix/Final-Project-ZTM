import { useState } from "react";
import { clarifaiApi } from "../services/api";
import { Button } from "./Button";
import ImageRecognition from "./ImageRecognition";
import { Input } from "./Input";
import classNames from "classnames";

export const BodyHomePage = () => {
  const [link, setLink] = useState();
  const [picture, setPicture] = useState();
  const [predictionList, setPredictionList] = useState<any[]>([]);
  const [toggle, setToggle] = useState(false);

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
        const res = await clarifaiApi.post(
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
        setPredictionList(data.concepts);
        res.status === 200 ? setToggle(true) : setToggle(false);
      } catch (err) {
        alert(err);
      }
      setPicture(link);
    }
  };

  return (
    <div className="flex flex-col w-full h-full !justify-center mb-5 items-center">
      <div
        className={
          "flex mb-8 mt-6 py-10 flex-col xl:flex-row lg:flex-row bg-purple-400 bg-opacity-20 bg-clip-padding backdrop-blur-3xl bg-transparent 2xl:w-1/4 xl:w-3/5 lg:h-1/4 lg:w-3/5 h-36 w-5/6 justify-center items-center"
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
          effects="lg:hover:bg-purple-900 transition lg:ease-in-out lg:delay-150 bg-purple-600 lg:hover:-translate-y-1 lg:hover:scale-110 lg:hover:bg-indigo-500 lg:duration-300"
        >
          Detect!
        </Button>
      </div>
      <div
        className={classNames(
          `flex lg:flex-row lg:w-5/6 px-3 lg:justify-center  ${
            toggle
              ? "bg-blue-500 bg-opacity-10 bg-clip-padding backdrop-blur-3xl bg-transparent"
              : ""
          } flex-col lg:mt-14 lg:items-start items-center lg:w-2/5 `
        )}
      >
        <div className="flex w-full justify-center h-full">
          <ImageRecognition pictures={picture} />
        </div>
        <div className="flex flex-col lg:w-full h-full text-white justify-between lg:ml-8 w-60 lg:overflow-y-auto lg:text-3xl">
          {toggle ? <p className="text-2xl lg:mt-4 mb-4">Predictions</p> : ""}
          <div className="flex h-full lg:w-4/5 justify-between lg:ml-8 w-60 lg:text-2xl">
            <ul className="h-full text-left">
              {predictionList.map((concept, indice) => (
                <li key={indice}>{concept.name.toUpperCase()}</li>
              ))}
            </ul>
            <ul className="h-full mb-3 lg:ml-7">
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
