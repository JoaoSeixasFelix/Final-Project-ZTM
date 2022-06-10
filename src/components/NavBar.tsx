import Image from "next/image";
import Icon from "../../public/NavBarIcons/strategy-svgrepo-com.svg";
import { Button } from "./Button";

export const NavBar = () => {
  return (
    <div className="flex w-full bg-opacity-5 bg-violet-600 bg-clip-padding backdrop-blur-lg justify-between">
      <div className="flex w-1/2 mt-4 ml-6 justify-start mb-5 items-center">
        <Image src={Icon} height={90} width={90} />
      </div>
      <div className="flex justify-end items-center mt-3 mr-16 w-1/2">
        <Button
          width="w-24"
          height="h-12"
          backGroundColor="bg-slate-900"
          borderColor="border-black ho"
          textColor="text-white"
          rounded="rounded-full"
          type="button"
          border="border-2"
          effects="hover:bg-purple-900"
        >
          SignOut
        </Button>
      </div>
    </div>
  );
};
