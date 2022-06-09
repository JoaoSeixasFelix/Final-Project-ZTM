import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { RankDescription } from "./RankDescription";

export const BodyHomePage = () => {
  const [link, setLink] = useState();
  console.log(link);
  return (
    <div className="flex flex-col justify-center items-center w-full h-5/6">
      <div className="flex w-full justify-center h-1/3 items-center">
        <RankDescription name={"Gugu Gaitero"} rank={1} />
      </div>
      <div className="flex flex-col w-full justify-center h-1/2 items-center">
        <p className="text-center mb-4 sm:text-xl">
          This Magic brain will detect faces in your pictures. Fit it a try.
        </p>
        <div className="sm:max-w-2xl flex items-center justify-center bg-slate-500 px-8 h-2/4 w-4/5">
          <div className="sm:max-w-xl grid sm:grid-cols-2">
            <div className="flex w-full justify-center">
              <Input
                onValueChange={(e) => setLink(e)}
                name="InputLink"
                placeholder="Input Your Picture Here"
                type={"text"}
                value={link}
                borderColor="border-slate-500"
                width="sm:w-96 w-48 py-3"
                bgColor="white"
                textColor="white"
                required
              />
            </div>
            <div className="flex items-center">
              <Button
                type={"submit"}
                width="sm:w-36 w-48"
                backGroundColor="bg-slate-900"
                textColor="text-white"
                padding="py-2"
              >
                Entrar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
