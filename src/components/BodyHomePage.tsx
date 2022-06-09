import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export const BodyHomePage = () => {
  const [link, setLink] = useState();
  console.log(link);
  return (
    <div className="inline-block lg:w-1/4 w-10/12 justify-center items-center">
      <div className="grid lg:grid-cols-2">
        <Input
          onValueChange={(e) => setLink(e)}
          name="InputLink"
          placeholder="Input Your Picture Here"
          type={"text"}
          value={link}
          borderColor="border-slate-500"
          width="lg:96 w-56 py-3"
          bgColor="white"
          textColor="white"
          required
        />
        <Button
          type={"submit"}
          width="lg:96 w-56"
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
