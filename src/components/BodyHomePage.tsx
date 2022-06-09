import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export const BodyHomePage = () => {
  const [link, setLink] = useState();
  console.log(link);
  return (
    <div className="flex flex-col xl:flex-row lg:flex-row bg-slate-400 xl:w-2/5 lg:h-1/4 lg:w-3/5 h-1/4 w-5/6 !justify-center items-center">
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
        type={"submit"}
        width="xl:w-44 lg:w-44 w-60"
        backGroundColor="bg-purple-600"
        textColor="text-white"
        padding="py-2"
      >
        Entrar
      </Button>
    </div>
  );
};
