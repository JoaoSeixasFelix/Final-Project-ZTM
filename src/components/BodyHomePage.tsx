import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { RankDescription } from "./RankDescription";

export const BodyHomePage = () => {
  const [link, setLink] = useState();
  console.log(link);
  return (
    <div className="block w-full justify-center">
      <div className="grid sm:grid-cols-2">
        <Input
          onValueChange={(e) => setLink(e)}
          name="InputLink"
          placeholder="Input Your Picture Here"
          type={"text"}
          value={link}
          borderColor="border-slate-500"
          width="py-3"
          bgColor="white"
          textColor="white"
          required
        />
        <Button
          type={"submit"}
          width="w-52"
          backGroundColor="bg-slate-900"
          textColor="text-white"
          padding="py-2"
        >
          Entrar
        </Button>
      </div>
      <div className="flex justify-center sm:w-96 w-52"></div>
    </div>
  );
};
