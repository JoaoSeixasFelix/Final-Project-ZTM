import Image from "next/image";
import Icon from "../../public/NavBarIcons/strategy-svgrepo-com.svg";
import { Button } from "./Button";

export const NavBar = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex w-1/2 mt-6 ml-6 justify-start items-center">
        <Image src={Icon} height={100} width={100} />
      </div>
      <div className="flex justify-end items-center mt-3 mr-3 w-1/2">
        <Button
          width="w-20"
          height="h-12"
          backGroundColor="bg-slate-900"
          textColor="text-white"
          rounded="rounded-full"
          type="button"
          border="border-2"
          marginRight="mr-3"
        >
          SignIn
        </Button>
        <Button
          width="w-20"
          height="h-12"
          backGroundColor="bg-slate-900"
          textColor="text-white"
          rounded="rounded-full"
          type="button"
          border="border-2"
        >
          SignUp
        </Button>
      </div>
    </div>
  );
};
