import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { RankDescription } from "./RankDescription";

export const BodyHomePage = () => {
  const [link, setLink] = useState();
  console.log(link);
  return (
    <div className="grid sm:grid-cols-2">
      <div>
        <Input
          onValueChange={(e) => setLink(e)}
          name="InputLink"
          placeholder="Input Your Picture Here"
          type={"text"}
          value={link}
          borderColor="border-slate-500"
          width="sm:w-80 w-52 py-3"
          bgColor="white"
          textColor="white"
          required
        />
      </div>
      <div className="flex items-center">
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
    </div>
  );
};
