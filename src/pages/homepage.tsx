import type { NextPage } from "next";
import { BodyHomePage } from "../components/BodyHomePage";
import { NavBar } from "../components/NavBar";

const HomePage = () => {
  return (
    <div className="h-full w-full flex flex-col text-center justify-items-center ">
      <div className="w-full h-1/5 items-center">
        <NavBar />
      </div>
      <div className="sm:max-w-5xl block h-4/5  items-center">
        <BodyHomePage />
      </div>
    </div>
  );
};

export default HomePage;
