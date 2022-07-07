import type { NextPage } from "next";
import SignIn from "./signin";

const Home: NextPage = () => {
  return (
    <div className="w-full h-full">
      <SignIn />
    </div>
  );
};

export default Home;
