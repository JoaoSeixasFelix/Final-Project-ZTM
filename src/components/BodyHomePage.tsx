import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export const BodyHomePage = () => {
  const [link, setLink] = useState();
  console.log(link);
  return (
    <div className="inline-block xl:w-1/3 lg:w-4/6 w-9/12 justify-center items-center">
      <p>This Magic brain will detect faces in your pictures. Fit it a try.</p>
      <div className="grid lg:grid-cols-2">
        <Input
          onValueChange={(e) => setLink(e)}
          name="InputLink"
          placeholder="Input Your Picture Here"
          type={"text"}
          value={link}
          borderColor="border-slate-500"
          width="xl:w-full lg:w-96 w-60"
          padding="py-3"
          bgColor="white"
          textColor="white"
          required
        />
        <Button
          type={"submit"}
          width="xl:w-44 w-60"
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
